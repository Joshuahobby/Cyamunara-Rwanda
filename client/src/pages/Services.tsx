import ServiceDetails from "@/components/services/ServiceDetails";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Cyamunara Rwanda Ltd</title>
        <meta name="description" content="Explore our professional auctioning, valuation, and business advisory services offered by Cyamunara Rwanda Ltd." />
        <meta property="og:title" content="Professional Services - Cyamunara Rwanda Ltd" />
        <meta property="og:description" content="Comprehensive auctioning, valuation, and business advisory services tailored to meet your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyamunararwanda.com/services" />
      </Helmet>
      
      <div className="pt-20">
        <ServiceDetails />
      </div>
    </>
  );
};

export default Services;
