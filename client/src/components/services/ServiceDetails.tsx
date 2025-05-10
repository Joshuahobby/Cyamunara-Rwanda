import { Link } from "wouter";
import { detailedServices } from "@/lib/constants";
import { ServiceItem } from "@/lib/types";
import { motion } from "framer-motion";

interface ServiceDetailsProps {
  serviceId?: number;
}

const ServiceDetails = ({ serviceId }: ServiceDetailsProps) => {
  // If serviceId is provided, only show that service, otherwise show all
  const services = serviceId 
    ? detailedServices.filter(service => service.id === serviceId)
    : detailedServices;

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-montserrat font-bold text-navy-dark mb-4">Our Comprehensive Services</h2>
          <p className="max-w-2xl mx-auto text-medium-gray">
            We provide tailored professional services to meet the needs of businesses, institutions, and individuals across Rwanda.
          </p>
        </motion.div>

        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            isReversed={index % 2 !== 0} 
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
  isReversed: boolean;
  delay: number;
}

const ServiceCard = ({ service, isReversed, delay }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 last:mb-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="md:w-1/2">
          <img 
            src={service.image} 
            alt={`${service.title} services`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <div className="flex items-center mb-4">
            <div className="bg-navy p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <h3 className="text-2xl font-montserrat font-bold text-navy-dark">{service.title}</h3>
          </div>
          <p className="mb-4">
            {service.description}
          </p>
          {service.features && (
            <ul className="mb-6 space-y-2">
              {service.features.map((feature, idx) => (
                <li className="flex items-start" key={idx}>
                  <svg className="h-5 w-5 text-gold mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
          <Link href="/contact">
            <a className="text-gold font-medium inline-flex items-center hover:underline">
              Request {service.title}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;
