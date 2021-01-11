import styled from "styled-components";
import { motion } from "framer-motion";

const GalleryDetails = ({
  workDetails,
  setWorkDetails,
  imagesDetails,
  setImagesDetails,
  titleDetails,
  setTitleDetails,
}) => {
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      setWorkDetails(!workDetails);
      setImagesDetails([]);
      setTitleDetails("");
      document.body.style.overflow = "auto";
    }
  };
  return (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      <GalleryDetailsStyled layoutId={titleDetails}>
        <h1>{titleDetails}</h1>
        {imagesDetails.map((image) => (
          <img src={image} alt="gallery details"></img>
        ))}
      </GalleryDetailsStyled>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: scroll;
  text-align: center;
`;

const GalleryDetailsStyled = styled(motion.div)`
  position: absolute;
  width: 80%;
  left: 10%;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem 5rem;
  z-index: 10;

  img {
    width: 100%;
    height: 100rem;
    object-fit: cover;
  }
`;

export default GalleryDetails;
