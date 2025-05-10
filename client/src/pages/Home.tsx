import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutSection from "@/components/about/AboutSection";
import ServiceDetails from "@/components/services/ServiceDetails";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientsPartners from "@/components/clients/ClientsPartners";
import Testimonials from "@/components/clients/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cyamunara Rwanda Ltd - Auctioning & Valuation Services</title>
        <meta name="description" content="Cyamunara Rwanda Ltd is a leading auctioning and valuation services company in Rwanda with over 13 years of experience providing professional services." />
        <meta property="og:title" content="Cyamunara Rwanda Ltd - Auctioning & Valuation Services" />
        <meta property="og:description" content="Rwanda's premier auctioning and valuation services company with over 13 years of trusted experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyamunararwanda.com" />
      </Helmet>
      
      <div>
        <Hero />
        <ServicesOverview />
        <AboutSection />
        <WhyChooseUs />
        <section id="clients" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ClientsPartners />
            <Testimonials />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
