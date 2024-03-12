//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import Business from "../Sections/Business/index";
import Carousel from "../Sections/Carousel/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <HeroSection />
        <About />
        <Business />
        <Carousel />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};


export default Home;
