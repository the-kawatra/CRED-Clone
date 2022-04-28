import React from "react";
import Brands from "./components/Brands/Brands";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import Experience from "./components/Experience/Experience";
import FeelSpecial from "./components/FeelSpecial/FeelSpecial";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import Rating from "./components/Ratings/Rating";
import Scroll from "./components/Scroll/Scroll";
import Security from "./components/Security/Security";
import Story from "./components/Story/Story";
import WindowPeek from "./components/WindowPeek/WindowPeek";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <Brands />
      <Experience />
      <Scroll />
      <div className="non-mobile">
        <WindowPeek />
      </div>
      <Security />
      <Story />
      <Rating />
      <Footer />
    </>
  );
}

export default App;
