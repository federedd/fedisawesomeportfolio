import styled from "styled-components";
import React from "react";
import { getImageUrl } from "../utils";
import { useState } from "react";
import Carousel from "./Carousel";

const Container = styled.div`
  display: flex;
  margin: 134px 100px;
  margin-bottom: 150px;
  justify-content: space-between;
  align-items: center;
  span {
    color: var(--secondary-color);
  }
  .socials {
    display: flex;
    gap: 20px;
    cursor: pointer;
    z-index: 1;
  }

  button {
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
    z-index: 1;
  }
  button:hover {
    background-color: var(--secondary-color);
    color: var(--primary-background-color);
    z-index: 1;
  }
  .socials-button-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1;
    align-items: flex-end;
  }

  .ventolino {
    position: absolute;
    width: 95px;
    top: 24px;
    right: 150px;
  }

  .hero-img {
    width: 180px;
  }

  .spin {
    position: absolute;
    width: 95px;
    top: 24px;
    right: 150px;
    animation: spin 5000ms infinite linear;
  }

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 20px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  h2 {
    padding-top: 40px;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-family: var(--primary-font);
    font-weight: 300;
    z-index: 1;
  }
  .title {
    color: var(--secondary-color);
    font-family: var(--secondary-font);
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    z-index: 1;
    text-transform: uppercase;
    letter-spacing: -1px;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    font-family: var(--secondary-font);
    font-size: 16px;
    font-weight: 200;
    z-index: 1;
  }
  a {
    text-decoration: none;
    color: var(--secondary-color);
    font-family: var(--secondary-font);
    font-weight: 200;
    z-index: 1;
  }

  .imageContainer {
    position: relative;
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    z-index: 1;
    animation-timing-function: ease-in-out;
  }
  @media screen and (max-width: 830px) {
    margin: 87px 83px;
    display: flex;
    flex-direction: column;
    gap: 70px;
    align-items: center;
    .imageContainer {
      display: none;
    }
  }
`;

const Image = styled.img`
  width: 40px;
`;

const NameTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: -4px;
  color: var(--primary-color);
  font-family: var(--secondary-font);
  font-size: 75px;
  line-height: 60px;
  z-index: 1;
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 345px;
  @media screen and (max-width: 830px) {
    height: 310px;
  }
`;
const ContainerRight = styled.div`
  h2 {
    color: var(--primary-color);
    font-weight: 800;
  }
  img {
    width: 40px;
  }
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  text-align: end;
  width: 305px;
  gap: 20px;
  padding-right: 30px;
  @media screen and (max-width: 830px) {
    align-items: center;
    text-align: center;
    .socials {
      margin: 20px;
      gap: 10px;
    }
  }
`;

const TopBlur = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vh;
  min-width: 350px;
  min-height: 350px;
  top: -128px;
  left: -9vw;
  border-radius: 764px;
  background: rgba(90, 90, 90, 0.7);
  filter: blur(100px);
  z-index: 0;
`;

const BottomBlur = styled.div`
  position: absolute;
  width: 30vw;
  height: 50vh;
  min-width: 250px;
  min-height: 350px;
  top: 246px;
  right: 1vw;
  border-radius: 764px;
  background: rgba(90, 90, 90, 0.7);
  filter: blur(100px);
  z-index: 0;
`;

const Contact = styled.a`
  transition: 1s ease;
  border: 1px solid var(--secondary-color);
  font-family: var(--secondary-font);
  text-transform: uppercase;
  padding: 10px;
  width: 130px;
  text-align: center;
  &:hover {
    transition: 1s ease;
    color: var(--secondary-background-color);
    background-color: var(--secondary-color);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;

export default function Hero() {
  const [spin, setSpin] = useState(false);
  const handleAnimation = () => {
    setSpin(!spin);
  };
  return (
    <Container>
      <ContainerLeft>
        <TitleContainer>
          <NameTitle>
            <span>I'm</span> Federica Rossi<span>.</span>
          </NameTitle>
          <h1 className="title">
            Front End <br />
            Software Engineer
          </h1>
        </TitleContainer>
      </ContainerLeft>
      {/* <div className="imageContainer">
        <Image
          className={"hero-img"}
          src={getImageUrl("MissG.png")}
          onClick={handleAnimation}
        />
        <img
          src={getImageUrl("ventolino.png")}
          className={spin ? "ventolino" : "spin"}
          onClick={handleAnimation}
        />
      </div> */}
      <Carousel></Carousel>
      <ContainerRight>
        <h2>
          About <span>me:</span>
        </h2>

        <p>
          I am a self-taught front-end software engineer with 6 months of
          experience, proficient in HTML, CSS, and JavaScript. Currently, I am
          expanding my skills by learning React to build beautifully dynamic and
          responsive web applications.
        </p>
        <a href="#experience">learn more... </a>
        <div className="socials-button-container">
          <div className="socials">
            <a href="https://www.linkedin.com/in/federed/" target="_">
              <img src={getImageUrl("linkedin.png")} />
            </a>
            <a href="https://github.com/federedd" target="_">
              <img src={getImageUrl("github.png")} />
            </a>
          </div>
          <Contact href="#contact">contact me</Contact>
        </div>
      </ContainerRight>
      <TopBlur></TopBlur>
      <BottomBlur></BottomBlur>
    </Container>
  );
}
