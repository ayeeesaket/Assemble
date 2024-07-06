import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
const Body = () => {
  
  const [isLogin, setIslogin] = useState(false);
  const LoginHandler = () =>{
    setIslogin (!isLogin);
  }
  const [Fullname,setFullname]=useState("");
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const getInputData=(e)=>{
e.preventDefault();
console.log(Email,Password,Fullname);
  }
  return (
    <div>
      <div className='body'>
        <div className="page">
        <Header/>
       
     <form className="sign-in-box " onSubmit={getInputData}>
       <h2 className="sign-in-box-heading text-3xl font-bold">{isLogin ? "LOGIN" : "SIGN UP"}</h2>
       {!isLogin&&
         <input
         onChange={(e)=>setFullname(e.target.value)}
         className="input-text"
         type="text"
         placeholder="USERNAME"
         name="username"
         value={Fullname}
       />
       }
      
       <input
         className="input-text"
         type="email"
         placeholder="Email"
         name="username"
         value={Email}
         onChange={(e)=>setEmail(e.target.value)}
       />
         <input
         className="input-text"
         onChange={(e)=>setPassword(e.target.value)}
         type="password"
         placeholder="PASSWORD"
         name="username"
         value={Password}
       />
       <input type="checkbox" id="checkbox" name="scales" checked />
       <label for="checkbox">Stay Signed In</label>
       <button className="sign-in-button" >Continue</button>
       <div className="sign-in-div">
       <p className="text">{isLogin ? "Create a new account" : "Already Have a account "}</p>
         <p className="text-yellow-800 mr-11 cursor-pointer " onClick={LoginHandler}>{isLogin ? "SIGN-IN" : "login"}</p>
         
       </div>
       <div>
         <div className="line"></div>
         <div className="line"></div>
         <div className="line"></div>
         <div className="line"></div>
       </div>
       <p className="end-text">Tournament Supported Games</p>
       <div className = "logo flex  justify-between ml-5 mr-5 pb-5">
         <div className='pubg'> </div>
          <div className="valorant"></div>
          <div className="coc"></div>
          <div className="cod"></div>
        </div>
     </form>
     <Footer/>
   </div>
    </div>
    </div>
  )
}

export default Body
