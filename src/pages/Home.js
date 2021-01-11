import React, { useState } from "react";

//Components
import AboutSection from "../components/sections/AboutSection";
import MaterialsSection from "../components/sections/MaterialsSection";
import WorkSection from "../components/sections/WorkSection";
import ContactSection from "../components/sections/ContactSection";
import GalleryDetails from "../components/items/GalleryDetails";

const Home = () => {
  const [workDetails, setWorkDetails] = useState(false);
  const [imagesDetails, setImagesDetails] = useState([]);
  const [titleDetails, setTitleDetails] = useState("");
  return (
    <div className="Home">
      {workDetails && (
        <GalleryDetails
          workDetails={workDetails}
          imagesDetails={imagesDetails}
          setImagesDetails={setImagesDetails}
          setWorkDetails={setWorkDetails}
          titleDetails={titleDetails}
          setTitleDetails={setTitleDetails}
        />
      )}
      <AboutSection />
      <MaterialsSection />
      <WorkSection
        workDetails={workDetails}
        setWorkDetails={setWorkDetails}
        setImagesDetails={setImagesDetails}
        setTitleDetails={setTitleDetails}
      />
      <ContactSection />
    </div>
  );
};

export default Home;
