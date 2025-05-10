import { testimonials } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Show testimonials in groups of 2
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialGroups.push(testimonials.slice(i, i + 2));
  }

  return (
    <div className="mb-8">
      <motion.h3 
        className="text-2xl font-montserrat font-bold text-navy-dark text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        What Our Clients Say
      </motion.h3>
      
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {testimonialGroups[activeIndex].map((testimonial) => (
              <Card key={testimonial.id} className="bg-light-gray md:w-1/2">
                <CardContent className="p-6">
                  <div className="text-gold mb-3 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-navy w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold">{testimonial.name}</h4>
                      <p className="text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonialGroups.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-navy' : 'bg-gray-300'}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
