 import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

const CreateAnewAccount = () => {
     const navigate = useNavigate();
     const handlePrivacyPolicyClick5 = () => {
       console.log("hello");
       navigate("/EmailVerification");
     };
   return (
     <>
       <div className="body">
         <div className="page">
           <Header />

           <div className="sign-in-box ">
             <div className="container flex gap-2">
               {/* <div className="back"><IoArrowBackCircleOutline size={28}/></div> */}
               <div className="sign-in-box-heading ">Register</div>
               <div className="head-text">
                 In Few Steps , You Are Becoming A New Member Of Esports
                 Community
               </div>
             </div>

             <div className="flex gap-5 flex-col">
               <input className="input-box" placeholder="EMAIL ID"></input>
               <div className="flex gap-3">
                 <input
                   className="check-box"
                   type="checkbox"
                   id="check-box"
                   name="scales"
                 />
                 <label
                   className="check-text-register font-medium"
                   htmlFor="checkbox"
                 >
                   By signing up, I agree to receive promotional emails,
                   updates, and the latest news about our gaming tournaments and
                   events.{" "}
                 </label>
               </div>
               <button
                 className="sign-in-button"
                 onClick={handlePrivacyPolicyClick5}
               >
                 VERIFY
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
 }
 
 export default CreateAnewAccount
 