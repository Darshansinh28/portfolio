import React from "react";
import {
  About,
  Experience,
  Hero,
  Tech,
  Works,
  Education,
} from "../components";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Education />
      <Experience />
      <Tech />
      <Works />
    </div>
  );
};

export default Home; 