import styled, { keyframes } from "styled-components";

const newAccountAnimation = keyframes` 
    from{
        transform: translateY(-200%);
    }
    to{
        transform: translateY(0%);
    }
`;

// exported to Login.js
export const NewAccountBox = styled.div`
  width: 50%;
  height: 60vh;
  background-color: black;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  border-radius: 2rem;
  animation: ${newAccountAnimation} 0.7s;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.4rem;
  font-family: fantasy;
  text-align: center;
  color: white;
`;
export const CheckBoxContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
`;

export const LabelContainer = styled.div`
  width: 15vh;
`;

export const CheckBox = styled.input.attrs({
  type: "checkbox",
})``;
