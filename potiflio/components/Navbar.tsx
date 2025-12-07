/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/log.jpg" 
            alt="Logo" 
            className="h-16 w-auto"
            style={{filter: 'hue-rotate(-30deg) saturate(3) brightness(1) contrast(1.4) sepia(1)'}}
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`nav-link ${
                  pathname === item.href || (item.href === "/" && pathname === "/")
                    ? "active"
                    : ""
                } hover:text-white transition`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="nav-link block py-2 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

