import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Frame = styled.div`
  width: 100%;
  height: 120vh;
  position: relative;  
`;

const Content = styled.div`
  position: absolute;  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre-line;
  color: white;
  z-index: 1;         
  pointer-events: none; // 추가: 3D 모델과 상호작용
  h1 {
    position: absolute;
    font-size: 50px;
    top: 10%;
  }
  h2 {
    margin-top: 5%;
  }
`;

const CanvasContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/star_cluster.glb');
  return <primitive object={gltf.scene} scale={10} position={[0,0,0]} />;
}

const AboutUs = () => {
  return (
    <Frame>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 10, 0] }}>
          <ambientLight intensity={1.0} />
          <pointLight position={[0, 0, 0]} />
          <Model />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={0.5}   
            enableZoom={false}
          />
        </Canvas>
      </CanvasContainer>
      
      <Content>
        <h1>About Us</h1>
        <h2>#의미 #동아리 </h2>
        <h3>P&N(Programming & Network) Programming을 즐기는네트워크라는 뜻을 가진 인제대학교 컴퓨터공학부 학술동아리 입니다.</h3>
        <h2>#목적 #선후배 #전공공부</h2>
        <h3>프로그래밍을 처음 접하는 후배들을 도와 전공 공부에 충실할 수 있도록 하며 더불어 심화된 Programming을 공부하는 동아리입니다.</h3>
        <h2>#지향 #Programming</h2>
        <h3>Programming에 관심이 있는 사람이라면 누구나 첫발을 내딛을 수 있는 곳이며 같은 지향점을 가지고
          Programming 공부와 더불어 선후배간의 소중한 만남을 목적으로 하는 곳입니다.</h3>
      </Content>
    </Frame>
  );
};

export default AboutUs;