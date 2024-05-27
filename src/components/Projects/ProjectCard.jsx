import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  text-align: center;
  width: 250px;
  img {
    width: 250px;
  }
  color: var(--primary-color);
  font-family: var(--secondary-font);
  font-weight: 300;
`;

const Container = styled.div`
  img {
    transition: 1s;
  }
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 250px;
  img:hover {
    transition: 1s;
    transform: translateY(-16px);
  }
`;

const Title = styled.a`
  transition: 1s;
  color: var(--secondary-color);
  font-family: var(--secondary-font);
  text-decoration: none;
  font-size: 30px;
  font-weight: 300;
  height: 90px;
  &:hover {
    transition: 1s;
    transform: translateY(-16px);
  }
`;

function ProjectCard({ project }) {
  return (
    <>
      {project.map((val, index) => {
        return (
          <StyledCard key={index}>
            <Container>
              <a href={val.href} target="_">
                <img src={val.src} />
              </a>
              <Title href={val.href} target="_">
                {val.projectName}
              </Title>
              <p>{val.desc}</p>
            </Container>
          </StyledCard>
        );
      })}
    </>
  );
}

export default ProjectCard;
