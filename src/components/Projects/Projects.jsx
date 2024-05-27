import styled from "styled-components";
import React from "react";
import { useState } from "react";
import PROJECT_UTILS from "./PROJECT_UTILS";
import ProjectCard from "./ProjectCard";
import Buttons from "./Buttons";

const Container = styled.div`
  flex-direction: column;
  margin: 50px 95px;
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  margin: 70px;
  gap: 20px;
  @media screen and (max-width: 830px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default function Projects() {
  const [project, setProject] = useState(PROJECT_UTILS);
  const projectItem = [...new Set(PROJECT_UTILS.map((val) => val.language))];
  const filterProjects = (language) => {
    const newProject = PROJECT_UTILS.filter(
      (newVal) => newVal.language === language
    );
    setProject(newProject);
  };

  return (
    <Container id="projects">
      <ButtonContainer>
        <Buttons
          filterProjects={filterProjects}
          projectItem={projectItem}
          setProject={setProject}
        ></Buttons>
      </ButtonContainer>
      <CardContainer>
        <ProjectCard project={project} />
      </CardContainer>
    </Container>
  );
}
