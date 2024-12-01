import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 0 5% 0 5%;
`;

const SideFrame = styled.div`
  width: 50%;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;

const Button = styled.button`
  width: auto;
  height: 100%; 
  background: none;
  color: white;
  font-size: 18px;
  margin-left: 30px;
  border: none;
  border-bottom: none;
  &:hover {
    border-bottom: 3px solid red;
  }
`;

const DetailMenuContainer = styled.div`
  width: 100%;
  height: 10vh;
  border: 1px solid white;
`;

const DetailMenu = () => {
  return (
    <DetailMenuContainer>
    </DetailMenuContainer>
  );
};

const Header = () => {
  return (
    <Container>
      <SideFrame style={{justifyContent:"flex-start"}}>
        <h3>PNN</h3>
      </SideFrame>
      <SideFrame>
        <Button>About Us</Button>
        <Button>자료실</Button>
        <Button>구성원 소개</Button>
        <Button>작품 소개</Button>
      </SideFrame>
      {DetailMenu}
    </Container>
  );
};

export default Header;