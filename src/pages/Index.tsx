import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Venue from "../components/Venue";
import CodeOfConduct from "../components/CodeOfConduct";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Speakers />
      <Sponsors />
      <Venue />
      <CodeOfConduct />
      <Footer />
    </div>
  );
};

export default Index;
