import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getImageUrl } from "../utils";
import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
  width: 200px;
  margin: 20px 77px;
`;

const Ventolino = styled.img``;

const ImageContainer = styled.div`
  position: relative;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  z-index: 1;
  animation-timing-function: ease-in-out;
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
`;

function Carousel() {
  const [spin, setSpin] = useState(false);
  const handleAnimation = () => {
    setSpin(!spin);
  };
  return (
    <Swiper
      style={{ width: 350 }}
      modules={[Navigation]}
      navigation={true}
      loop={true}
    >
      <SwiperSlide>
        <ImageContainer>
          <Ventolino
            src={getImageUrl("ventolino.png")}
            onClick={handleAnimation}
            className={spin ? "ventolino" : "spin"}
          ></Ventolino>
          <Image
            src={getImageUrl("MissG.png")}
            onClick={handleAnimation}
          ></Image>
        </ImageContainer>
      </SwiperSlide>

      <SwiperSlide>
        <ImageContainer>
          <Image src={getImageUrl("MrG.png")}></Image>
        </ImageContainer>
      </SwiperSlide>
      <SwiperSlide>
        <ImageContainer>
          <Image src={getImageUrl("Group-11.png")}></Image>
        </ImageContainer>
      </SwiperSlide>
      <SwiperSlide>
        <ImageContainer>
          <Image src={getImageUrl("Group-15.png")}></Image>
        </ImageContainer>
      </SwiperSlide>
      <SwiperSlide>
        <ImageContainer>
          <Image src={getImageUrl("Group-18.png")}></Image>
        </ImageContainer>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
