import React from "react";
import styled from "styled-components";

//Images
import bg_1 from "../../img/home1.jpg";
import bg_2 from "../../img/home2.jpg";
import bg_3 from "../../img/home3.jpg";
import filler_left from "../../img/filler-left.png";
import filler_right from "../../img/filler-right.png";
import angle_left from "../../icons/icon-angle-left.svg";
import angle_right from "../../icons/icon-angle-right.svg";

const AboutSection = () => {
  return (
    <StyledAbout>
      <TopLeftSection imgObj={bg_2}></TopLeftSection>
      <TopRightSection>
        <h1>Artisan carreleur </h1>
        <p>
          Entreprise installée dans l’Ain depuis 1999. Notre entreprise vous
          propose ses services sur les départements de l’Ain, le Rhône, la
          Loire, la Saône-et-Loire, le Jura, la Haute-Savoie, la Savoie et
          l’Isère. Nous avons également la possibilité d’intervenir dans toute
          la France métropolitaine. Intervention sur constructions neuves et
          rénovations en pose à la colle ou scellée ou sur plots (terrasses,
          balcons).
        </p>
        <div class="btn-container">
          <button class="left-btn">
            <img src={angle_left} alt="left-icon" />
          </button>
          <button class="right-btn">
            <img src={angle_right} alt="right-icon" />
          </button>
        </div>
      </TopRightSection>
      <BottomLeftSection imgObj={filler_left}></BottomLeftSection>
      <BottomMiddleSection>
        <h2>EXPERTISE</h2>
        <p>
          Faire appel à notre compétence professionnelle, c’est d’abord
          s’assurer un travail soigné, de qualité, réalisé par des
          professionnels qualifiés, dans le respect des Règles de l’Art. Nos
          réalisations sont les meilleures illustrations de notre expérience.
        </p>
      </BottomMiddleSection>
      <BottomRightSection imgObj={filler_right}></BottomRightSection>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(10, 1fr);
  position: relative;
`;

const TopLeftSection = styled.div`
  grid-column: 1/7;
  grid-row: 1/3;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 1s ease;
  background-image: url("${(props) => props.imgObj}");
`;

const TopRightSection = styled.div`
  grid-column: 7/11;
  grid-row: 1/3;
  background-color: white;
  padding: 5rem 8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btn-container {
    bottom: 0;
    width: 10vw;
    height: 5vw;
    min-height: 3rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    button {
      width: 50%;
      height: 100%;
      background-color: black;
      position: absolute;
      &:hover {
        opacity: 0.75;
      }
    }
  }
  .right-btn {
    left: 50%;
  }
`;
const BottomLeftSection = styled.div`
  grid-column: 1/4;
  grid-row: 3/4;
  background-image: url("${(props) => props.imgObj}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const BottomMiddleSection = styled.div`
  grid-column: 4/8;
  grid-row: 3/4;
  background-color: white;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const BottomRightSection = styled.div`
  grid-column: 8/11;
  grid-row: 3/4;
  background-image: url("${(props) => props.imgObj}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default AboutSection;
