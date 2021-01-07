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

  background-color: lightcoral;
`;

export default Material;
