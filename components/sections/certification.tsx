import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Award } from "lucide-react";


const certifications = [
  "System Administration by Microsoft",
  "AWS Certified Machine Learning",
  "Google Cloud Professional Machine Learning Engineer",
];

export function Certification() {
  return (
    <section id="certification" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
          {/* <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Bridging core computer science fundamentals with modern software engineering practices.
          </p> */}
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Certifications */}
          <div>
            <Card className="group card-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5"
                    >
                      <Award
                        size={16}
                        className="text-teal-400 mr-3 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-300 font-medium">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
