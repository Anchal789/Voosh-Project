import React, { useState } from "react";
import axios from "axios"

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [responseData, setResponseData] = useState();
  let avatar = "https://picsum.photos/800";
  const loginHandler = async (event) => {
    event.preventDefault();
    console.log(emailInput, passwordInput);
    const url = "https://api.escuelajs.co/api/v1/auth/login";
    let body = {email : "john@gmail.com", password : "changeme"}
    let response  = await axios.post(url,body);
    console.log(response);    
  };

  const registerHandler = ()=>{
    
  }

  return (
    <div className="loginPage">
      <form>
        <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/>
        <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
        <input type="text" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
        <button onClick={registerHandler}>Register</button>
      </form>
      <div className="loginContainer">
        <form>
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
          <button type="submit" onClick={(event) => loginHandler(event)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
