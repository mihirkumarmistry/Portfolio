import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master's Degree",
    field: "Computer Science",
    institution: "Algoma University",
    period: "Sept 2024 - Aug 2025",
    location: "Ontario, Canada",
    status: "Completed",
    description:
      "Deepened expertise in advanced software engineering paradigms and cloud-native application design. Mastered critical systems engineering, including network architecture, cloud infrastructure, and the principles of machine learning. Applied a human-centered approach to technology through HCI, focusing on the architectural design of scalable, high-performance enterprise systems.",
  },
  {
    degree: "Bachelor's Degree",
    field: "Computer Science",
    institution: "Gujarat Technological University (GTU)",
    period: "Jun 2016 - Aug 2020",
    location: "Gujarat, India",
    status: "Completed",
    description:
      "Established a robust technical foundation in computer science, mastering core algorithms, data structures, and mathematical principles. Gained comprehensive, end-to-end expertise in full-stack development, software architecture, and system design. Developed a deep proficiency in programming logic, database management, and professional engineering practices, creating a versatile base for complex software problem-solving.",
  }
];

export function Education() {
  return (
    <section id="education" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Bridging core computer science fundamentals with modern software engineering practices.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="group card-hover">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center">
                          <GraduationCap size={24} className="text-teal-400" />
                        </div>
                        <div>
                          <CardTitle as="h4" className="text-xl mb-1">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-teal-400 mb-2">
                            {edu.field}
                          </CardDescription>
                          <p className="text-gray-300 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                        {/* <div className="flex items-center text-sm text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <span
                          className={`inline-flex w-fit items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            edu.status === "Completed"
                              ? "bg-green-400/10 text-green-400 border-green-400/20"
                              : "bg-blue-400/10 text-blue-400 border-blue-400/20"
                          }`}
                        >
                          {edu.status}
                        </span> */}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm ml-0 md:ml-16">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
