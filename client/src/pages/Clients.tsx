import ClientsPartners from "@/components/clients/ClientsPartners";
import Testimonials from "@/components/clients/Testimonials";
import { Helmet } from "react-helmet";

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>Our Clients & Partners - Cyamunara Rwanda Ltd</title>
        <meta name="description" content="Discover the trusted clients and partners who have worked with Cyamunara Rwanda Ltd for professional auctioning and valuation services." />
        <meta property="og:title" content="Clients & Partners - Cyamunara Rwanda Ltd" />
        <meta property="og:description" content="Leading organizations across Rwanda who trust our professional services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyamunararwanda.com/clients" />
      </Helmet>
      
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <ClientsPartners />
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Clients;
