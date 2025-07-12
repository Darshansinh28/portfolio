import React from "react";
import { Contact as ContactComponent, StarsCanvas } from "../components";

const Contact = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative z-0">
        <ContactComponent />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Contact; 