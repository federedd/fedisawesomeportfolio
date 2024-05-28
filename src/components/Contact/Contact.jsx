import React from "react";
import ContactCard from "./ContactCard";
import { getImageUrl } from "../../utils";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 100px 100px;
  text-align: center;
  background-color: var(--secondary-background-color);
  @media screen and (max-width: 830px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  color: var(--secondary-color);
  font-family: var(--primary-font);
  font-weight: 400;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  font-family: var(--secondary-font);
  @media (max-width: 800px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const Divider = styled.div`
  height: 2px;
  background-color: var(--secondary-color);
`;

const Copyright = styled.h2`
  font-family: var(--secondary-font);
  text-align: center;
  font-size: 16px;
  font-weight: 200;
`;

function Contact() {
  const copyright = new Date().getFullYear();
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a style={{ textDecoration: "none" }} href={`mailto:${email}${params}`}>
        {children}
      </a>
    );
  };
  return (
    <Container id="contact">
      <div>
        <Title>Ways to contact me</Title>
      </div>
      <CardContainer>
        <ContactCard
          src={getImageUrl("linkedin.png")}
          handle="Federica Rossi"
          href="https://www.linkedin.com/in/federed/"
        />
        <ContactCard
          src={getImageUrl("github.png")}
          handle="federedd"
          href="https://github.com/federedd"
        />
        <Mailto email="federica.rossi1729@gmail.com">
          <ContactCard
            src={getImageUrl("google.png")}
            handle="federica.rossi1729@gmail.com"
          />
        </Mailto>
      </CardContainer>
      <Divider></Divider>
      <Copyright>© Fedi {copyright}</Copyright>
    </Container>
  );
}

export default Contact;
