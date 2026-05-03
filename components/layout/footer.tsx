import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mihirkumarmistry",
    icon: Github,
    label: "Visit Mihir's GitHub profile",
    hoverColor: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mihirkumar-mistry",
    icon: Linkedin,
    label: "Connect with Mihir on LinkedIn",
    hoverColor: "hover:text-blue-500",
  },
  {
    name: "Email",
    href: "mailto:mihirmistry3099@gmail.com",
    icon: Mail,
    label: "Send Mihir an email",
    hoverColor: "hover:text-teal-400",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full ring-2 ring-teal-400/40 ring-offset-2 ring-offset-gray-950 overflow-hidden hover:ring-teal-400 transition-all duration-300">
              <Image
                src="/profile.jpg"
                alt="Mihirkumar Mistry - Portfolio Profile"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-teal-400 rounded-full border-2 border-gray-950" />
          </div>

          {/* Name & title */}
          <div className="text-center">
            <p className="text-white font-semibold">Mihirkumar Mistry</p>
            <p className="text-gray-400 text-sm mt-0.5">
              Software Engineer · Full-Stack Developer · Cloud Developer · AI/ML Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`p-3 text-gray-400 ${link.hoverColor} transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-full`}
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gray-800" />

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Mihirkumar Mistry. All rights reserved.
            </p>
            <p className="mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
