import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Password = () => {
    const navigate = useNavigate();
     const handlePrivacyPolicyClickMinus7 = () => {
       navigate("/GamerTag");
     };
  return (
    <>
      <div className="body">
        <div className="page">
          <Header />

          <div className="sign-in-box ">
            <div className="container flex gap-2">
              <div className="flex flex-row gap-10">
                <div className="back" onClick={handlePrivacyPolicyClickMinus7}>
                  <IoArrowBackCircleOutline size={28} />
                </div>
                <div className="sign-in-box-heading ">Create A Password</div>
              </div>
              <div className="head-text">Make Sure, It's a good one.</div>
            </div>

            <div className="flex gap-5 flex-col">
              <input className="input-box" placeholder="PASSWORD"></input>
              <input
                className="input-box"
                placeholder="CONFIRM PASSWORD"
              ></input>

              <button className="sign-in-button">ENTER</button>
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

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Password;
