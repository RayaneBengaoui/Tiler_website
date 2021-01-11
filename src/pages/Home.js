import React, { useState } from "react";

//Components
import AboutSection from "../components/sections/AboutSection";
import MaterialsSection from "../components/sections/MaterialsSection";
import WorkSection from "../components/sections/WorkSection";
import ContactSection from "../components/sections/ContactSection";
import GalleryDetails from "../components/items/GalleryDetails";

const Home = () => {
  const [workDetails, setWorkDetails] = useState(false);
  return (
    <div className="Home">
      {workDetails && (
        <GalleryDetails
          workDetails={workDetails}
          setWorkDetails={setWorkDetails}
        />
      )}
      <AboutSection />
      <MaterialsSection />
      <WorkSection workDetails={workDetails} setWorkDetails={setWorkDetails} />
      <ContactSection />
    </div>
  );
};

export default Home;
