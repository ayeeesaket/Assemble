import React from "react";
import HeaderPR from "./HeaderPR";
const ChangePass = () => {
  return (
    <>
      <div className="pr-page">
        <HeaderPR />
        <div className="pr-container">
          <div className="pr-top-box">
            <button className="forgot-pass  text-[#582000] text-opacity-75">
              FORGOT PASSWORD
            </button>
            <button className="forgot-pass text-black">FORGOT USERNAME</button>
          </div>
          <div className="pr-bottom-box">
            {/* SAME AS THE SIGN-IN BOX */}
            <div className="container ">
              <div className="sign-in-box-heading ">Change Password</div>
              <p className="head-text">
                Enter A New Password And This Time , Try To Remember And Save It
                In Google Passwords
              </p>
            </div>
            <div className="flex gap-5 flex-col">
              <input className="input-box" placeholder="NEW PASSWORD"></input>
              <input
                className="input-box"
                placeholder="CONFIRM PASSWORD"
              ></input>

              <button className="sign-in-button">ENTER</button>
            </div>
            <div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
