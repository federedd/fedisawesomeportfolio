import React from "react";
import PROJECT_UTILS from "./PROJECT_UTILS";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--primary-background-color);
  border: solid 1px var(--secondary-color);
  color: var(--secondary-color);
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 20px;
  font-family: var(--secondary-font);
  width: 200px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-background-color);
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Buttons({ projectItem, setProject, filterProjects }) {
  return (
    <ButtonsWrapper id="projects">
      {projectItem.map((val, index) => (
        <StyledButton key={index} onClick={() => filterProjects(val)}>
          {val}
        </StyledButton>
      ))}
      <StyledButton onClick={() => setProject(PROJECT_UTILS)}>ALL</StyledButton>
    </ButtonsWrapper>
  );
}

export default Buttons;
