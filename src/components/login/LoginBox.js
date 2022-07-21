import React, { useState, useEffect } from "react";
import {
  Label,
  Input,
  InputButton,
  Button,
  ButtonContainer,
  Form,
} from "./login-styled-component.js";
import axios from "axios";
import { Navigate, useSearchParams } from "react-router-dom";
import { current_user } from "../data/data.js";
// ex
export default function LoginBox({ setOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [emailE, setEmailE] = useState("");
  const [passwordE, setPasswordE] = useState("");
  const [confirmE, setConfirmE] = useState("");
  const [currentUser, setCurrentUser] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timeID = setTimeout(() => {
      if (error) {
        alert("Not Authrized");
        setError(false);
      }
    }, 0);

    return () => {
      clearTimeout(timeID);
    };
  }, [error]);

  function reset() {
    setEmail("");
    setPassword("");
    setConfirm("");
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailE("Invalid Email");
    } else {
      setEmailE("");
    }
    if (
      (password.length < 11 && password.length > 0) ||
      password.length === 0
    ) {
      setPasswordE("Password must be 10 charactes at least");
    } else {
      setPasswordE("");
    }
    if (confirm !== password) {
      setConfirmE("Password does not match");
    } else {
      setConfirmE("");
    }
    if (email.includes("@") && password.length > 10 && confirm === password) {
      // console.log(logInInfo);
      axios
        .post("http://localhost:8080/serveless/user", {
          email: email,
          password: password,
        })
        .then(function (res) {
          // needs to send the info
          const infoData = res.data;
          setCurrentUser(infoData);
          current_user.push(infoData);
          
          // console.log(res.data);
        })
        .catch(function (error) {
          console.log("SignIn error: "+error);
          setError(true);
        });
      reset();
    }
  }
  console.log(currentUser.email);

  // console.log(currentUser.email == null);
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Label>Email</Label>
        <Input onChange={(e) => setEmail(e.target.value)} value={email} />
        <p>{emailE}</p>
        <Label>Password</Label>
        <Input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p>{passwordE}</p>
        <Label>Confirm Password</Label>
        <Input
          type={"password"}
          onChange={(e) => setConfirm(e.target.value)}
          value={confirm}
        />
        <p>{confirmE}</p>
        <ButtonContainer>
          <InputButton type={"submit"} />
          <Button onClick={() => setOpen(false)}>New Account</Button>
        </ButtonContainer>
      </Form>
      {currentUser.email ? <Navigate to="/userprofile" replace={true} /> : null}
      
    </>
  );
}
