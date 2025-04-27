"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    timeline
      .to(".boot-text", { opacity: 1, y: 0, duration: 1.5 })
      .to(".codes", { opacity: 1, stagger: 0.2, duration: 0.5 })
      .to(".preloader", { scale: 1.05, duration: 0.4, repeat: 1, yoyo: true })
      .to(".preloader", {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        onComplete: () => setLoading(false),
      });
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-green-400 font-mono overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 bg-black opacity-30 animate-pulse"></div>

      {/* Boot Text */}
      <h1 className="boot-text text-2xl md:text-4xl opacity-0 translate-y-10">
        SYSTEM BOOTING...
      </h1>

      {/* Fake loading codes */}
      <div className="codes opacity-0 mt-6 space-y-2 text-sm md:text-lg">
        <p>[ Boot Sequence 42% ]</p>
        <p>[ Initializing Neural Links... ]</p>
        <p>[ Decrypting AI Core Modules... ]</p>
        <p>[ Access Granted ✅ ]</p>
      </div>
    </div>
  );
};

export default Preloader;
