import React, { useState } from "react";
import HeaderPR from "./HeaderPR";

const IdentityVerify = () => {
  return (
    <div className="pr-page">
      <HeaderPR />
      <div className="pr-container">
        <div className="pr-top-box">
          <button className="forgot-pass text-[#582000] text-opacity-75">
            FORGOT PASSWORD
          </button>
          <button className="forgot-pass">FORGOT USERNAME</button>
        </div>
        <div className="pr-bottom-box">
          <div className="container">
            <div className="sign-in-box-heading">Identity Verification</div>
            <p className="head-text">
              We will send you an OTP on the registered email ID, just wait for
              a few seconds.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="enter-otp">ENTER OTP</div>
            <div className="flex justify-between">
              {[...Array(6)].map((_, index) => (
                <input key={index} className="input-otp" placeholder="_" />
              ))}
            </div>
            <button className="sign-in-button">CONTINUE</button>
          </div>
          <div className="line-container">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="line"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerify;
