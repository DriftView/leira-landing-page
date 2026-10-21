import { useEffect, useRef, useState } from "react";
import { LeiraMark } from "@/components/ui";

// Signal nodes around the Leira AI core, as % of the stage. `ins` feed the
// core, `outs` are where guidance leaves it. Labels and canvas strings share
// these anchors, so moving one here moves both.
const INPUTS = [
  { x: 13, y: 20, label: "Heart rate" },
  { x: 8, y: 47, label: "Blood pressure" },
  { x: 14, y: 78, label: "Sleep" },
  { x: 31, y: 9, label: "ECG rhythm" },
  { x: 31, y: 91, label: "Activity" },
  { x: 62, y: 8, label: "Latest clinical guidelines" },
  { x: 62, y: 92, label: "Medication" },
];
const OUTPUTS = [
  { x: 87, y: 34, label: "Guidance for you" },
  { x: 87, y: 66, label: "Insights for clinicians" },
];

// Ambient strings drawn in from the edges, on top of the labelled ones.
const DENSITY = 34;
const FLOW_SPEED = 1;
const CORE_R = 82;
// Below this stage width the labels would collide, so only the network shows.
const COMPACT_W = 760;

type Pt = { x: number; y: number; ph: number; amp: number; sz: number };
type Strand = { pts: Pt[]; out: boolean; main: boolean; t: number; sp: number; wait: number };
type Network = { strands: Strand[]; links: [Pt, Pt][]; cx: number; cy: number; W: number; H: number };

function buildNetwork(W: number, H: number): Network {
  // Seeded so the layout is stable across resizes and reloads.
  let s = 11;
  const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const cx = W / 2;
  const cy = H / 2;
  const strands: Strand[] = [];

  const build = (sx: number, sy: number, out: boolean, main: boolean) => {
    const dx = cx - sx;
    const dy = cy - sy;
    const len = Math.hypot(dx, dy);
    const nx = -dy / len;
    const ny = dx / len;
    const bend = (r() - 0.5) * len * 0.45;
    const kx = (sx + cx) / 2 + nx * bend;
    const ky = (sy + cy) / 2 + ny * bend;
    const n = Math.max(5, Math.round(len / 30));
    const pts: Pt[] = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const a = (1 - t) * (1 - t);
      const b = 2 * (1 - t) * t;
      const c = t * t;
      const x = a * sx + b * kx + c * cx;
      const y = a * sy + b * ky + c * cy;
      if (Math.hypot(x - cx, y - cy) < CORE_R) break;
      pts.push({ x, y, ph: r() * 6.28, amp: main ? 1.5 : 1 + r() * 3, sz: main ? 2.4 : 1.2 + r() * 1.4 });
    }
    if (out) pts.reverse();
    strands.push({ pts, out, main, t: r(), sp: (main ? 0.22 : 0.1) + r() * 0.16, wait: r() * 2 });
  };

  INPUTS.forEach(({ x, y }) => {
    for (let k = 0; k < 3; k++) build((W * x) / 100 + (r() - 0.5) * 30, (H * y) / 100 + (r() - 0.5) * 20, false, k === 0);
  });
  OUTPUTS.forEach(({ x, y }) => {
    for (let k = 0; k < 3; k++) build((W * x) / 100 + (r() - 0.5) * 24, (H * y) / 100 + (r() - 0.5) * 24, true, k === 0);
  });
  for (let i = 0; i < DENSITY; i++) {
    const ang = r() * Math.PI * 2;
    const rad = 0.62 + r() * 0.4;
    build(cx + Math.cos(ang) * W * 0.5 * rad, cy + Math.sin(ang) * H * 0.55 * rad, false, false);
  }

  // Faint cross-links between nearby points on different strands.
  const all: [Pt, number][] = [];
  strands.forEach((st, si) => st.pts.forEach((pt) => all.push([pt, si])));
  const links: [Pt, Pt][] = [];
  for (let i = 0; i < all.length && links.length < 160; i += 2) {
    let best: Pt | null = null;
    let bd = 34;
    for (let j = 0; j < all.length; j++) {
      if (all[j][1] === all[i][1]) continue;
      const d = Math.hypot(all[i][0].x - all[j][0].x, all[i][0].y - all[j][0].y);
      if (d < bd) {
        bd = d;
        best = all[j][0];
      }
    }
    if (best) links.push([all[i][0], best]);
  }

  return { strands, links, cx, cy, W, H };
}

function SignalPill({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-3.5 py-2 text-[13px] font-medium shadow-[0_10px_24px_-16px_rgba(150,20,30,.5)]"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className="size-[7px] rounded-full bg-crimson" />
      {label}
    </div>
  );
}

export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [labelsOn, setLabelsOn] = useState(true);

  useEffect(() => {
    const cv = canvasRef.current;
    const stage = cv?.parentElement;
    if (!cv || !stage) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let net: Network | null = null;
    const setup = () => {
      const W = stage.clientWidth;
      const H = stage.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      setLabelsOn(W >= COMPACT_W);
      net = buildNetwork(W, H);
    };
    setup();
    const ro = new ResizeObserver(setup);
    ro.observe(stage);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speed = reduced ? 0 : FLOW_SPEED;
    let last = performance.now();
    let time = 0;
    let raf = 0;

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (!net) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      time += dt * speed;
      const T = time;
      const { strands, links, cx, cy, W, H } = net;
      ctx.clearRect(0, 0, W, H);
      const pos = (pt: Pt): [number, number] => [pt.x + Math.sin(T * 1.2 + pt.ph) * pt.amp, pt.y + Math.cos(T + pt.ph) * pt.amp];

      // Two pulse rings radiating from the core.
      for (let k = 0; k < 2; k++) {
        const f = (T * 0.45 + k * 0.5) % 1;
        ctx.beginPath();
        ctx.arc(cx, cy, 72 + f * 90, 0, 6.283);
        ctx.strokeStyle = `rgba(217,30,41,${0.28 * (1 - f)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(217,30,41,.07)";
      ctx.beginPath();
      links.forEach(([a, b]) => {
        const p = pos(a);
        const q = pos(b);
        ctx.moveTo(p[0], p[1]);
        ctx.lineTo(q[0], q[1]);
      });
      ctx.stroke();

      strands.forEach((st) => {
        const pts = st.pts;
        const n = pts.length;
        if (n < 2) return;
        if (st.wait > 0) st.wait -= dt * speed;
        else {
          st.t += dt * speed * st.sp;
          if (st.t > 1) {
            st.t = 0;
            st.wait = st.main ? 0.4 : 1 + Math.random() * 2.5;
          }
        }
        const P = pts.map(pos);
        ctx.beginPath();
        ctx.moveTo(P[0][0], P[0][1]);
        for (let i = 1; i < n; i++) ctx.lineTo(P[i][0], P[i][1]);
        ctx.strokeStyle = st.main ? "rgba(217,30,41,.26)" : "rgba(217,30,41,.12)";
        ctx.lineWidth = st.main ? 1.2 : 1;
        ctx.stroke();

        // A travelling pulse brightens the points it passes.
        const f = st.wait > 0 ? -9 : st.t * (n - 1);
        for (let i = 0; i < n; i++) {
          const g = Math.max(0, 1 - Math.abs(i - f) / 1.8);
          ctx.beginPath();
          ctx.arc(P[i][0], P[i][1], pts[i].sz + g * 1.6, 0, 6.283);
          ctx.fillStyle = st.out ? `rgba(181,18,27,${0.4 + g * 0.6})` : `rgba(217,30,41,${(st.main ? 0.5 : 0.28) + g * 0.6})`;
          ctx.fill();
        }
        if (f >= 0) {
          const i = Math.floor(f);
          const u = f - i;
          const a = P[i];
          const b = P[Math.min(n - 1, i + 1)];
          const x = a[0] + (b[0] - a[0]) * u;
          const y = a[1] + (b[1] - a[1]) * u;
          ctx.beginPath();
          ctx.arc(x, y, 7, 0, 6.283);
          ctx.fillStyle = "rgba(217,30,41,.16)";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(x, y, 3.2, 0, 6.283);
          ctx.fillStyle = st.out ? "#1C1113" : "#D91E29";
          ctx.fill();
        }
      });
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="relative mx-auto h-[clamp(380px,58vw,680px)] max-w-[1400px]" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 block size-full" />
      {labelsOn && (
        <>
          {INPUTS.map((n) => (
            <SignalPill key={n.label} {...n} />
          ))}
          {OUTPUTS.map((n) => (
            <div
              key={n.label}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col gap-0.5 whitespace-nowrap rounded-[18px] bg-crimson px-[18px] py-3 text-white shadow-[0_16px_32px_-16px_rgba(217,30,41,.7)]"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span className="text-[11px] uppercase tracking-[.1em] opacity-85">Out</span>
              <span className="text-sm font-semibold">{n.label}</span>
            </div>
          ))}
        </>
      )}
      {/* White core so the crimson mark reads; the ring and glow keep the old emphasis. */}
      <div className="absolute top-1/2 left-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-crimson bg-white text-ink shadow-[0_0_0_10px_#FFFFFF,0_0_0_11px_#F3C9C7,0_30px_60px_-20px_rgba(217,30,41,.75)]">
        <LeiraMark height={58} />
        <span className="text-[13px] font-semibold tracking-[.18em] uppercase">
          Leira <span className="text-crimson">AI</span>
        </span>
      </div>
    </div>
  );
}
