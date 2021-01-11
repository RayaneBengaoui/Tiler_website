import styled from "styled-components";

const GallerySection = ({
  image,
  grid_row,
  grid_column,
  workDetails,
  setWorkDetails,
  setImagesDetails,
  images,
  title,
  setTitleDetails,
}) => {
  const galleryDetailsHandler = () => {
    setImagesDetails(images);
    setWorkDetails(!workDetails);
    setTitleDetails(title);
    document.body.style.overflow = "hidden";
  };
  return (
    <GallerySectionStyled
      onClick={galleryDetailsHandler}
      image={image}
      grid_row={grid_row}
      grid_column={grid_column}
    ></GallerySectionStyled>
  );
};

const GallerySectionStyled = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("${(props) => props.image}");
  grid-column: ${(props) => props.grid_column};
  grid-row: ${(props) => props.grid_row};
  cursor: pointer;
`;

export default GallerySection;
