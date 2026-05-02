import {
  Braces,
  Brain,
  Cloud,
  Code,
  Database,
  SquareTerminal,
  ToolCase
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: SquareTerminal,
    skills: [
      { name: "TypeScript", icon: "skills/typescript.svg" },
      { name: "JavaScript", icon: "skills/javascript.svg" },
      { name: "C#", icon: "skills/csharp.svg" },
      { name: "Python", icon: "skills/python.svg" },
      { name: "SQL", icon: "skills/sql.png" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "Angular", icon: "skills/angular.png" },
      { name: "React", icon: "skills/react.png" },
      { name: "NextJs", icon: "skills/nextjs.png" },
      { name: "HTML5", icon: "skills/html5.png" },
      { name: "CSS3", icon: "skills/css3.png" },
      { name: "SASS", icon: "skills/sass.png" },
      { name: "Tailwind", icon: "skills/tailwind.png" },
    ],
  },
  {
    title: "Backend Developmet",
    icon: Braces,
    skills: [
      { name: ".NET Core", icon: "skills/net core.png" },
      { name: "NodeJs", icon: "skills/nodejs.png" },
      { name: "RestAPI", icon: "skills/api.png" },
      { name: "GraphQL", icon: "skills/graphql.png" }
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Azure", icon: "skills/azure.png" },
      { name: "Google Cloud", icon: "skills/gcp.png" },
      { name: "Docker", icon: "skills/docker.png" },
      { name: "Kubernetes", icon: "skills/kubernetes.png" },
      { name: "GitHub Actions", icon: "skills/github.png" },
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: [
      { name: "My SQL", icon: "skills/mysql.png" },
      { name: "PostgreSQL", icon: "skills/postgresql.png" },
      { name: "MongoDB", icon: "skills/mongodb.png" },
      { name: "Redis", icon: "skills/redis.png" },
    ],
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            My stacks span the <strong>TypeScript ecosystem</strong> (Angular, Node.js, NestJS), the <strong>.NET Core ecosystem</strong> for 
            building scalable enterprise APIs, and Python for automation, data workflows, and performance-driven backend services, all supported 
            by cloud-native deployment practices.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.title}
                className="w-full md:w-[calc(50%-16px)] xl:w-[calc(33.333%-22px)] bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5 group"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-400/10 rounded-2xl mb-4 group-hover:bg-teal-400/20 transition-colors">
                    <CategoryIcon size={32} className="text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-400 mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-teal-400 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-3 rounded-xl bg-gray-900/50 hover:bg-teal-400/10 transition-all duration-300 hover:scale-105 group/skill"
                    >
                      <img src={skill.icon} alt="" className="w-8 h-8 mb-2" />

                      <span className="text-xs font-medium text-center text-gray-300 group-hover/skill:text-teal-400 transition-colors leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
