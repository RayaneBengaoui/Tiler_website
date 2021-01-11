import styled from "styled-components";

const GalleryDetails = ({ workDetails, setWorkDetails }) => {
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      setWorkDetails(!workDetails);
    }
  };
  return (
    <>
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        <GalleryDetailsStyled>
          <h1>La gallery</h1>
        </GalleryDetailsStyled>
      </CardShadow>
    </>
  );
};

const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
`;

const GalleryDetailsStyled = styled.div`
  position: absolute;
  width: 80%;
  left: 10%;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem 5rem;
`;

export default GalleryDetails;
