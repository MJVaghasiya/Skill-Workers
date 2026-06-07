import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import AchieveGoal from "./AchieveGoal";
import FitIn from "./FitIn";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-[#e0e5ec] min-h-screen">
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
