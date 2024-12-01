import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  border: 1px solid gray;
  background-color: yellow;
  border-radius: 20px;
`;

const Text = styled.span`
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const JsBadge = () => {
  return (
    <Container>
      <Text>JS</Text>
    </Container>
  );
};

export default JsBadge;