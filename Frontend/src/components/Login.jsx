import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'; 
const Login = () => {
  
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
const navigate = useNavigate();
const handleNewRegister = ()=>{
  navigate('/Register')
}
  return (
    <div>
      <div className='body'>
        <div className="page">
        <Header/>
       
     <form className="sign-in-box " onSubmit={getInputData}>
      <div className='heading flex gap-x-20  ml-3 '>
        <div classname = "">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="31" viewBox="0 0 28 31" fill="none">
        <path d="M14 1.5C10.8174 1.5 7.76515 2.975 5.51472 5.6005C3.26428 8.22601 2 11.787 2 15.5C2 19.213 3.26428 22.774 5.51472 25.3995C7.76515 28.025 10.8174 29.5 14 29.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
        <path d="M26 15.5L11 15.5M11 15.5L15.5 20.75M11 15.5L15.5 10.25" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> </div>
       <h2 className="sign-in-box-heading font-[Arial Rounded MT Bold] text-[32px] font-bold">Sign In</h2>
       </div>
         <input
         onChange={(e)=>setFullname(e.target.value)}
         className="input-text"
         type="text"
         placeholder="USERNAME"
         name="username"
         value={Fullname}
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
       <button classname = "">Can't Sign In</button>
       <button classname = "" onClick={handleNewRegister}>Create a New Account</button>
         
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

export default Login
