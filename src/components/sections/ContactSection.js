import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <StyledContact>
      <h1>Contact</h1>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  min-height: 100vh;
  background-color: lightyellow;
`;

export default ContactSection;
