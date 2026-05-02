import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Building,
  Hospital,
  Server
} from "lucide-react";
import Link from "next/link";
import { FaGithub as Github } from "react-icons/fa6";

const platforms = [
  {
    title: "Dynamic SaaS Admin Panel",
    platform: "Avni",
    description:
      "A scalable, multi-tenant administrative architecture engineered for high-availability SaaS environments. Designed with a database-agnostic backend and real-time WebSocket synchronization to streamline and optimize complex management workflows.",
    icon: "/project/avni.png",
    secondaryIcon: "/organization/kautilyam.png",
    href: "https://kautilyam.com/case-studies/avni-dynamic-admin-panel/",
    color: "text-gray-200",
    hoverColor: "group-hover:text-white",
    bgColor: "bg-gray-800",
    tags: [
      "Angular",
      ".Net Core",
      "TypeScript",
      "Azure Cloud",
      "MSSQL"
    ],
  },
  {
    title: "Hospital Management System",
    platform: "HMS",
    description:
      "A centralized healthcare ecosystem designed for secure patient record lifecycle management and real-time clinical workflow orchestration. Engineered with a robust .NET architecture to support complex scheduling, administrative efficiency, and rigorous data compliance standards.",
    icon: "/project/safeer.png",
    secondaryIcon: "/organization/kautilyam.png",
    href: "https://kautilyam.com/case-studies/hms-healthcare-solution/",
    color: "text-orange-500",
    hoverColor: "group-hover:text-orange-400",
    bgColor: "bg-orange-900/20",
    tags: [
      "Angular",
      ".Net Core",
      "TypeScript",
      "Azure Cloud",
      "MSSQL"
    ],
  },
  {
    title: "Revenue Cycle Management System",
    platform: "RCM",
    description:
      "An automated financial orchestration platform designed to streamline medical billing, claims processing, and revenue reconciliation. Architected for high-accuracy data handling, the system minimizes administrative overhead and denial rates while maintaining strict adherence to financial and regulatory compliance frameworks.",
    icon: "/project/abdali.png",
    secondaryIcon: "/organization/kautilyam.png",
    href: "https://kautilyam.com/case-studies/rcm-revenue-cycle-management-system/",
    color: "text-yellow-400",
    hoverColor: "group-hover:text-yellow-300",
    bgColor: "bg-yellow-900/20",
    tags: [
      "Angular",
      ".Net Core",
      "Node.Js",
      "TypeScript",
      "Azure Cloud",
      "MSSQL",
      "SAP"
    ],
  },
  {
    title: "Retail Commerce Platform",
    platform: "Monsoon London",
    description:
      "A full-stack e-commerce solution engineered for high-volume retail transactions. Features a robust product catalog architecture, secure state management for shopping carts, and integrated payment gateway processing to ensure a seamless, high-performance checkout experience.",
    icon: "/project/monsoon.png",
    secondaryIcon: "/organization/pmc.png",
    href: "https://www.monsoonlondon.com",
    color: "text-blue-400",
    hoverColor: "group-hover:text-blue-300",
    bgColor: "bg-blue-900/20",
    tags: [
      "React",
      "Node.Js",
      "TypeScript",
      "AWS",
      "MongoDB"
    ],
  },
  {
    title: "All Projects & Code",
    platform: "GitHub",
    description:
      "The central hub for all my code. Home to production-grade applications across Web, Cloud, and Data, as well as my passionate exploration into game engines and low-level systems (C, C++, C#, Rust).",
    icon: "/project/github.png",
    secondaryIcon: "/skills/github.png",
    href: "https://github.com/mihirkumarmistry",
    color: "text-gray-200",
    hoverColor: "group-hover:text-white",
    bgColor: "bg-gray-800",
    tags: [
      "TypeScript",
      "Java / Spring Boot",
      "Python",
      "Go",
      "C/C++",
      "Rust",
      "C#",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Code <span className="gradient-text">Repositories</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I organize my development work across specialized platforms. Explore
            my code, models, and datasets based on your area of interest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {platforms.map((item) => {
            const SecondaryIcon = item.secondaryIcon;
            return (
              <Card
                key={item.title}
                className="group card-hover h-full flex flex-col relative overflow-hidden border-gray-800"
              >
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 ${item.bgColor} rounded-bl-full -mr-8 -mt-8 opacity-20 transition-opacity group-hover:opacity-40`}
                />

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`rounded-xl bg-gray-800 border border-gray-700 ${item.color} ${item.hoverColor} transition-colors`}
                    >
                      <img src={item.icon} alt="" className="rounded-xl w-16 ring-2 ring-teal-400/80 ring-offset-2 ring-offset-gray-900" />
                    </div>
                    <img src={item.secondaryIcon} className="w-8 rounded-[50%]" alt="" />
                  </div>
                  <div className="space-y-1">
                    <span
                      className={`text-sm font-bold tracking-wider uppercase ${item.color}`}
                    >
                      {item.platform}
                    </span>
                    <CardTitle className="text-xl text-white">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow relative z-10">
                  <CardDescription className="text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 relative z-10">
                  <Button
                    asChild
                    className="w-full group-hover:bg-teal-500 group-hover:text-white transition-all duration-300"
                    variant="secondary"
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visit Profile{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
