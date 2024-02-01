import React, { useState } from "react";
import axios from "axios"

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  // const [responseData, setResponseData] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(emailInput, passwordInput);
    const url = "https://api.escuelajs.co/api/v1/auth/login";
    let body = {email : "john@gmail.com", password : "changeme"}
    let response  = await axios.post(url,body);
    console.log(response);    
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <form action="" method="post">
          <input
            type="text"
            value={emailInput}
            onChange={(event) => {
              setEmailInput(event.target.value);
            }}
          />
          <input
            type="password"
            value={passwordInput}
            onChange={(event) => {
              setPasswordInput(event.target.value);
            }}
          />
          <button type="submit" onClick={(event) => submitHandler(event)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
