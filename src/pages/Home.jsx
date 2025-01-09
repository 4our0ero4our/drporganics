import About from "../components/About";
import ConsultUs from "../components/ConsultUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <ConsultUs />
      <Footer />
    </div>
  )
}

export default Home;