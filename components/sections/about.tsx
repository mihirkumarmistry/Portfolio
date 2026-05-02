import {
  Braces,
  Cloud,
  Code,
  Database,
  Layers,
  Server
} from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Frontend Framworks",
    description:
      "High-performance UIs using Angular, React, and TypeScript.",
  },
  {
    icon: Braces,
    title: ".NET Ecosystem",
    description:
      "Expert in .NET 8+, C#, and RESTful Web API development.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Azure architecture, CI/CD pipelines, Docker, and deployment strategy.",
  },
  {
    icon: Layers,
    title: "Architecture & Design",
    description:
      "Clean Architecture, Domain-Driven Design (DDD), and SOLID design patterns.",
  },
  {
    icon: Server,
    title: "Systems & Microservices",
    description:
      "REST/GraphQL APIs, microservices patterns, and event-driven systems with Kafka & RabbitMQ.",
  },
  {
    icon: Database,
    title: "Data Engineering & Modeling",
    description:
      "SQL/NoSQL modeling, query optimization, and caching layers.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-teal-400/10 rounded-3xl mb-8 hover:bg-teal-400/20 transition-colors group">
              <Code className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                As a Software Engineer with 4+ years of experience, I focus on building software that is both 
                technically sophisticated and business-oriented. My work centers on the .NET ecosystem and Azure Cloud, 
                where I help organizations architect scalable microservices and modernize full-stack applications using React and Angular.
              </p>

              <p>
                What drives me is solving the "hard" problems: resolving critical production bottlenecks, optimizing 
                system performance, and enforcing SOLID principles to ensure long-term maintainability. I don't just 
                write code; I build culture. In 2022, I was honored as "Employee of the Year," largely due to my focus 
                on team efficiency—specifically creating mentorship programs that reduced new developer onboarding time by 30%.
              </p>

              <p>
                With a recent Master’s in Computer Science, I am actively integrating modern AI and machine learning techniques 
                into traditional engineering workflows. My stack spans the full lifecycle, from infrastructure (Azure, Docker, Kubernetes) 
                to data (SQL, Redis, NoSQL) and performance testing (K6).
              </p>
              <p>
                I am always looking to connect with teams that value architectural discipline and practical, high-impact delivery. 
                If you are working on interesting cloud-native systems, <a href="#contact" className="gradient-text">let’s talk.</a> 
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-400/20 transition-colors">
                      <Icon
                        size={24}
                        className="text-teal-400 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-400 mb-2 text-base">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
