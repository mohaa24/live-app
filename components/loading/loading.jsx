import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  padding: 8px 10px;
  box-sizing: border-box;
  background-color: none;
  box-shadow:black;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11111;
  width:100vw;
  .clearSpace {
    width: 15px;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 2px solid white;
  border-top: 2px solid black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.7s linear infinite;
`;

const LoaderText = styled.div`
  color: black;
  font-size: 1rem;
`;

const OverlayLoader = (props) => {
  const { loaderText } = props;
  return (
    <Container>
      <LoaderText>{loaderText || "Please wait..."}</LoaderText>
      <div className="clearSpace" />
      <Loader />
    </Container>
  );
};

export default OverlayLoader;
