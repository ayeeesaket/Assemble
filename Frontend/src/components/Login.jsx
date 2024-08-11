import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
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
            <div className="container ">
    {/* <div className="back"><IoArrowBackCircleOutline size={28}/></div> */}
              <div className="sign-in-box-heading ">Sign In</div></div>
             
             
            <input className="input-box" placeholder="USERNAME"></input>
            <input className="input-box" placeholder="PASSWORD"></input>
            <div className="flex gap-2">
              <input className = "check-box" type="checkbox" id="check-box" name="scales" />
              <label className="check-text font-medium" htmlFor="checkbox">Stay Signed In</label>
            </div>
            <button className="sign-in-button">CONTINUE</button>
            <div className="flex justify-between">
              <button className="font-medium">Can&apos;t Sign In</button>
              <button className="font-medium" onClick={handlePrivacyPolicyClick4}>Create a New Account</button>
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
