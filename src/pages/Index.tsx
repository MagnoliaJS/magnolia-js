import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Venue from "../components/Venue";
import CodeOfConduct from "../components/CodeOfConduct";
import Footer from "../components/Footer";
import EmailGrab from "@/components/EmailGrab";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Speakers />
      <Sponsors />
      <Venue />
      <EmailGrab />
      <CodeOfConduct />
      <Footer />
    </div>
  );
};

export default Index;
