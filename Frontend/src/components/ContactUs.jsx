import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const ContactUs = () => {
  return (
    <>
      <div className="body">
        <div className="page">
          <div className="sign-in-box ">
            <div className="container flex gap-2">
              <div className="flex flex-row gap-16">
                <div className="back">
                  <IoArrowBackCircleOutline size={28} />
                </div>
                <div className="sign-in-box-heading ">Contact Us</div>
              </div>
              <div className="head-text">
                Confirm your Identity To Showcase Your Gaming Skills In Esports
                World
              </div>
            </div>

            <div className="flex gap-5 flex-col">
              <div className="enter-otp">ENTER OTP</div>
              <div className="flex justify-between">
                <>
                  <input className="input-otp" placeholder="_"></input>
                </>
                <>
                  <input className="input-otp" placeholder="_"></input>
                </>
                <>
                  <input className="input-otp" placeholder="_"></input>
                </>
                <>
                  <input className="input-otp" placeholder="_"></input>
                </>
                <>
                  <input className="input-otp" placeholder="_"></input>
                </>
                <>
                  <input className="input-otp" placeholder="_"></input>
                </>
              </div>
              <button className="sign-in-button">CONTINUE</button>
            </div>

            <div className="flex flex-col gap-5">
              <p className="end-text">Tournament Supported Games</p>
              <div className="logo flex justify-between">
                <div className="pubg"> </div>
                <div className="valorant"></div>
                <div className="coc"></div>
                <div className="cod"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
