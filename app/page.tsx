"use client";
import dynamic from "next/dynamic";
import { navItems } from "../data";
import Footer from "../components/Footer";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const FloatingNav = dynamic(() => import("../components/ui/FloatingNavbar").then(mod => ({ default: mod.FloatingNav })), { ssr: false });
const Grid = dynamic(() => import("../components/Grid"), { ssr: false });
const Clients = dynamic(() => import("../components/Clients"), { ssr: false });
const Experience = dynamic(() => import("../components/Experience"), { ssr: false });
const RecentProjects = dynamic(() => import("../components/RecentProjects"), { ssr: false });
const Approach = dynamic(() => import("../components/Approach"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav navItems={navItems} />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
