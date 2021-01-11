import React, { useState } from "react";

import styled from "styled-components";

//Components
import AboutSection from "../components/sections/AboutSection";
import MaterialsSection from "../components/sections/MaterialsSection";
import WorkSection from "../components/sections/WorkSection";
import ContactSection from "../components/sections/ContactSection";
import GalleryDetails from "../components/items/GalleryDetails";

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
  const [workDetails, setWorkDetails] = useState(false);
  const [imagesDetails, setImagesDetails] = useState([]);
  const [titleDetails, setTitleDetails] = useState("");
  return (
    <HomeStyled>
      <AboutSection />
      <MaterialsSection />
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
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
        </AnimatePresence>
        <WorkSection
          workDetails={workDetails}
          setWorkDetails={setWorkDetails}
          setImagesDetails={setImagesDetails}
          setTitleDetails={setTitleDetails}
        />
        <ContactSection />
      </AnimateSharedLayout>
    </HomeStyled>
  );
};

const HomeStyled = styled(motion.div)``;

export default Home;
