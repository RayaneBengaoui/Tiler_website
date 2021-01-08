import React from "react";
import styled from "styled-components";
//Components
import gallery_carrelage_int from "../../img/gallery_carrelage_int.png";
import gallery_travertin from "../../img/gallery_travertin.png";
import gallery_terasse_ext from "../../img/gallery_terrasse_ext.png";
import gallery_sdb from "../../img/gallery_sdb.png";
import gallery_sauna from "../../img/gallery_sauna.png";
import gallery_couvertine from "../../img/gallery_couvertine.png";

const WorkSection = () => {
  return (
    <StyledWork>
      <div className="section_one"></div>
      <div className="section_two"></div>
      <div className="section_three"></div>
      <div className="section_four"></div>
      <div className="section_five"></div>
      <div className="section_six"></div>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(12, 160px));

  .section_one {
    grid-column: 1/4;
    grid-row: 1/2;
    background-image: url(${gallery_carrelage_int});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  .section_two {
    grid-column: 1/4;
    grid-row: 2/3;
    background-image: url(${gallery_travertin});
    background-size: cover;

    background-repeat: no-repeat;
  }
  .section_three {
    grid-column: 4/8;
    grid-row: 1/3;
    background-image: url(${gallery_terasse_ext});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .section_four {
    grid-column: 8/10;
    grid-row: 1/2;
    background-image: url(${gallery_sdb});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .section_five {
    grid-column: 10/13;
    grid-row: 1/2;
    background-image: url(${gallery_sauna});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .section_six {
    grid-column: 8/13;
    grid-row: 2/3;
    background-image: url(${gallery_couvertine});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default WorkSection;
