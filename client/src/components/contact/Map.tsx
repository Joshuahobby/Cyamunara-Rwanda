import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Map = () => {
  // This component would normally use Google Maps API
  // Since we don't have an API key, we'll use a placeholder
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-white p-2 rounded-lg shadow-lg h-64">
        <div className="w-full h-full bg-light-gray rounded flex items-center justify-center">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-navy mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-medium-gray">Google Map will be displayed here</p>
            <p className="text-sm text-medium-gray">Nyarugenge, MUHIMA, Kigali, Rwanda</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Map;
