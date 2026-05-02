import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ParticleBackground } from "@/components/ui/particle-background";

const SITE_URL = "https://mihirkumar-mistry.web.app"; 

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mihirkumar Mistry | Full-Stack Software Engineer | .NET & Angular Specialist",
  description: "Full-Stack Software Engineer specializing in .NET Core, Angular, and Azure. Based in Sault Ste. Marie, Ontario, Mihirkumar builds scalable enterprise SaaS solutions and secure clinical systems.",
  keywords: [
    "Software Engineer Ontario",
    "Full-Stack Developer Canada",
    ".NET Core Developer",
    "Angular Specialist",
    "Azure Cloud Engineer",
    "TypeScript",
    "Python",
    "SaaS Architecture",
    "Mihirkumar Mistry Portfolio"
  ],
  authors: [{ name: "Mihirkumar Mistry" }],
  creator: "Mihirkumar Mistry",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Mihirkumar Mistry | Full-Stack Software Engineer | .NET & Angular Specialist",
    description: "Enterprise-grade software solutions built with .NET Core, Angular, and Azure Cloud Infrastructure.",
    siteName: "Mihirkumar Mistry Portfolio",
    images: [
      {
        url: "https://github.com/mihirkumarmistry.png",
        width: 1200,
        height: 630,
        alt: "Mihirkumar Mistry - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihirkumar Mistry | .NET & Angular Specialist",
    description: "Full-Stack Software Engineer specializing in .NET Core, Angular, and Azure.",
    images: ["https://github.com/mihirkumarmistry.png"],
  },
  icons: {
    icon: "https://github.com/mihirkumarmistry.png",
    apple: "https://github.com/mihirkumarmistry.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mihirkumar Mistry",
  "jobTitle": "Full-Stack Software Engineer",
  "url": SITE_URL,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sault Ste. Marie",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Algoma University"
  },
  "image": "https://github.com/mihirkumarmistry.png",
  "sameAs": [
    "https://github.com/mihirkumarmistry",
    "https://linkedin.com/in/mihirkumar-mistry",
  ],
  "knowsAbout": [
    "C#", ".NET Core", "Angular", "TypeScript", "Python", "Azure", "SaaS Architecture", "SQL"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-gray-900 text-gray-100 antialiased">
        <ParticleBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}