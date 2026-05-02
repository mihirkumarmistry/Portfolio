import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    title: "Teaching Assistant ( Advanced Software Engineering )",
    company: "Algoma University",
    location: "Sault Ste. Marie, Ontario, CA",
    period: "Jan 2025 - Aug 2025",
    duration: "8 months",
    type: "Contract",
    logo: "algomau.png",
    achievements: [
      "Facilitated technical lab sessions on Azure DevOps and Docker, improving lab completion rates by 25% by delivering step-by-step demos and troubleshooting containerization issues.",
      "Mentored students in software architecture and network security, increasing assignment pass rates by 15% through targeted office hours and structured feedback on design decisions.",
      "Coordinated weekly lab logistics and grading workflow, reducing turnaround time by 30% by creating reusable rubrics and batching evaluation with consistent criteria.",
      "Presented practical CI/CD and version-control workflows, raising student tool adoption by 40% by providing reference pipelines, Git branching examples, and hands-on exercises."
    ],
  },
  {
    title: "Software Engineer",
    company: "Kautiyam Pvt. Ltd",
    location: "Surat, India",
    period: "January 2021 - August 2024",
    duration: "3 years 8 months",
    type: "Full-Time",
    logo: "kautilyam.png",
    achievements: [
      "Designed scalable Angular SPAs and a reusable UI component library, reducing new feature build time by 25% through standardized patterns and shared TypeScript components.",
      "Engineered .NET Core REST APIs and microservices that improved integration delivery speed by 20% by optimizing payload shapes and aligning data contracts with frontend consumption.",
      "Diagnosed production performance bottlenecks across browser profiling and SQL query plans, cutting average page load time by 35% by tuning indexes, queries, and client-side rendering paths.",
      "Led Azure DevOps CI/CD automation & enforced SOLID and secure coding standards, reducing deployment-related defects by 30% via gated reviews, automated builds & environment configuration controls."
    ],
  },
  {
    title: "Intern Software Engineer",
    company: "PMC Retail",
    location: "Vadodara, India",
    period: "July 2019 - May 2020",
    duration: "11 months",
    type: "Internship",
    logo: "pmc.png",
    achievements: [
      "Developed Angular UI modules for a UK e-commerce platform, improving checkout UI responsiveness by 20% by implementing SCSS-based design components and optimized TypeScript state handling.",
      "Wrote .NET Core backend logic to support complex frontend workflows, reducing API response time by 15% by improving validation, data mapping, and server-side processing.",
      "Collaborated with cross-functional Agile stakeholders to deliver retail features on schedule, achieving 95% sprint commitment by tightening estimation, clarifying acceptance criteria, and coordinating dependencies.",
      "Tested UI behavior and critical flows with unit tests, increasing front-end test coverage by 20% by adding Jasmine/Karma specs and stabilizing flaky scenarios."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group card-hover">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div>
                      <img src={exp.logo} alt="Organization Logo" className="w-[65px] rounded-[10px] ring-2 ring-teal-400/80 ring-offset-2 ring-offset-gray-900" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-teal-400 mb-2">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-400/10 text-teal-400 border border-teal-400/20">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p> */}

                <div className="space-y-3">
                  <h4 className="font-semibold text-teal-400">
                    Key Responsibilities & Tech:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-300"
                      >
                        <span className="text-teal-400 mr-3 mt-1.5 flex-shrink-0">
                          •
                        </span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
