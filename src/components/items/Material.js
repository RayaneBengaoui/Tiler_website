import styled from "styled-components";

const Material = ({ image, description }) => {
  return (
    <StyledMaterial>
      <img src={image} alt="matériel" />
      <h3>{description}</h3>
    </StyledMaterial>
  );
};

const StyledMaterial = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h3 {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    font-weight: 700;
    padding-bottom: 2rem;
  }
`;

export default Material;
