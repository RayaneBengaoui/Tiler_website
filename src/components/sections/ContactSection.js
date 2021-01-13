import React, { useRef } from "react";
import styled from "styled-components";

import footer_position from "../../icons/footer_position.svg";
import footer_phone from "../../icons/footer_phone.svg";
import footer_mail from "../../icons/footer_mail.svg";

import contact_perso from "../../icons/contact_perso.svg";
import contact_mail from "../../icons/contact_mail.svg";
import contact_phone from "../../icons/contact_phone.svg";

const ContactSection = ({ contactRef }) => {
  return (
    <StyledContact ref={contactRef}>
      <Form>
        <h1>Nous Contacter</h1>
        <form action="">
          <div className="informations">
            <div className="contact_section">
              <div className="contact_section__input">
                <img src={contact_perso} alt="profil" />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Nom"
                />
              </div>
              <div className="contact_section__input">
                <img src={contact_mail} alt="mail" />
                <input
                  type="email"
                  id="mail"
                  name="user_mail"
                  placeholder="Email"
                />
              </div>
              <div className="contact_section__input">
                <img src={contact_phone} alt="phone" />
                <input
                  id="telNo"
                  name="telNo"
                  type="tel"
                  placeholder="Téléphone"
                />
              </div>
            </div>
            <div className="message_section">
              <textarea
                id="msg"
                name="user_message"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <button>Envoyer</button>
        </form>
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

  button {
    align-self: center;
    width: 25rem;
    height: 7rem;
    background-color: #3c72cc;
    color: white;
    border-radius: 2rem;
    font-family: inherit;
    font-size: 2rem;
    font-weight: bolder;
  }
  form {
    position: relative;
    width: 100rem;
    height: 60rem;
    border-radius: 5rem;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
  }

  .informations {
    height: 80%;
    display: flex;

    .contact_section {
      width: 50%;
      padding: 0rem 5rem;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      &__input {
        border: 2px solid #8b8b8b;
        border-radius: 1.5rem;
        padding: 0.5rem 0rem;
        display: flex;
        justify-content: space-around;

        &:hover {
          filter: invert(36%) sepia(29%) saturate(2311%) hue-rotate(190deg)
            brightness(100%) contrast(83%);
        }
        img {
          filter: grayscale(100%);
        }
        input {
          width: 70%;
          font-size: 2rem;
        }
      }
    }

    .message_section {
      width: 50%;

      padding: 6rem 5rem 6rem 0rem;

      textarea {
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;
        border: 2px solid #8b8b8b;
        font-size: 1.8rem;
        padding: 2rem;
      }
    }
  }

  @media screen and (max-width: 1050px) {
    form {
      width: 60rem;
      height: 60rem;
    }

    .informations {
      .contact_section {
        padding: 0rem 2rem;
        &__input {
          padding: 0.5rem 0rem;

          img {
            width: 4rem;
          }
          input {
            width: 70%;
            font-size: 1.5rem;
          }
        }
      }

      .message_section {
        padding: 8rem 2rem 7.5rem 2rem;

        textarea {
          font-size: 1.5rem;
          padding: 1.5rem;
        }
      }
    }
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
  @media screen and (max-width: 1050px) {
    .contacts {
      padding: 1rem 0rem;

      .contact {
        p {
          color: white;
          font-size: 1.2rem;
          width: 50%;
        }
      }
    }
  }
`;

export default ContactSection;
