import styled from "styled-components";
import React from "react";
import Card from "./Card";
import EXPERIENCE_UTILS from "./EXPERIENCE_UTILS";
import PROJECT_UTILS from "../Projects/PROJECT_UTILS";

const ExperienceTitle = styled.h1`
  font-size: 40px;
  color: var(--secondary-color);
  font-family: var(--primary-font);
  text-align: center;
  letter-spacing: -1px;
`;

const ExperienceSection = styled.section`
  display: flex;
  margin: 50px 95px;
  justify-content: space-around;
  background-color: var(--primary-background-color);
  @media screen and (max-width: 830px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  background-color: var(--secondary-background-color);
  padding: 50px 95px;
`;

export default function Experience() {
  return (
    <Container id="experience">
      <ExperienceTitle>Experience</ExperienceTitle>
      <ExperienceSection>
        {EXPERIENCE_UTILS.map((experience, id) => {
          return (
            <Card
              key={id}
              src={experience.src}
              desc={experience.desc}
              projects={
                PROJECT_UTILS.filter(
                  (project) => project.language === experience.language
                ).length
              }
            />
          );
        })}
      </ExperienceSection>
    </Container>
  );
}
