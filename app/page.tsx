import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechGrid } from "@/components/portfolio/TechGrid";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import Footer from "@/app/Components/Footer";

export default function Home() {
  return (
    <>
      <main className="site-shell flex min-h-screen flex-col overflow-hidden text-white">
        <Hero />
        <About />
        <TechGrid />
        <FeaturedProjects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
