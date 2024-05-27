import React from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--background-color);
  font-size: 10px;
  border-radius: 10px;
  transition: 1s;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--background-color);
    transition: 1s;
    transform: translateY(-16px);
  }
`;

const Image = styled.img`
  width: 50px;
`;

const Title = styled.h1`
  font-family: var(--secondary-font);
  font-weight: 200;
`;

const Link = styled.a`
  text-decoration: none;
`;

function ContactCard({ src, handle, href }) {
  return (
    <Link href={href} target="_">
      <Container>
        <Image src={src} />
        <Title>{handle}</Title>
      </Container>
    </Link>
  );
}

export default ContactCard;
