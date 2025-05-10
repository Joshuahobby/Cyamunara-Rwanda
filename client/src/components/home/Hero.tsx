import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { companyInfo } from "@/lib/constants";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-navy z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy-dark/95 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/95 z-20"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl z-10"></div>
      
      <div className="container mx-auto px-4 relative z-30 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-navy-dark/80 border border-gold/30 mb-6 backdrop-blur-sm"
            >
              <span className="text-gold font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {companyInfo.experience} of Trusted Excellence
              </span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold leading-tight mb-6">
              <span className="block">Rwanda's leading</span>
              <span className="text-gold">Auctioning</span>, <span className="text-gold">Assets Valuation</span> 
              <span className="block mt-1">and <span className="text-gold">Business Advisory</span> Services</span>
            </h1>
            
            <motion.p 
              className="text-xl mb-8 text-white/90 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Professional services tailored to individuals and organizations across Rwanda for over {companyInfo.experience}.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/services">
                <Button className="bg-gold hover:bg-gold/90 text-navy-dark font-bold text-lg px-8 py-6 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/20 w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white/70 text-white font-bold text-lg px-8 py-6 rounded-md bg-transparent hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image Column */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 border-gold opacity-70 z-10"></div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-2 border-r-2 border-gold opacity-70 z-10"></div>
              
              {/* Main image with overlay */}
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-navy-dark/50 border border-white/10">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
                    alt="Professional business team discussing valuation and auctioning services" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              {/* Floating stats card */}
              <motion.div 
                className="absolute -bottom-10 -left-5 bg-white rounded-lg shadow-xl p-5 backdrop-blur-sm border border-white/20 w-64"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="flex items-center">
                  <div className="bg-navy rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-navy-dark text-lg">Trusted Since</h3>
                    <p className="text-medium-gray">{companyInfo.yearEstablished}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-white/70 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-gold rounded-full"
              animate={{ 
                y: [0, 13, 0],
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
