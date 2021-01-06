import React from "react";

//Components
import AboutSection from "../components/sections/AboutSection";
import MaterialsSection from "../components/sections/MaterialsSection";
import WorkSection from "../components/sections/WorkSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <div className="Home">
      <AboutSection />
      <MaterialsSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
};

export default Home;
