"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingImage from "@/components/GlowingImage";
import SectionTitle from "@/components/SectionTitle";

// Seated woman image for about section
const aboutImage = "/images/seated-woman.jpg";

export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLParagraphElement[]>([]);
  const infoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      observer.observe(titleRef.current);
    }

    paragraphsRef.current.forEach((p, index) => {
      if (p) {
        p.style.opacity = "0";
        p.style.animationDelay = `${0.2 + index * 0.1}s`;
        observer.observe(p);
      }
    });

    if (infoRef.current) {
      infoRef.current.style.opacity = "0";
      infoRef.current.style.animationDelay = "0.5s";
      observer.observe(infoRef.current);
    }

    if (buttonRef.current) {
      buttonRef.current.style.opacity = "0";
      buttonRef.current.style.animationDelay = "0.6s";
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <section className="section">
          <div className="container mx-auto px-6">
            <SectionTitle title="About" highlight="Me" />
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="flex justify-center animate-slide-in-right">
                <div className="relative">
                  <img 
                    src={aboutImage} 
                    alt="Elyse Gihozo" 
                    className="w-full max-w-lg h-auto object-cover rounded-full shadow-2xl border-8 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 sticker-effect"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 0 1px rgba(255, 255, 255, 0.1))',
                      background: 'transparent'
                    }}
                  />
                </div>
              </div>
              <div className="space-y-6 animate-slide-in-left">
                <h3 ref={titleRef} className="text-2xl font-bold">
                  Frontend Web Developer
                </h3>
                <p
                  ref={(el) => {
                    if (el) paragraphsRef.current[0] = el;
                  }}
                  className="text-muted"
                >
                  I&apos;m a passionate frontend web developer with expertise in modern web technologies. I love
                  creating beautiful, responsive, and user-friendly applications that make a difference.
                </p>
                <p
                  ref={(el) => {
                    if (el) paragraphsRef.current[1] = el;
                  }}
                  className="text-muted"
                >
                  With a strong foundation in frontend development, I bring ideas to life using
                  cutting-edge technologies like React, Next.js, TypeScript, and various frontend frameworks.
                </p>
                <p
                  ref={(el) => {
                    if (el) paragraphsRef.current[2] = el;
                  }}
                  className="text-muted"
                >
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
                <div ref={infoRef} className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted">Name:</p>
                    <p className="font-semibold">Elyse Gihozo</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Location:</p>
                    <p className="font-semibold">Kigali, Rwanda</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email:</p>
                    <p className="font-semibold text-primary">elyse@email.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Experience:</p>
                    <p className="font-semibold">5+ Years</p>
                  </div>
                </div>
                <div ref={buttonRef}>
                  <Link href="/contact" className="btn-primary inline-flex">
                    Hire Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

