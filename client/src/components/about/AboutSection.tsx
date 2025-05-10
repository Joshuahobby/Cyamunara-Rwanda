import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";
import { motion } from "framer-motion";

const AboutSection = () => {
  const aboutPoints = [
    {
      title: "Mission",
      description: "To provide professional and transparent valuation and auctioning services."
    },
    {
      title: "Vision",
      description: "To be Rwanda's most trusted partner in asset valuation and auctioning."
    },
    {
      title: "Professionalism",
      description: "Maintaining highest standards in all our services."
    },
    {
      title: "Integrity",
      description: "Operating with transparency and honesty in all dealings."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Cyamunara Rwanda office" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-montserrat font-bold text-navy-dark mb-6">About Cyamunara Rwanda Ltd</h2>
            <p className="mb-4">
              Founded over {companyInfo.experience} ago, Cyamunara Rwanda Ltd has established itself as a leading auctioning and valuation services company in Rwanda. Based in {companyInfo.address.street}, {companyInfo.address.city}, we have built a reputation for professionalism, integrity, and excellence.
            </p>
            <p className="mb-6">
              Our team of experienced professionals is dedicated to providing accurate valuations, transparent auctions, and expert business advisory services to individuals, corporations, and government institutions across Rwanda.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {aboutPoints.map((point, index) => (
                <div className="flex items-start" key={index}>
                  <div className="mr-3 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-navy-dark">{point.title}</h4>
                    <p className="text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/contact">
              <Button className="bg-navy text-white hover:bg-gold transition-300">
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
