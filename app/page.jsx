import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import SmartPanel from "@/components/SmartPanel";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import LightsController from "@/components/LightsController";
import WhatsFloat from "@/components/WhatsFloat";

export default function Home() {
  return (
    <>
      <LightsController />
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Services />
        <SmartPanel />
        <Process />
        <Contact />
      </main>
      <WhatsFloat />
    </>
  );
}
