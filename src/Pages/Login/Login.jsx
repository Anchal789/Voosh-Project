import React, { useState } from "react";
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [responseData, setResponseData] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("https://api.escuelajs.co/api/v1/users/",{
      "name": "Nicolas",
      "email": "nico@gmail.com",
      "password": "1234",
      "avatar": "https://picsum.photos/800",
    });
    axios.post("https://api.escuelajs.co/api/v1/auth/login",{email : email, password : password}).then(response =>{console.log("response",response)});
    // console.log(responseData);
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <form action="" method="post">
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
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
