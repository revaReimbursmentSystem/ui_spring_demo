import styled, { keyframes, css } from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loginAnimation = keyframes` 
    from{
        transform: translateX(-200%);
    }
    to{
        transform: translateY(0%);

    }
`;

export const LoginBox1 = styled.div`
  width: 50%;
  height: 50vh;
  background: black;
  color: white;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 2rem;
  animation: ${loginAnimation} 0.7s;
`;

export const LoginTittle = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.8rem;
  text-align: center;
  font-family: fantasy;
`;

export const Label = styled.label`
  width: 100%;
  margin-left: 10%;
  font-family: fantasy;
  font-size: 1.3rem;
`;

// input exported to login.js and newaccount.js
export const Input = styled.input`
  width: 90%;
  height: 1.5rem;
  border-radius: 1rem;
  outline: 0;
  border: 0;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  margin-top: 15%;
  margin-bottom: 5%;
`;

const buttonStyle = css`
  width: 15vh;
  height: 3vh;
  cursor: pointer;
  outline: none;
  color: white;
  background: black;
  border: 0;
  transition: all .7s ease;
  font-family: fantasy;
  font-size: 1rem;
  &:hover{
    color: blue;
    transition: all .7s ease;
  }

`;

export const Button = styled.button`
  ${buttonStyle}
`;

export const InputButton = styled.input`
  ${buttonStyle}
`;
