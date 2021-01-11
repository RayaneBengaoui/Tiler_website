import React from "react";
//Styled Components
import styled from "styled-components";
//Framer Motion

//Components
import GallerySection from "../items/GallerySection";
//Images
import gallery_carrelage_int from "../../img/gallery_carrelage_int.png";
import gallery_travertin from "../../img/gallery_travertin.png";
import gallery_terasse_ext from "../../img/gallery_terrasse_ext.png";
import gallery_sdb from "../../img/gallery_sdb.png";
import gallery_sauna from "../../img/gallery_sauna.png";
import gallery_couvertine from "../../img/gallery_couvertine.png";

import details_int1 from "../../img/details_int_1.JPG";
import details_int2 from "../../img/details_int_2.JPG";
import details_int3 from "../../img/details_int_3.JPG";
import details_int4 from "../../img/details_int_4.JPG";
import details_int5 from "../../img/details_int_5.JPG";

import details_travertin1 from "../../img/detail_travertin1.JPG";
import details_travertin2 from "../../img/detail_travertin2.JPG";
import details_travertin3 from "../../img/detail_travertin3.JPG";
import details_travertin4 from "../../img/detail_travertin4.JPG";

import details_ext1 from "../../img/details_ext1.JPG";
import details_ext2 from "../../img/details_ext2.JPG";
import details_ext3 from "../../img/details_ext3.JPG";
import details_ext4 from "../../img/details_ext4.JPG";
import details_ext5 from "../../img/details_ext5.JPG";
import details_ext6 from "../../img/details_ext6.JPG";

import details_sdb1 from "../../img/details_sdb1.JPG";
import details_sdb2 from "../../img/details_sdb2.JPG";
import details_sdb3 from "../../img/details_sdb3.JPG";
import details_sdb4 from "../../img/details_sdb4.JPG";

import details_couvertine1 from "../../img/details_couvertine1.JPG";
import details_couvertine2 from "../../img/details_couvertine2.JPG";
import details_couvertine3 from "../../img/details_couvertine3.JPG";
import details_couvertine4 from "../../img/details_couvertine4.JPG";

import details_sauna1 from "../../img/details_sauna1.JPG";
import details_sauna2 from "../../img/details_sauna2.JPG";
import details_sauna3 from "../../img/details_sauna3.JPG";
import details_sauna4 from "../../img/details_sauna4.JPG";

const WorkSection = ({
  workDetails,
  setWorkDetails,
  setImagesDetails,
  setTitleDetails,
}) => {
  return (
    <StyledWork>
      <GallerySection
        image={gallery_carrelage_int}
        grid_column="1/4"
        grid_row="1/2"
        workDetails={workDetails}
        setWorkDetails={setWorkDetails}
        setImagesDetails={setImagesDetails}
        images={[
          details_int1,
          details_int2,
          details_int3,
          details_int4,
          details_int5,
        ]}
        title="Carrelage Intérieur"
        setTitleDetails={setTitleDetails}
      />
      <GallerySection
        image={gallery_travertin}
        grid_column="1/4"
        grid_row="2/3"
        workDetails={workDetails}
        setWorkDetails={setWorkDetails}
        setImagesDetails={setImagesDetails}
        images={[
          details_travertin1,
          details_travertin2,
          details_travertin3,
          details_travertin4,
        ]}
        title="Travertins"
        setTitleDetails={setTitleDetails}
      />
      <GallerySection
        image={gallery_terasse_ext}
        grid_column="4/8"
        grid_row="1/3"
        workDetails={workDetails}
        setWorkDetails={setWorkDetails}
        setImagesDetails={setImagesDetails}
        images={[
          details_ext1,
          details_ext2,
          details_ext3,
          details_ext4,
          details_ext5,
          details_ext6,
        ]}
        title="Terrasses Exterieurs"
        setTitleDetails={setTitleDetails}
      />
      <GallerySection
        image={gallery_sdb}
        grid_column="8/10"
        grid_row="1/2"
        workDetails={workDetails}
        setWorkDetails={setWorkDetails}
        setImagesDetails={setImagesDetails}
        images={[details_sdb1, details_sdb2, details_sdb3, details_sdb4]}
        title="Salles de bains"
        setTitleDetails={setTitleDetails}
      />
      <GallerySection
        image={gallery_sauna}
        grid_column="10/13"
        grid_row="1/2"
        workDetails={workDetails}
        setWorkDetails={setWorkDetails}
        setImagesDetails={setImagesDetails}
        images={[
          details_sauna1,
          details_sauna2,
          details_sauna3,
          details_sauna4,
        ]}
        title="Jaccusi/Sauna"
        setTitleDetails={setTitleDetails}
      />
      <GallerySection
        image={gallery_couvertine}
        grid_column="8/13"
        grid_row="2/3"
        workDetails={workDetails}
        setWorkDetails={setWorkDetails}
        setImagesDetails={setImagesDetails}
        images={[
          details_couvertine1,
          details_couvertine2,
          details_couvertine3,
          details_couvertine4,
        ]}
        title="Couvertines"
        setTitleDetails={setTitleDetails}
      />
    </StyledWork>
  );
};

const StyledWork = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(12, 160px));

  /* .section_one {
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
  } */
`;

export default WorkSection;
