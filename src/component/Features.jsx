"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrainIcon, CommandIcon, LayoutIcon, ZapIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const features = [
    {
      icon: <BrainIcon size={32} className="text-blue-400" />,
      title: "Advanced AI Understanding",
      description:
        "JARVIS comprehends complex instructions and context with human-like understanding.",
    },
    {
      icon: <CommandIcon size={32} className="text-purple-400" />,
      title: "Task Automation",
      description:
        "Automate repetitive tasks across your system with simple natural language commands.",
    },
    {
      icon: <LayoutIcon size={32} className="text-cyan-400" />,
      title: "Cross-Platform Integration",
      description:
        "Seamlessly works across multiple applications and platforms on your computer.",
    },
    {
      icon: <ZapIcon size={32} className="text-green-400" />,
      title: "Lightning Fast Execution",
      description:
        "Processes commands and performs tasks with minimal latency for optimal productivity.",
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const featureRefs = features.map(() => useRef(null));

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
        delay: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      }
    );

    featureRefs.forEach((ref, index) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.5,
          overwrite: "auto",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    featureRefs.forEach((ref) => {
      ref.current.addEventListener("mouseenter", () => {
        gsap.to(ref.current, { y: -15, duration: 0.2, ease: "power2.out" });
      });

      ref.current.addEventListener("mouseleave", () => {
        gsap.to(ref.current, { y: 0, duration: 0.2, ease: "power2.out" });
      });
    });
  });

  return (
    <section ref={sectionRef} id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#552ebd] to-[#19012c]">
              Revolutionary Features
            </span>
          </h2>
          <p ref={textRef} className="text-xl max-w-3xl mx-auto font-medium">
            Discover how NexusAI transforms your workflow with its
            groundbreaking capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, description }, index) => (
            <div
              ref={featureRefs[index]}
              key={index}
              className="bg-transparent border border-gray-700 rounded-xl p-6 hover:border-[#552ebd] transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              <div className="mb-5 p-3 bg-transparent inline-block rounded-lg">
                {icon}
              </div>
              <h3 className="text-xl font-bold tracking-wide mb-3 text-[#c58cf4]">
                {title}
              </h3>
              <p className="text-gray-400 font-medium tracking-tighter">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
