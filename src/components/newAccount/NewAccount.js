import React, { useState, useEffect } from "react";
import {
  NewAccountBox,
  Title,
  CheckBox,
  CheckBoxContainer,
  LabelContainer,
} from "./new-account-style-component";
import {
  Input,
  Label,
  Form,
  ButtonContainer,
  InputButton,
  Button,
} from "../login/login-styled-component";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { schema } from "../yupShema/yupSchema";
import { Navigate } from "react-router-dom";

/********************************
 * // exported to Login.js
 * NewAccount Component
 *******************************/
export default function NewAccount({ setOpen }) {
  const [state, setState] = useState(false);
  const [manager, setManager] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [permissions, setPermissions] = useState("");

  function onHandlerCheckManager() {
    setPermissions("");
    setManager(true);
    setEmployee(false);
    setPermissions("manager");
  }
  function onHandlerCheckEmployee() {
    setPermissions("");
    setEmployee(true);
    setManager(false);
    setPermissions("employee");
  }

  function resetCheckBox(){
    setEmployee(false);
    setManager(false);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitHandler(data) {
    const { firstName, lastName, email, password } = data;

    axios
      .post("http://localhost:8080/serveless/signup", {
        first: firstName,
        last: lastName,
        e_mail: email,
        pass: password,
        permission: permissions
      })
      .then(function (res) {
        if (res.status === 200) {
          setState(true);
          resetCheckBox();

        }
        // console.log(res.status);
        console.log(res);
        reset();
        resetCheckBox();
      })
      .catch(function (error) {
        console.log(error);
        alert("Account already exist");
        reset();
        resetCheckBox();
      });
    // console.log(data);
  }


  return (
    <>
      <NewAccountBox>
        <Title>Create New Account</Title>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Label>First Name</Label>
          <Input {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
          <Label>Last Name</Label>
          <Input {...register("lastName")} />
          <p>{errors.lastName?.message}</p>
          <Label>Email</Label>
          <Input {...register("email")} />
          <p>{errors.email?.message}</p>
          <Label>Password</Label>
          <Input type={"password"} {...register("password")} />
          <p>{errors.password?.message}</p>
          <Label>Confirm Password</Label>
          <Input type={"password"} {...register("passwordConfirmation")} />
          <p>{errors.passwordConfirmation?.message}</p>
          <CheckBoxContainer>
            <LabelContainer>
              <CheckBox
                checked={manager}
                value={manager}
                onChange={onHandlerCheckManager}
              />
              <Label>Manager</Label>
            </LabelContainer>
            <LabelContainer>
              <CheckBox
                checked={employee}
                value={employee}
                onChange={onHandlerCheckEmployee}
              />
              <Label>Employee</Label>
            </LabelContainer>
          </CheckBoxContainer>
          <ButtonContainer>
            {state ? null : <InputButton type={"submit"} />}
            <Button onClick={() => setOpen(true)}>Back</Button>
          </ButtonContainer>
        </Form>
      </NewAccountBox>
    </>
  );
}
