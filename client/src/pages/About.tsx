import AboutSection from "@/components/about/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Cyamunara Rwanda Ltd</title>
        <meta name="description" content="Learn about Cyamunara Rwanda Ltd, a leading auctioning and valuation services company with over 13 years of experience serving Rwanda." />
        <meta property="og:title" content="About Cyamunara Rwanda Ltd" />
        <meta property="og:description" content="A leading auctioning and valuation services company with over 13 years of experience in Rwanda." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyamunararwanda.com/about" />
      </Helmet>
      
      <div className="pt-20">
        <AboutSection />
        <WhyChooseUs />
      </div>
    </>
  );
};

export default About;
