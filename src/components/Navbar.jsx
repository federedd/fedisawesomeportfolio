import styled from "styled-components";
import React from "react";
import "../App.css";
import { useState } from "react";
import { getImageUrl } from "../utils";

const Navigation = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin: 46px 156px;
  ul {
    display: flex;
    list-style: none;
    gap: 50px;
    text-transform: uppercase;
    font-family: var(--secondary-font);
  }
  .title {
    letter-spacing: -2px;
    line-height: 30px;
    font-size: 30px;
    text-decoration: none;
    color: var(--secondary-color);
    font-family: var(--primary-font);
    font-weight: 500;
    z-index: 1;
  }

  img {
    display: none;
    margin: 10px;
    width: 26px;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
  }

  h1 {
    display: flex;
  }

  @media screen and (max-width: 830px) {
    img {
      display: flex;
    }

    .title {
      font-size: 30px;
    }

    .hide {
      display: none;
    }

    .menu-open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 156px;
      gap: 20px;
      background: rgb(19, 21, 24);
      background: linear-gradient(
        180deg,
        rgba(19, 21, 24, 1) 0%,
        rgba(101, 105, 120, 0.38561362044817926) 100%
      );
      padding: 20px;
      align-items: center;
      border-radius: 20px;
      z-index: 1;
    }
  }
`;

const Title = styled.a`
  color: var(--secondary-color);
  text-decoration: none;
`;

const NavItems = styled.div`
  transition: 1s;
  &:hover {
    transition: 1s;
    transform: translateY(-16px);
  }
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navigation>
      <a className="title">
        Fedi's awesome <br />
        portfolio
      </a>
      <div>
        <ul
          className={menuOpen ? "menu-open" : "hide"}
          onClick={() => setMenuOpen(false)}
        >
          <NavItems>
            <Title href="#about">About</Title>
          </NavItems>
          <NavItems>
            <Title href="#experience">Experience</Title>
          </NavItems>
          <NavItems>
            <Title href="#projects">Projects</Title>
          </NavItems>
          <NavItems>
            <Title href="#contact">Contact</Title>
          </NavItems>
        </ul>

        <img
          src={
            menuOpen
              ? getImageUrl("xmark-solid.svg")
              : getImageUrl("bars-solid.svg")
          }
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </Navigation>
  );
}
