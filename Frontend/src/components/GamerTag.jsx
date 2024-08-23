import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const GamerTag = () => {
  const navigate = useNavigate();
  const handlePrivacyPolicyClick7 = () => {
    navigate("/Password");
  };
    const handlePrivacyPolicyClickMinus6 = () => {
      navigate("/EmailVerification");
    };
  return (
    <>
      <div className="body">
        <div className="page">
          <Header />

          <div className="sign-in-box ">
            <div className="container flex gap-2">
              <div className="flex flex-row gap-20">
                <div className="back" onClick={handlePrivacyPolicyClickMinus6}>
                  <IoArrowBackCircleOutline size={28} />
                </div>
                <div className="sign-in-box-heading ">Gamer tag</div>
              </div>
              <div className="head-text">
                Creating a unique username differentiate you from another ,
                build your own identity.
              </div>
            </div>

            <div className="flex gap-5 flex-col">
              <input className="input-box" placeholder="USERNAME"></input>

              <button
                className="sign-in-button"
                onClick={handlePrivacyPolicyClick7}
              >
                ENTER
              </button>
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

export default GamerTag;
