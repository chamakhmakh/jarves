"use client";
import {
  CheckCircle,
  DownloadIcon,
  MonitorIcon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import Button from "./ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Advanced natural language processing",
  "Cross-application task automation",
  "Self-learning capabilities",
  "Privacy-focused design",
  "Regular updates and improvements",
  "Extensive documentation and support",
];

const icons = [
  {
    Icon: MonitorIcon,
    title: "Windows/MacOS",
  },
  {
    Icon: SmartphoneIcon,
    title: "Android/iOS",
  },
  {
    Icon: TabletIcon,
    title: "Tablet",
  },
];

const Download = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".download-container", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".feature-item", {
        x: -50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".icon-item", {
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".download-card", {
        scale: 0.9,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".latest-card", {
        y: 20,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".bg-blob", {
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup function to revert the context
  }, []);

  return (
    <section
      ref={sectionRef}
      id="download"
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/25 rounded-full blur-xl animate-pulse bg-blob">
          <div
            className="absolute top-20 bottom-20 right-20 w-32 h-32 bg-purple-500/25 rounded-full blur-xl animate-pulse bg-blob"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-40 h-40 bg-cyan-500/25 rounded-full blur-xl animate-pulse bg-blob"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="download-container max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-l from-[#552ebd] to-[#19012c] bg-clip-text text-transparent">
                Download JARVIS Today
              </span>
            </h2>
            <p className="text-xl">
              Experience the future of AI assistance across all uour devices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="feature-item flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-green-400 mt-0.5 mr-3 shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Available On</h3>
                <div className="flex flex-wrap gap-4">
                  {icons.map(({ Icon, title }, index) => (
                    <div
                      key={index}
                      className="icon-item flex items-center bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      <Icon size={20} className="mr-2 text-blue-400" />
                      <span>{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="download-card bg-gray-900 border border-gray-700 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-semibold mb-2">JARVIS v1.0</h3>
                <p className="mb-6">Latest stable release with all features</p>
                <Button className="w-full">
                  <DownloadIcon size={20} className="mr-2" /> Download Now
                </Button>
                <p className="mt-4 text-sm">
                  By downloading, you agree to our Terms od Service and Privacy
                  Policy
                </p>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="latest-card hover:text-white transition-colors text-sm"
                >
                  Looking for the latest updates?{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
