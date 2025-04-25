import {
  ExternalLink,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  LucideInstagram,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const socials = [
  {
    href: "#",
    Icon: FacebookIcon,
  },
  {
    href: "#",
    Icon: TwitterIcon,
  },
  {
    href: "#",
    Icon: LucideInstagram,
  },
  {
    href: "#",
    Icon: LinkedinIcon,
  },
  {
    href: "#",
    Icon: GithubIcon,
  },
];

const products = [
  {
    href: "#",
    name: "Features",
  },
  {
    href: "#",
    name: "Download",
  },
  {
    href: "#",
    name: "Pricing",
  },
  {
    href: "#",
    name: "Roadmap",
  },
];

const resources = [
  {
    href: "#",
    name: "Documentation",
  },
  {
    href: "#",
    name: "API",
  },
  {
    href: "#",
    name: "Community",
  },
  {
    href: "#",
    name: "Blog",
  },
];

const company = [
  {
    href: "#",
    name: "About Us",
  },
  {
    href: "#",
    name: "Careers",
  },
  {
    href: "#",
    name: "Contact Us",
  },
  {
    href: "#",
    name: "Privacy Policy",
  },
  {
    href: "#",
    name: "Terms of Service",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-tr from-[#9175dd] to-gray-900">
              JARVIS
            </span>
            <p className="text-gray-400 mb-4 max-w-xs">
              The next generation AI assistant for your laptop. Control your
              computer with natural voice commands.
            </p>

            <div className="flex space-x-4">
              {socials.map(({ href, Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {products.map(({ href, name }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map(({ href, name }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map(({ href, name }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 tetx-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} JARVIS. All rights reserved.
          </p>

          <div className="flex items-center space-x-2 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              Status{" "}
              <span className="w-2 h-2 bg-green-400 rounded-full ml-2"></span>
            </a>
            <span className="text-gray-200">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              Privacy Policy <ExternalLink size={12} className="ml-1" />
            </a>
            <span className="text-gray-200">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              Terms of Service <ExternalLink size={12} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
