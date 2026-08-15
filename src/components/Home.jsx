import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import AchieveGoal from "./AchieveGoal";
import FitIn from "./FitIn";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen pt-[130px]">
      <Navbar />
      <Hero />
      <Services />
      <AchieveGoal />
      <FitIn />
      <Footer />
    </div>
  );
};

export default Home;
