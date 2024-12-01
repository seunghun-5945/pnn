import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Title from "../components/Title";
import AboutUs from "../components/AboutUs";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Frame = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, black, gray, white);
  white-space: pre-line;
`;


const Join = () => {
  return (
    <Frame>
      <h1>Join</h1>
      <h2>지원하고 P&N 의 멤버가 되세요!</h2>
    </Frame>
  );
};

const HomeContent = () => {
  return (
    <Container>
      <Title />
      <AboutUs />
      <Join />
    </Container>
  );
};

const Home = () => {
  return <Layout Main={HomeContent} />
}

export default Home;