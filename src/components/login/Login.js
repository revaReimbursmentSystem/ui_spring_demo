import React, { useState } from "react";
import {
  LoginContainer,
  LoginBox1,
  LoginTittle
} from "./login-styled-component";
import NewAccount from "../newAccount/NewAccount";
import LoginBox from "./LoginBox";
/******************************
 * Login Component
 ******************************/
export default function Login() {
  const [open, setOpen] = useState(true);



  // function onHandlerAxiosGet() {
  //   axios.get("http://localhost:8080/serveless/user").then((res) => {
  //     const dat = res.data;
  //     console.log(dat);
  //   });
  // }
  return (
    <LoginContainer>
      {open ? (
        <LoginBox1>
          <LoginTittle>SignIn</LoginTittle>
          <LoginBox setOpen={setOpen} />
        </LoginBox1>
        
      ) : (
        <NewAccount setOpen={setOpen} />
      )}
    </LoginContainer>
  );
}
