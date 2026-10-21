import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { People } from "@/sections/People";
import { HowItWorks } from "@/sections/HowItWorks";
import { Connect } from "@/sections/Connect";
import { UseCases } from "@/sections/UseCases";
import { WhoShouldJoin } from "@/sections/WhoShouldJoin";
import { Audiences } from "@/sections/Audiences";
import { Download } from "@/sections/Download";
import { Footer } from "@/sections/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <People />
        <HowItWorks />
        <Connect />
        <UseCases />
        <WhoShouldJoin />
        <Audiences />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
