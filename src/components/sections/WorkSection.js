import React, { useRef, useEffect, useState } from "react";
//Styled Components
import styled from "styled-components";
//Framer Motion

//Components
import GallerySection from "../items/GallerySection";
import useWindowDimensions from "../items/WindowDimension";
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
  workRef,
}) => {
  const { width } = useWindowDimensions();
  const [galleryDimensions, setGalleryDimensions] = useState([
    { column: "1/4", row: "1/2" },
    { column: "1/4", row: "2/3" },
    { column: "4/8", row: "1/3" },
    { column: "8/10", row: "1/2" },
    { column: "10/13", row: "1/2" },
    { column: "8/13", row: "2/3" },
  ]);

  useEffect(() => {
    setGalleryDimensions(getGridDimensions);
  }, [width]);

  const getGridDimensions = () => {
    if (width > 1000) {
      return [
        { column: "1/4", row: "1/2" },
        { column: "1/4", row: "2/3" },
        { column: "4/8", row: "1/3" },
        { column: "8/10", row: "1/2" },
        { column: "10/13", row: "1/2" },
        { column: "8/13", row: "2/3" },
      ];
    } else {
      if (width < 1000 && width > 650) {
        return [
          { column: "1/2", row: "1/3" },
          { column: "1/2", row: "3/5" },
          { column: "2/3", row: "1/5" },
          { column: "1/2", row: "5/7" },
          { column: "2/3", row: "5/7" },
          { column: "1/3", row: "7/9" },
        ];
      } else {
        return [
          { column: "1/2", row: "1/3" },
          { column: "1/2", row: "3/5" },
          { column: "2/3", row: "1/5" },
          { column: "1/2", row: "5/7" },
          { column: "2/3", row: "5/7" },
          { column: "1/3", row: "7/9" },
        ];
      }
    }
  };
  return (
    <StyledWork ref={workRef}>
      <GallerySection
        image={gallery_carrelage_int}
        grid_column={galleryDimensions[0].column}
        grid_row={galleryDimensions[0].row}
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
        grid_column={galleryDimensions[1].column}
        grid_row={galleryDimensions[1].row}
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
        grid_column={galleryDimensions[2].column}
        grid_row={galleryDimensions[2].row}
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
        grid_column={galleryDimensions[3].column}
        grid_row={galleryDimensions[3].row}
        workDetails={workDetails}
        setWorkDetails={setWorkDetails}
        setImagesDetails={setImagesDetails}
        images={[details_sdb1, details_sdb2, details_sdb3, details_sdb4]}
        title="Salles de bains"
        setTitleDetails={setTitleDetails}
      />
      <GallerySection
        image={gallery_sauna}
        grid_column={galleryDimensions[4].column}
        grid_row={galleryDimensions[4].row}
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
        grid_column={galleryDimensions[5].column}
        grid_row={galleryDimensions[5].row}
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

  @media screen and (max-width: 1000px) {
    grid-template-rows: repeat(8, minmax(300px, auto));
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default WorkSection;
