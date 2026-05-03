import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Smile, Brain } from "lucide-react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaGitlab as Gitlab,
  FaWhatsapp,
} from "react-icons/fa6";

const contactMethods = [
  {
    title: "Email",
    description: "mihirmistry3099@gmail.com",
    icon: Mail,
    href: "mailto:mihirmistry3099@gmail.com",
    buttonText: "Send Email",
    color: "text-blue-400",
  },
  {
    title: "LinkedIn",
    description: "Connect for opportunities",
    icon: Linkedin,
    href: "https://linkedin.com/in/mihirkumar-mistry",
    buttonText: "View Profile",
    color: "text-blue-500",
  },  
  {
    title: "WhatsApp",
    description: "Send text on WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/17059925897",
    buttonText: "Send Text",
    color: "text-blue-400",
  }
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full mb-8" />

          <div className="max-w-3xl mx-auto space-y-4 text-gray-300 leading-relaxed">
            <p className="text-xl">
              I am available for new <strong> projects and professional opportunities.</strong>{" "}If
              you'd like to discuss how I can contribute to your team or solve your next technical challenge,
              send me a message or connect with me on LinkedIn. I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card
                key={method.title}
                className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-24px)] group card-hover h-full text-center flex flex-col"
              >
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-400/10 rounded-2xl mx-auto mb-4 group-hover:bg-teal-400/20 transition-colors">
                    <Icon
                      size={32}
                      className={`${method.color} group-hover:text-teal-400 transition-colors`}
                    />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-gray-300 mb-6 flex-grow leading-relaxed">
                    {method.description}
                  </CardDescription>

                  <Button
                    asChild
                    className="w-full mt-auto"
                    leftIcon={<Icon size={18} />}
                  >
                    <Link
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {method.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
