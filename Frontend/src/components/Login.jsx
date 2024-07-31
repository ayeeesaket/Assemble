import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Login = () => {

  return (
    <>
      {" "}
      <div className="body">
        <div className="page">
          <Header />

          <div className="sign-in-box ">
           <div className="flex">
              <div classname="back-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="24"
                  viewBox="0 0 28 31"
                  fill="none"
                >
                  <path
                    d="M14 1.5C10.8174 1.5 7.76515 2.975 5.51472 5.6005C3.26428 8.22601 2 11.787 2 15.5C2 19.213 3.26428 22.774 5.51472 25.3995C7.76515 28.025 10.8174 29.5 14 29.5"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M26 15.5L11 15.5M11 15.5L15.5 20.75M11 15.5L15.5 10.25"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </div>
              </div>
              {/* <div className="flex justify-center"> */}
              <div classname="sign-in-box-heading">Sign in</div>
             {/* </div> */}
            <input className="input-box" placeholder="Username"></input>
            <input className="input-box" placeholder="Password"></input>
            <div className="flex gap-2">
              <input className = "checkbox" type="checkbox" id="checkbox" name="scales" />
              <label for="checkbox">Stay Signed In</label>
            </div>
            <button className="sign-in-button">CONTINUE</button>
            <div className="flex justify-between">
              <button classname="">Can't Sign In</button>
              <button classname="">Create a New Account</button>
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
