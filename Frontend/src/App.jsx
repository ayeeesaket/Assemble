import React from "react";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Peepee from "./components/Peepee";
import CreateAnewAccount from "./components/CreateAnewAccount";
import EmailVerification from "./components/EmailVerification";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import PassRecovery from "./components/PassRecovery";
import IdentityVerify from "./components/IdentityVerify";
import ChangePass from "./components/ChangePass";
import UsernameRecover from "./components/UsernameRecover";
import UsernameSent from "./components/UsernameSent";
import DashBoard from "./components/DashBoard";
import AccountCenter from "./components/AccountCenter"
import Homepage from "./components/homepage/Homepage";
import NavConsole from "./components/ui/nav/NavConsole";
const App = () => {
  return (
    <div className="overflow-hidden no-scrollbar">
      <Body/>
      {/* <DashBoard/> */}
      {/* <Homepage/> */}
      {/* <AccountCenter /> */}
      {/* <NavConsole/> */}
      
    </div>
  );
};

export default App;
