import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Cyamunara Rwanda Ltd</title>
        <meta name="description" content="Contact Cyamunara Rwanda Ltd for professional auctioning, valuation, and business advisory services in Rwanda. Get in touch with our team today." />
        <meta property="og:title" content="Contact Cyamunara Rwanda Ltd" />
        <meta property="og:description" content="Reach out to our team for professional auctioning and valuation services in Rwanda." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyamunararwanda.com/contact" />
      </Helmet>
      
      <section id="contact" className="py-28 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-navy-dark mb-4">Contact Us</h2>
            <p className="max-w-2xl mx-auto text-medium-gray">
              Have questions or want to discuss our services? Reach out to our team today.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <ContactForm />
            </div>
            
            <div className="md:w-1/2">
              <ContactInfo />
              <Map />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
