import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import pnn1 from "../assets/images/pnn1.jpeg";
import pnn2 from "../assets/images/pnn2.jpeg";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const arrowBounce = keyframes`
  0%, 100% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-10px); 
  }
`;

const arrowEffent = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Frame = styled.div`
  width: 100%;
  height: 95vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: pre-line;
  position: relative;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ImgArea = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: gray;
  filter: brightness(0.4);
  transition: opacity 1s ease-in-out;
  opacity: ${props => props.active ? 1 : 0};
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimatedLogoWrapper = styled.div`
  width: 50%;
  height: auto;  
  display: flex;
  flex-direction: row;
  opacity: 0;
  animation: ${slideIn} 1.2s ease-out forwards;
`;

const AnimatedArrow = styled.div`
  width: 50%;
  height: auto;  
  display: flex;
  position: absolute;
  bottom: -50%;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  opacity: 0;
  animation: ${arrowEffent} 1.2s ease-out forwards, ${arrowBounce} 1.5s infinite ease-in-out;
  animation-delay: 2.0s;
`;

const MainTitle = styled.h1`
  font-size: 50px;
  opacity: 0;
  animation: ${fadeIn} 1.2s ease-out forwards;
  animation-delay: 0.5s;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SubTitle = styled.h3`
  opacity: 0;
  animation: ${fadeIn} 1.2s ease-out forwards;
  animation-delay: 1.0s;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Title = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pnnImg = [pnn1, pnn2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => prev === 1 ? 0 : prev + 1);
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Frame>
      <ImgContainer>
        {pnnImg.map((img, index) => (
          <ImgArea
            key={index}
            src={img}
            active={index === currentIndex}
          />
        ))}
      </ImgContainer>
      <Content>
        <AnimatedLogoWrapper>
          <Logo />
        </AnimatedLogoWrapper>
        <MainTitle>
          Inje Univ Computer Science Club
        </MainTitle>
        <SubTitle>
          인제대학교 학술 컴퓨터 동아리 Programming & Network P&N
        </SubTitle>
        <AnimatedArrow>
          <MdKeyboardDoubleArrowDown color="white" size="45px"/>
        </AnimatedArrow>
      </Content>
    </Frame>
  );
};

export default Title;