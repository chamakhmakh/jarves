"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircuitBoard, Cpu, Server } from "lucide-react";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      }
    );

    const icons = iconRef.current?.children;

    if (icons) {
      gsap.fromTo(
        icons,
        { opacity: 0, scale: 0.8, rotation: -15 },
        {
          opacity: 0.5,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] overflow-hidden flex items-center justify-center"
    >
      <div ref={iconRef} className="absolute inset-0">
        <div className="absolute top-0 left-6 w-32 h-32 transform text-indigo-900/60">
          <CircuitBoard className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 transform text-indigo-900/60">
          <Cpu className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-6 w-40 h-40 transform text-indigo-900/60">
          <div className="w-full h-full" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 transform text-indigo-900/60">
          <Server className="w-full h-full" />
        </div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#552ebd] to-[#19012c]">
            Power Your Workflow
          </span>
        </h2>
        <p ref={textRef} className="text-xl md:text-2xl font-semibold">
          Let Jarvis handle your tasks while you focus on what matters most
        </p>
      </div>

      {/*
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-gray-800 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-transparent to-gray-800 pointer-events-none"></div>
      */}
    </section>
  );
};

export default Parallax;
