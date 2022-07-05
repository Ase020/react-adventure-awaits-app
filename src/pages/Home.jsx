import React from "react";
import "../app.css";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
