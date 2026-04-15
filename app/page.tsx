import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
import ElevatorIndicator from "@/components/ui/ElevatorIndicator";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Expertise />
      <Projects />
      <WhyChooseUs />
      <Contact />
      <ElevatorIndicator />
      
      {/* Footer */}
      <footer className="py-12 bg-black border-t border-zinc-900 text-center text-zinc-500">
        <p className="text-sm font-medium tracking-wide">© {new Date().getFullYear()} Allotey Engineering Services (AES). All rights reserved.</p>
        <p className="text-xs mt-2 text-zinc-700">Elevating Ghana&apos;s Skyline.</p>
      </footer>
    </main>
  );
}
