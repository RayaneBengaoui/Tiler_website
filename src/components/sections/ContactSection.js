import React from "react";
import styled from "styled-components";

import footer_position from "../../icons/footer_position.svg";
import footer_phone from "../../icons/footer_phone.svg";
import footer_mail from "../../icons/footer_mail.svg";

const ContactSection = () => {
  return (
    <StyledContact>
      <Form>
        <h1>Nous Contacter</h1>
        <form action=""></form>
      </Form>
      <Footer>
        <div className="contacts">
          <div className="contact">
            <img src={footer_position} alt="localisation" />
            <p>
              676 Avenue de Mâcon 01340 <span>MONTREVEL EN BRESSE</span>{" "}
            </p>
          </div>
          <div className="contact">
            <img src={footer_phone} alt="phone" />
            <p>06.81.72.81.54</p>
          </div>
          <div className="contact">
            <img src={footer_mail} alt="mail" />
            <p>krasniqi.carrelage@orange.fr</p>
          </div>
        </div>
      </Footer>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  min-height: 90vh;
  padding-top: 5rem;
  h1 {
    text-align: center;
    padding-bottom: 5rem;
  }
  form {
    width: 100rem;
    height: 60rem;
    border-radius: 5rem;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Footer = styled.div`
  width: 100%;
  min-height: 10vh;
  background-color: rgba(0, 0, 0, 0.8);

  .contacts {
    padding: 1rem 10rem;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 4rem;
      margin-right: 2rem;
    }

    .contact {
      display: flex;
      align-items: center;
      justify-content: center;

      min-width: 33%;

      p {
        color: white;
        font-size: 1.5rem;
        width: 50%;
      }
    }
  }
`;

export default ContactSection;
