"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, MicIcon } from "lucide-react";
import * as THREE from "three";

const Hero = () => {
  const [currentCom, setCurrentCom] = useState(0);
  const commands = [
    "Hey Jarvis, open my project files",
    "Jarvis, search for AI development trends",
    "Jarvis, shut down my computer in 30 minutes",
    "Jarvis, what's on my calendar today?",
    "Jarvis, send an email to the team",
  ];
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const brainModelRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return; // we gonna check if the containref exist

    const scene = new THREE.Scene(); // scene setup
    sceneRef.current = scene; // store the scene in the ref

    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      containerRef.current.clientWidth / containerRef.current.clientHeight, // aspect ratio
      0.1, // near clipping plane
      1000 // far clipping plane
    );

    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true, // make the background transparent
      antialias: true, // enable antialiasing
    });
    renderer.setSize(
      containerRef.current.clientWidth, // set the renderer size to match the container size
      containerRef.current.clientHeight // set the renderer size to match the container size
    );
    renderer.setPixelRatio(window.devicePixelRatio); // set the pixel ratio to match the device pixel ratio
    containerRef.current.appendChild(renderer.domElement); // add the renderer to the container
    rendererRef.current = renderer; // store the renderer in the ref

    const ambientLight = new THREE.AmbientLight(0x404040, 2); // create an ambient light
    scene.add(ambientLight); // add the light to the scene
    const directionalLight = new THREE.DirectionalLight(0x4f69ff, 2); // create a directional light
    directionalLight.position.set(1, 1, 1); // set the light position
    scene.add(directionalLight); // add the light to the scene

    const geometry = new THREE.IcosahedronGeometry(2, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0x4f69ff,
      wireframe: true,
      emissive: 0x2a3cff,
      emissiveIntensity: 0.01,
    });

    const brain = new THREE.Mesh(geometry, material);
    scene.add(brain);
    brainModelRef.current = brain;

    const animate = () => {
      requestAnimationFrame(animate);

      if (brainModelRef.current) {
        brainModelRef.current.rotation.x += 0.002;
        brainModelRef.current.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current)
        return;

      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      if (!brainModelRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 0.1;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.1;
      brainModelRef.current.rotation.x += y * 0.1;
      brainModelRef.current.rotation.y += x * 0.1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return; // we gonna check if the containref exist

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.out",
        delay: 2.5,
      }
    );

    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 2,
      delay: 2.5,
      ease: "power4.out",
    });

    gsap.from(".hero-descr", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power4.out",
      delay: 3,
    });

    gsap.from(".command-line", {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "power4.out",
      delay: 3.5,
    });

    gsap.fromTo(
      ".cta-btn",
      {
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 2.5,
        ease: "power3.out",
        delay: 4,
      }
    );

    gsap.from(".arrow", {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "power4.out",
      delay: 4.5,
    });

    const interval = setInterval(() => {
      setCurrentCom((prev) => (prev + 1) % commands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center text-center p-4 relative">
        <div ref={containerRef} className="absolute inset-0 z-0" />
        <h1 className="hero-title text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#552ebd] to-[#19012c] mb-4">
          Meet JARVIS, Your AI Laptop Assistant
        </h1>
        <p className="hero-descr font-semibold text-md md:text-lg lg:text-xl max-w-3xl mb-6 text-[#8e9ac9]">
          Speak naturally to your computer and watch it respond. JARVIS handles
          everything from simple tasks to complex operations, making your
          digital life effortless
        </p>

        <div className="command-line p-4 mb-8 rounded-lg border border-white/20 flex items-center bg-[rgba(255, 255, 255, 0.05)] backdrop-blur-[10px] border-[1px] border-solid border-[rgba(255 ,255, 255, 0.1)] animate-pulse-glow">
          <div className="mr-3 bg-[#23134e] rounded-full p-2">
            <MicIcon className="h-4 md:h-6 w-4 md:w-6 text-indigo-700" />
          </div>
          <div className="typing-animation">
            <p className="font-mono text-[#6d47d2] text-sm md:text-base">
              {commands[currentCom]}
            </p>
          </div>
        </div>

        <button className="cta-btn bg-transparent text-[#9175dd] px-6 py-2 rounded-full text-md md:text-lg font-semibold hover:bg-[#9175dd] hover:text-black duration-300">
          Try it Now
        </button>
        <div className="arrow absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <ChevronDownIcon
            size={32}
            className="text-[#9175dd]/25 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
