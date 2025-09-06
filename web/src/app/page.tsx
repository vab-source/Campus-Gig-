import Hero from "@/components/Hero";
import Regions from "@/components/Regions";
import Services from "@/components/Services";
import Community from "@/components/Community";

export default function Home() {
  return (
    <main className="font-sans min-h-screen px-6 py-10">
      <Hero />
      <Regions />
      <Services />
      <Community />
    </main>
  );
}
