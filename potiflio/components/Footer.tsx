import { Github, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

const socials = [
  { icon: Facebook, href: "https://facebook.com/elysegihozo" },
  { icon: Twitter, href: "https://twitter.com/elysegihozo" },
  { icon: Instagram, href: "https://instagram.com/elysegihozo" },
  { icon: Github, href: "https://github.com/elysegihozo" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="flex items-center justify-center md:justify-start">
            <img 
              src="/images/log.jpg" 
              alt="Logo" 
              className="h-12 w-auto"
              style={{filter: 'hue-rotate(-30deg) saturate(3) brightness(1) contrast(1.4) sepia(1)'}}
            />
          </Link>
          <p className="text-muted text-sm mt-2">Frontend Web Developer</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-muted text-sm">© {year} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

