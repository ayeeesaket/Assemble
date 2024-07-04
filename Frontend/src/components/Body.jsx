import React from 'react'
import { SiValorant } from "react-icons/si";
import { SiPubg } from "react-icons/si";
import Header from './Header';
const Body = () => {
  return (
    <div>
      <div class='body'>
        <div class="page">
        <Header/>
     <div class="sign-in-box">
       <h2 class="sign-in-box-heading">Sign In</h2>
       <input
         class="input-text"
         type="text"
         placeholder="USERNAME"
         name="username"
       />
       <input
         class="input-text"
         type="password"
         placeholder="PASSWORD"
         name="username"
       />
       <input type="checkbox" id="checkbox" name="scales" checked />
       <label for="checkbox">Stay Signed In</label>
       <button class="sign-in-button">Continue</button>
       <div class="sign-in-div">
         <p class="text">Can't Sign In</p>
         <p class="text">Create new acccount</p>
       </div>
       <div>
         <div class="line"></div>
         <div class="line"></div>
         <div class="line"></div>
         <div class="line"></div>
       </div>
       <p class="end-text">Tournament Supported Games</p>
       <div class = "logo flex  justify-between ml-5 mr-5">
         <div><SiValorant size={25} /></div>
         <div>< SiPubg size={25} /></div>
         <div><SiValorant size={25} /></div>
         <div><SiValorant size={25} /></div>
       </div>
     </div>

     <footer class="page-footer">
       <ul class="footer-list">
         <li class="list-item">CONTACT US</li>
         <li class="list-item">TERMS OF SERVICE</li>
         <li class="list-item">PRIVACY POLICY</li>
       </ul>
     </footer>
   </div>
    </div>
    </div>
  )
}

export default Body
