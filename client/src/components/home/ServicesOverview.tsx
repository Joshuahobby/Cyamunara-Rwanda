import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { servicesOverview } from "@/lib/constants";
import { motion } from "framer-motion";

const ServicesOverview = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-montserrat font-bold text-navy-dark mb-4">Our Professional Services</h2>
          <p className="max-w-2xl mx-auto text-medium-gray">
            We offer comprehensive professional services tailored to meet your business and asset management needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesOverview.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-white rounded-lg shadow-lg h-full transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-navy inline-block p-3 rounded-full text-white mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {service.icon === "gavel" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6M19 19v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6" />
                      )}
                      {service.icon === "chart-line" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      )}
                      {service.icon === "comments-dollar" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-navy-dark mb-3">{service.title}</h3>
                  <p className="text-medium-gray mb-4">
                    {service.description}
                  </p>
                  <Link href="/services">
                    <a className="text-gold font-medium inline-flex items-center hover:underline">
                      Learn More 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
