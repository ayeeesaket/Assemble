import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick4 = () => {
    console.log("hello");
    navigate('/Register');
  };
  return (
    <>
  
      <div className="body">
        <div className="page">
          <Header />

          <div className="sign-in-box ">
         
              
              <div className="sign-in-box-heading">Sign in</div>
             
            <input className="input-box" placeholder="Username"></input>
            <input className="input-box" placeholder="Password"></input>
            <div className="flex gap-2">
              <input className = "check-box" type="checkbox" id="check-box" name="scales" />
              <label htmlFor="checkbox">Stay Signed In</label>
            </div>
            <button className="sign-in-button">CONTINUE</button>
            <div className="flex justify-between">
              <button className="">Can&apos;t Sign In</button>
              <button className="" onClick={handlePrivacyPolicyClick4}>Create a New Account</button>
            </div>
            <div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <p className="end-text">Tournament Supported Games</p>
            <div className="logo flex justify-between">
              <div className="pubg"> </div>
              <div className="valorant"></div>
              <div className="coc"></div>
              <div className="cod"></div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
