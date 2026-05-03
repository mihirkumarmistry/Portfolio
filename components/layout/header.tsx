"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certification", href: "#certification" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const isClickScroll = useRef(false);
  const clickScrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isClickScroll.current) return;

      // Update active section based on scroll position
      const sections = navigation.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Update indicator position when active section changes
  useEffect(() => {
    const activeIndex = navigation.findIndex(
      (item) => item.href.slice(1) === activeSection,
    );
    const activeRef = navRefs.current[activeIndex];

    if (activeRef) {
      const { offsetWidth, offsetLeft } = activeRef;
      setIndicatorStyle({
        width: offsetWidth,
        left: offsetLeft,
      });
    }
  }, [activeSection]);

  // Handle window resize to recalculate indicator position
  useEffect(() => {
    const handleResize = () => {
      const activeIndex = navigation.findIndex(
        (item) => item.href.slice(1) === activeSection,
      );
      const activeRef = navRefs.current[activeIndex];

      if (activeRef) {
        const { offsetWidth, offsetLeft } = activeRef;
        setIndicatorStyle({
          width: offsetWidth,
          left: offsetLeft,
        });
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (href: string, index: number) => {
    setIsOpen(false);

    isClickScroll.current = true;
    if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);

    // Immediately update active section for instant visual feedback
    const newSection = href.slice(1);
    setActiveSection(newSection);

    // Update indicator position immediately
    const targetRef = navRefs.current[index];
    if (targetRef) {
      const { offsetWidth, offsetLeft } = targetRef;
      setIndicatorStyle({
        width: offsetWidth,
        left: offsetLeft,
      });
    }

    // Smooth scroll to section
    const element = document.getElementById(newSection);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      clickScrollTimeout.current = setTimeout(() => {
        isClickScroll.current = false;
      }, 800);
    } else {
      isClickScroll.current = false;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <nav
          className="container-custom"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="#hero"
              className={`text-xl sm:text-2xl font-bold font-mono text-teal-400 hover:text-teal-300 transition-colors focus:outline-none rounded-md px-2 py-1 relative z-50 ${
                isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              } md:opacity-100 md:pointer-events-auto`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero", 0);
              }}
              aria-label="Mihirkumar Mistry - Go to top"
            >
              {"<"}Mihirkumar{"/>"}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center relative">
              <div className="flex items-center space-x-1 relative">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    ref={(el) => {
                      navRefs.current[index] = el;
                    }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, index);
                    }}
                    className={`relative px-3 py-3 text-sm font-medium transition-all duration-200 hover:text-teal-400 focus:outline-none rounded-md z-10 ${
                      activeSection === item.href.slice(1)
                        ? "text-teal-400"
                        : "text-gray-300"
                    }`}
                    aria-current={
                      activeSection === item.href.slice(1) ? "page" : undefined
                    }
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Animated bottom indicator */}
                <div
                  className="absolute bottom-0 h-0.5 bg-teal-400 rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: `${indicatorStyle.width}px`,
                    transform: `translateX(${indicatorStyle.left}px)`,
                  }}
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-300 hover:text-teal-400 group relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ease-out ${
                    isOpen
                      ? "opacity-0 rotate-180 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ease-out ${
                    isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-180 scale-75"
                  }`}
                />
              </div>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop with blur effect */}
        <div
          className={`absolute inset-0 bg-gray-900/80 backdrop-blur-md transition-all duration-300 ease-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        />

        {/* Menu Content */}
        <div
          id="mobile-menu"
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-gray-700/50 shadow-2xl transition-all duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Menu Header - Fixed positioning to prevent overlap */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700/50 min-h-[80px]">
            <div className="flex-1 min-w-0">
              <h2
                id="mobile-menu-title"
                className="text-base sm:text-lg font-semibold text-teal-400 truncate pr-2"
              >
                Navigation
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-teal-400 flex-shrink-0 ml-2"
              aria-label="Close menu"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </Button>
          </div>

          {/* Menu Items - Scrollable content area */}
          <div className="flex-1 overflow-y-auto">
            <nav
              className="flex flex-col p-4 sm:p-6 space-y-2"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, index);
                  }}
                  className={`group relative flex items-center px-4 py-4 text-base font-medium transition-all duration-200 rounded-xl focus:outline-none ${
                    activeSection === item.href.slice(1)
                      ? "text-teal-400 bg-teal-400/10 shadow-lg shadow-teal-400/10"
                      : "text-gray-300 hover:text-teal-400 hover:bg-teal-400/5"
                  }`}
                  aria-current={
                    activeSection === item.href.slice(1) ? "page" : undefined
                  }
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen
                      ? `slideInRight 0.4s ease-out forwards`
                      : "none",
                  }}
                >
                  {/* Active indicator */}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-teal-400 rounded-r-full" />
                  )}

                  {/* Menu item text */}
                  <span className="relative z-10 ml-2">{item.name}</span>

                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Menu Footer - Fixed at bottom */}
          <div className="border-t border-gray-700/50 p-4 sm:p-6">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Mihirkumar Mistry
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
