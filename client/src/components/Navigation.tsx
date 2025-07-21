import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";

export function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact Us" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className=" fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm w-full z-50">
      <div className=" bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-2 px-4 text-center text-sm">
        We have a collection of Games available -{" "}
        <a href="#" className="underline font-semibold hover:text-gray-800 transition-colors">
          Visit our Game Shop
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <span className="text-xl font-bold">Rubik<span className="text-yellow-400">con</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-yellow-400 ${
                  isActive(item.href) ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm rounded-lg mt-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-4 transition-colors hover:text-yellow-400 ${
                  isActive(item.href) ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
