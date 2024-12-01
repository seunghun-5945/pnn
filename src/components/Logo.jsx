import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 80px;
    color: white;
  }
`;

const NBackground = styled.div`
  width: 80px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6c7ef1;
  border-radius: 10px;
  margin-left: 15px;
`;

const Logo = () => {
  return (
    <Container>
      <h1>P & </h1>
      <NBackground><h1 style={{color:"white"}}> N</h1></NBackground>
    </Container>
  );
};

export default Logo;