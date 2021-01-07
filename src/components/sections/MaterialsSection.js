import React from "react";
import styled from "styled-components";

//Images
import ardoise from "../../img/ardoise.png";

//Components
import Material from "../items/Material";

const MaterialsSection = () => {
  return (
    <StyledMaterials>
      <Materials>
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
        <Material image={ardoise} description="Ardoise" />
      </Materials>
    </StyledMaterials>
  );
};

const StyledMaterials = styled.div`
  min-height: 100vh;
`;

const Materials = styled.div`
  margin-top: 10rem;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default MaterialsSection;
