import styled, { keyframes } from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const animationProfile = keyframes` 
  from{
    transform: translateX(-200%);
  }
  to{
    transform: translateY(0%);
  }
`;

export const ProfileBox = styled.div`
  width: 60%;
  height: 50vh;
  background-color: black;
  animation: ${animationProfile} .7s;
`;
