import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  background-color: black;
  color: white;
`;

const Footer = () => {
  return (
    <Container>
      <ul>인제대학교</ul>
      <ul>오시는길</ul>
    </Container>
  );
};

export default Footer;