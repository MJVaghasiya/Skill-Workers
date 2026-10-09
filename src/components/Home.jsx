import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import AchieveGoal from "./AchieveGoal";
import WhyChooseUs from "./WhyChooseUs";
import FitIn from "./FitIn";
import CareerCTA from "./CareerCTA";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28">
      <Navbar />
      <Hero />
      <Services />
      <AchieveGoal />
      <WhyChooseUs />
      <FitIn />
      <CareerCTA />
      <Footer />
    </div>
  );
};

export default Home;