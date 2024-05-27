import styled from "styled-components";
import React from "react";
import { getImageUrl } from "../utils";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  margin: 70px 100px;
  margin-bottom: 150px;
  justify-content: space-between;
  span {
    font-size: 120px;
    color: var(--secondary-color);
    margin-left: 10px;
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
  }

  .ventolino {
    position: absolute;
    width: 95px;
    top: 41px;
    right: 178px;
  }

  .hero-img {
    width: 450px;
  }

  .spin {
    position: absolute;
    width: 95px;
    top: 41px;
    right: 178px;
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
    text-transform: uppercase;
    color: var(--secondary-color);
    font-family: var(--primary-font);
    font-weight: 300;
    z-index: 1;
  }
  .title {
    color: var(--primary-color);
    font-family: var(--primary-font);
    font-weight: 500;
    font-size: 30px;
    letter-spacing: -1px;
    line-height: 35px;
    z-index: 1;
  }
  p {
    color: var(--primary-color);
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
const ContainerLeft = styled.div`
  margin: 90px 40px;
  h1 {
    font-weight: 700;
    letter-spacing: -4px;
    color: var(--primary-color);
    font-family: var(--secondary-font);
    font-size: 75px;
    line-height: 60px;
    z-index: 1;
  }
  display: flex;
  flex-direction: column;
  img {
    width: 40px;
  }
  gap: 90px;
  width: 305px;
  @media screen and (max-width: 830px) {
    height: 310px;
  }
`;
const ContainerRight = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  width: 305px;
  justify-content: center;
  gap: 20px;
`;

const TopBlur = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vh;
  min-width: 350px;
  min-height: 350px;
  top: -128px;
  left: -10vw;
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

export default function Hero() {
  const [spin, setSpin] = useState(false);
  const handleAnimation = () => {
    setSpin(!spin);
  };
  // useEffect(() => {
  //   setSpin(!spin);
  // }, [""]);
  return (
    <Container>
      <ContainerLeft>
        <h1>
          Federica <br /> Rossi<span>.</span>
        </h1>
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
      </ContainerLeft>
      <div className="imageContainer">
        <Image
          className={"hero-img"}
          src={getImageUrl("cover.png")}
          onClick={handleAnimation}
        />
        <img
          src={getImageUrl("ventolino.png")}
          className={spin ? "ventolino" : "spin"}
          onClick={handleAnimation}
        />
      </div>
      <ContainerRight>
        <h2>About me:</h2>
        <h1 className="title">
          Front End <br />
          Software Engineer
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#experience">learn more... </a>
      </ContainerRight>
      <TopBlur></TopBlur>
      <BottomBlur></BottomBlur>
    </Container>
  );
}
