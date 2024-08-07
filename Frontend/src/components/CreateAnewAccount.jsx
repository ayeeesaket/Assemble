import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [isLogin, setIslogin] = useState(false);
  const LoginHandler = () => {
    setIslogin(!isLogin);
  };
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const getInputData = (e) => {
    e.preventDefault();
    console.log(Email, Password, Fullname);
  };
  return (
    <div>
      <div className="body">
        <div className="page">
          <Header />

          <form className="sign-in-box   " onSubmit={getInputData}>
            <h2 className="  sign-in-box-heading   text-[32px] font-bold ">Register</h2>
            <p className="box-content "> In few steps , you are becoming a new member of Esports Community</p>
            <input
              className="input-text"
              type="email"
              placeholder="Email"
              name="username"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input type="checkbox" id="checkbox" name="scales" />
            <label for="checkbox">By signing up, I agree to receive promotional emails, updates, and the latest news about our gaming tournaments and events</label>
            <button className="sign-in-button">Verify</button>
            
            
            <p className="end-text">Tournament Supported Games</p>
            <div className="logo flex  justify-between ml-5 mr-5 pb-5">
              <div className="pubg"> </div>
              <div className="valorant"></div>
              <div className="coc"></div>
              <div className="cod"></div>
            </div>
          </form>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Body;
