"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  PlayIcon,
  PauseIcon,
  MonitorIcon,
  MicIcon,
  ClockIcon,
} from "lucide-react";
import Button from "./ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const demoTabs = [
    {
      title: "Browse the Web",
      icon: MonitorIcon,
      description:
        "Ask JARVES to search for information, open websites, or find specific content online.",
      videoUrl: "/video.mp4",
    },
    {
      title: "Control Your System",
      icon: ClockIcon,
      description:
        "Tell JARVES to shut down your computer, set reminders, or adjust system settings.",
      videoUrl: "/video.mp4",
    },
    {
      title: "Voice Dictation",
      icon: MicIcon,
      description:
        "Dictate emails, documents, or messages without touching your keyboard.",
      videoUrl: "/video.mp4",
    },
  ];
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const tabRefs = useRef([]);
  tabRefs.current = demoTabs;
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=50",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        tabRefs.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=50",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        videoWrapperRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  });

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = demoTabs[activeTab].videoUrl;
      setIsPlaying(true);
    }
  }, [activeTab]);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <section id="demo" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            See{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              JARVES
            </span>{" "}
            in Action
          </h2>
          <p ref={descRef} className="text-xl font-medium max-w-3xl mx-auto">
            Watch how JARVES simplifies your digital life with intuitive voice
            commands and smart automation.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/3  p-6 rounded-xl shadow-md">
            {demoTabs.map((tab, index) => (
              <div
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`flex items-center p-4 rounded-lg mb-3 cursor-pointer transition-all ${
                  activeTab === index
                    ? "bg-transparent border-l-4 border-purple-950 shadow-xl"
                    : "hover:bg-white/5"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="mr-4 p-2 rounded-full bg-transparent">
                  <tab.icon
                    className={`h-6 w-6 ${
                      activeTab === index ? "text-white" : "text-gray-500"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-medium ${
                      activeTab === index ? "text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {tab.title}
                  </h3>
                  {activeTab === index && (
                    <p className="text-sm text-white mt-1 animate-fadeIn">
                      {tab.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div className="mt-6">
              <Button size="lg" className="w-full">
                Try JARVES Free
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div
              ref={videoWrapperRef}
              className="relative rounded-xl overflow-hidden bg-gray-900 shadow-xl border-8 border-gray-800"
            >
              <div className="bg-gray-800 p-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mx-auto text-white text-sm">JARVES Demo</div>
              </div>
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                loop
                muted
                playsInline
                src={demoTabs[activeTab].videoUrl}
              />
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                  {isPlaying ? (
                    <PauseIcon className="h-6 w-6 text-blue-700" />
                  ) : (
                    <PlayIcon className="h-6 w-6 text-blue-700" />
                  )}
                </button>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className={`transition-opacity duration-500 ${
                    isPlaying ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="bg-black/60 backdrop-blur-sm p-6 rounded-full">
                    <PlayIcon className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
