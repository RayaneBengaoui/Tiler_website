import React from "react";
import styled from "styled-components";

//Images
import ardoise from "../../img/ardoise.png";
import ciment from "../../img/carreau_ciment.png";
import faience from "../../img/faience.png";
import granit from "../../img/granit.png";
import gres_cerame from "../../img/gres_cerame.png";
import gres_etire from "../../img/gres_etire.png";
import marbre from "../../img/marbre.png";
import mosaique from "../../img/mosaique.png";
import pierre_calcaire from "../../img/pierre_calcaire.png";
import terre_cuite from "../../img/terre_cuite.png";
import tommette from "../../img/tomette.png";
import travertin from "../../img/travertin.png";

//Components
import Material from "../items/Material";

const MaterialsSection = () => {
  return (
    <StyledMaterials>
      <Materials>
        <Material image={ardoise} description="Ardoise" />
        <Material image={ciment} description="Carreaux de ciment" />
        <Material image={faience} description="Faïence" />
        <Material image={granit} description="Granit" />
        <Material image={gres_cerame} description="Grès cérame" />
        <Material image={gres_etire} description="Grès etirés" />
        <Material image={marbre} description="Marbre" />
        <Material image={mosaique} description="Mosaïque" />
        <Material image={pierre_calcaire} description="Pierre Calcaire" />
        <Material image={terre_cuite} description="Terre Cuite" />
        <Material image={tommette} description="Tommettes" />
        <Material image={travertin} description="Travertin" />
      </Materials>
    </StyledMaterials>
  );
};

const StyledMaterials = styled.div`
  min-height: 100vh;
`;

const Materials = styled.div`
  margin-top: 15rem;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default MaterialsSection;
