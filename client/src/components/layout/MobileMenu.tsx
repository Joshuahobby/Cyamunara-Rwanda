import { Link, useLocation } from "wouter";
import { navLinks } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  const [location] = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -5 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-gray-200 overflow-hidden shadow-lg fixed top-[60px] left-0 right-0 z-50"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={link.href}>
                  <div 
                    className={`block py-3 text-lg font-medium hover:text-gold transition-300 ${location === link.href ? "text-gold" : "text-navy-dark"} cursor-pointer border-b border-gray-100 last:border-b-0`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
