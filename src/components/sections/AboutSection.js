import React, { useState } from "react";
import styled from "styled-components";

//Images
import bg_1 from "../../img/home1.jpg";
import bg_2 from "../../img/home2.jpg";
import bg_3 from "../../img/home3.jpg";
import filler_left from "../../img/filler-left.png";
import filler_right from "../../img/filler-right.png";
import angle_left from "../../icons/icon-angle-left.svg";
import angle_right from "../../icons/icon-angle-right.svg";

const AboutSection = ({ materialsRef, workRef, contactRef }) => {
  const [backgroundImages, setBackgroundImages] = useState([bg_2, bg_3, bg_1]);
  const [currentBackground, setCurrentBackground] = useState(bg_2);
  const [texts, setTexts] = useState([
    {
      title: "expertise",
      description:
        "Faire appel à notre compétence professionnelle, c’est d’abord s’assurer un travail soigné, de qualité, réalisé par des professionnels qualifiés, dans le respect des Règles de l’Art. Nos réalisations  sont   les meilleures illustrations de notre expérience.",
    },
    {
      title: "professionnalisme",
      description:
        "Nos réalisations  sont   les meilleures illustrations de notre expérience. Nous saurons vous accompagner dans vos travaux, de la définition de votre projet, à sa réalisation ainsi que ",
    },
    {
      title: "Garantie Décennale",
      description:
        "Nous nous engageons à une parfaite exécution de vos travaux, soignée, dans le respect des normes et des délais. Tous nos travaux sont assurés par notre Garantie Décennale. Parallèlement, l’entreprise KRASNIQI, s’inscrit dans une démarche environnementale, ",
    },
  ]);
  const [currentText, setCurrentText] = useState(texts[0]);

  const ImageHandler = (direction) => {
    let index = backgroundImages.indexOf(currentBackground);
    if (direction === "left") {
      index !== 0 ? index-- : (index = 2);
    } else {
      index !== 2 ? index++ : (index = 0);
    }
    setCurrentBackground(backgroundImages[index]);
    setCurrentText(texts[index]);
  };

  const handleClick = (ref) =>
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <StyledAbout>
      <div className="preload">
        <img src={bg_1} alt="preload" />
        <img src={bg_2} alt="preload" />
        <img src={bg_3} alt="preload" />
      </div>
      <TopLeftSection imgObj={currentBackground}>
        <div className="nav">
          <div className="logo">Krasniqi Carrelage</div>
          <div className="nav-links">
            <ul>
              <li>
                <a onClick={() => handleClick(materialsRef)}>Matériaux</a>
              </li>
              <li>
                <a onClick={() => handleClick(workRef)}>Réalisations</a>
              </li>
              <li>
                <a onClick={() => handleClick(contactRef)}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </TopLeftSection>
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
        <div className="btn-container">
          <button className="left-btn" onClick={() => ImageHandler("left")}>
            <img src={angle_left} alt="left-icon" />
          </button>
          <button className="right-btn" onClick={() => ImageHandler("right")}>
            <img src={angle_right} alt="right-icon" />
          </button>
        </div>
      </TopRightSection>
      <BottomLeftSection imgObj={filler_left}></BottomLeftSection>
      <BottomMiddleSection>
        <h2>{currentText.title}</h2>
        <p>{currentText.description}</p>
        <div className="materials_title">
          <h1>Nos Matériaux</h1>
        </div>
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

  .preload {
    position: absolute;
    left: -1000%;
  }
`;

const TopLeftSection = styled.div`
  grid-column: 1/7;
  grid-row: 1/3;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 1s ease;
  background-image: url("${(props) => props.imgObj}");

  .nav {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 5rem;

    .logo {
      font-size: 3rem;
      color: white;
      padding: 0rem 2rem;
      cursor: pointer;
    }

    ul {
      display: flex;

      li {
        cursor: pointer;
      }
    }
  }
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
  position: relative;
  grid-column: 4/8;
  grid-row: 3/4;
  background-color: white;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .materials_title {
    position: absolute;
    width: 100%;
    height: 10rem;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    bottom: -10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;

    h1 {
      padding-bottom: 0;
      color: white;
    }
  }
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
