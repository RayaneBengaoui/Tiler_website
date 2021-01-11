import styled from "styled-components";

const GallerySection = ({
  image,
  grid_row,
  grid_column,
  workDetails,
  setWorkDetails,
}) => {
  return (
    <GallerySectionStyled
      onClick={() => setWorkDetails(!workDetails)}
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
`;

export default GallerySection;
