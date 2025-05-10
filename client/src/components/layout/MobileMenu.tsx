import { Link, useLocation } from "wouter";
import { navLinks } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  const [location] = useLocation();

  return (
    <div className={`md:hidden bg-white border-t border-gray-200 ${isOpen ? "block" : "hidden"}`}>
      <div className="container mx-auto px-4 py-3">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={index}>
            <div 
              className={`block py-2 hover:text-gold transition-300 ${location === link.href ? "text-gold" : "text-navy-dark"} cursor-pointer`}
              onClick={toggleMenu}
            >
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
