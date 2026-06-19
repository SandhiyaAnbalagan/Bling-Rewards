import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Industries from "../components/Industries";
import Rewards from "../components/Rewards";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Industries />
      <Rewards />
      <WhyUs />
      <Footer />
      
    </>
  );
}

export default Home;
