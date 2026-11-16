import { useEffect, useRef } from "react";

const FORM_ID = "c7550a3e-e157-11f1-b202-311c8e92f2f8";

/**
 * EmailOctopus embed. The script renders the form right where its <script>
 * tag sits, and React never runs <script> elements from JSX, so we inject it
 * into our own container on mount and clear it on unmount (StrictMode mounts
 * twice in dev; without the cleanup the form would appear twice).
 */
export function SignupForm() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://eocampaign1.com/form/${FORM_ID}.js`;
    script.dataset.form = FORM_ID;
    host.appendChild(script);
    return () => {
      host.replaceChildren();
    };
  }, []);

  return <div ref={ref} className="w-full max-w-[460px]" />;
}
