import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyTIS from "@/components/sections/WhyTIS";
import Academics from "@/components/sections/Academics";
import Campus from "@/components/sections/Campus";
import Achievements from "@/components/sections/Achievements";
import AdmissionsCTA from "@/components/sections/AdmissionsCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyTIS />
      <Academics />
      <Campus />
      <Achievements />
      <AdmissionsCTA />
    </main>
  );
}
