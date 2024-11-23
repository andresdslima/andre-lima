"use client";

import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { navItems } from "../data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav navItems={navItems} />
      </div>
    </main>
  );
};

export default Home;
