import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout>
      <h1>About</h1>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  min-height: 100vh;
  background-color: lightcoral;
`;

export default AboutSection;
