import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { navLinks } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`bg-white fixed w-full z-50 transition-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center cursor-pointer">
            <div className="text-navy-dark font-montserrat font-bold">
              <div className="text-2xl">CYAMUNARA</div>
              <div className="text-sm tracking-wider">RWANDA LTD</div>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            link.label === "Contact Us" ? (
              <Link href="/contact" key={index}>
                <Button className="bg-navy text-white hover:bg-gold transition-300">
                  {link.label}
                </Button>
              </Link>
            ) : (
              <Link href={link.href} key={index}>
                <a className={`text-navy-dark font-medium hover:text-gold transition-300 ${location === link.href ? "text-gold" : ""}`}>
                  {link.label}
                </a>
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy-dark focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </header>
  );
};

export default Header;
