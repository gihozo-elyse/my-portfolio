import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingImage from "@/components/GlowingImage";
import { Facebook, Github } from "lucide-react";


const heroImage = "/images/QUALITYCONTROL%23GRAA_12.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <p className="text-primary font-semibold uppercase tracking-widest mb-3">Hello!</p>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                I&apos;m <span className="text-gradient">Elyse Gihozo</span>
              </h1>
              <p className="text-2xl text-primary font-semibold mb-4">Frontend Web Developer</p>
              <p className="text-muted max-w-xl mb-8">
                Passionate about creating beautiful, functional, and user-friendly web applications. I specialize in
                modern web technologies and love turning ideas into reality.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link href="/contact" className="btn-primary">
                  Let&apos;s talk
                </Link>
                <Link href="/projects" className="btn-outline">
                  View Projects
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com/elysegihozo" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Facebook size={18} />
                </a>
                <a href="https://github.com/elysegihozo" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Github size={18} />
                </a>
              </div>

            </div>

            <div className="order-1 md:order-2 flex justify-center animate-slide-in-right">
              <GlowingImage src={heroImage} alt="Elyse Gihozo" />
            </div>
          </div>
        </section>



      </main>
      <Footer />
    </div>
  );
}

