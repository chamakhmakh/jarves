"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { MenuIcon, XIcon } from "lucide-react";
import gsap from "gsap";

const navigation = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How It Work",
    href: "#demo",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logInRef = useRef(null);
  const getStartedRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    gsap.from(".navbar-item", {
      opacity: 0,
      y: -20,
      stagger: 0.6,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".logo", {
      opacity: 0,
      x: -50,
      duration: 2.5,
      delay: 2,
      ease: "power4.out",
    });

    gsap.from(".hamburger-menu", {
      opacity: 0,
      x: 50,
      duration: 2.5,
      delay: 2,
      ease: "power4.out",
    });

    gsap.fromTo(
      logInRef.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2.5,
        delay: 2,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      getStartedRef.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2.5,
        delay: 2,
        ease: "power4.out",
      }
    );
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(
        ".menu-mobile",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        }
      );
    } else {
      gsap.to(".menu-mobile", {
        y: -100,
        opacity: 0,
        duration: 0.4,
        ease: "power4.in",
      });
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <a
            href="#"
            className="logo font-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-[#9175dd] to-gray-900"
          >
            JARVIS
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map(({ name, href }, i) => (
            <a
              key={i}
              href={href}
              className="navbar-item text-[#9175dd] hover:text-[#23134e] transition-colors font-medium"
            >
              {name}
            </a>
          ))}
          <Button variant="outline" ref={logInRef}>
            Log In
          </Button>
          <a href="#download">
            <Button ref={getStartedRef} variant="new">
              Get Started
            </Button>
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-menu p-2 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="menu-mobile md:hidden border-t border-gray-600 shadow-lg">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-4">
            {navigation.map(({ name, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-[#9175dd] hover:text-[#23134e] transition-colors font-medium"
              >
                {name}
              </a>
            ))}
            <Button variant="outline" className="w-full">
              Log In
            </Button>
            <a href="#download">
              <Button className="w-full">Get Started</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
