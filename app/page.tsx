"use client";

import { useEffect, useState } from "react";
import { BlinkBlur } from "react-loading-indicators";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      // لو الصفحة كلها محملة خلاص
      handleLoad();
    } else {
      // لو لسه في تحميل، استنى الحدث
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-black flex-col gap-4">
        <BlinkBlur color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
        <p className="text-white animate__animated animate__fadeIn text-center mt-4">
          اغتنم وقتك بالاستغفار وذكر الله 🌿
        </p>
      </div>
    );
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
