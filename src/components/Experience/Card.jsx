import styled from "styled-components";
import React from "react";

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 40px;
  background-color: #292930;
  padding: 32px;
  p {
    font-family: var(--primary-font);
    color: var(--primary-color);
    text-align: center;
  }
`;

const ExperienceSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Projects = styled.div`
  background-color: var(--secondary-background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px;
  h1 {
    color: var(--secondary-color);
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 40px;
  }
  p {
    font-weight: 200;
    font-family: var(--secondary-font);
    color: var(--primary-color);
    text-transform: uppercase;
  }
`;

export default function Card({ src, desc, projects }) {
  return (
    <ExperienceSection>
      <Container1>
        <img src={src} />
        <p>{desc}</p>
      </Container1>
      <Projects>
        <h1>{projects}</h1>
        <p>Projects</p>
      </Projects>
    </ExperienceSection>
  );
}
