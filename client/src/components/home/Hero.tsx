import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { companyInfo } from "@/lib/constants";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-navy z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy-dark z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/95 z-20"></div>
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-30">
        {/* Experience badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-3 py-1.5 rounded-full bg-transparent border border-gold/50 mb-4 max-w-fit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-gold font-medium text-sm">{companyInfo.experience} years of Trusted Excellence</span>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-12">
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="block mb-1">Rwanda's leading</span>
              <span className="text-gold">Auctioning</span><span className="text-gold">,</span>
              <span className="text-gold">Assets Valuation</span>
              <span> and <span className="text-gold">Business Advisory</span></span>
              <span>Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-base text-white/90 max-w-xl mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Professional services tailored to individuals and organizations across Rwanda for over {companyInfo.experience} years.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link href="/services">
                <Button className="bg-gold hover:bg-gold/90 text-navy-dark font-bold px-6 py-2 rounded transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white/80 text-white font-bold px-6 py-2 rounded bg-transparent hover:bg-white/10 transition-all duration-300 hover:border-gold hover:text-gold w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Right column - Image */}
          <div className="order-1 lg:order-2 relative">
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-xl mb-4 lg:mb-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="Professional business team working on valuation and auctioning services" 
                className="w-full h-auto rounded-xl border border-white/10"
              />
              
              {/* Floating Stats Card */}
              <motion.div 
                className="absolute bottom-4 left-4 bg-white rounded-lg shadow-xl p-3 border border-white/20 max-w-[140px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="bg-navy rounded-full p-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-navy-dark text-sm">Trusted Since</h3>
                    <p className="text-medium-gray text-sm">{companyInfo.yearEstablished}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Single responsive scroll indicator */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center cursor-pointer z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-white/70 text-xs mb-2">Scroll Down</span>
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gold rounded-full"
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
