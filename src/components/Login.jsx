import React, { useState } from 'react'
import './Login.css'
import { assets } from '../assets/assets';
const Login = ({setShowLogin}) => {
    const [curstate , setCurState] = useState('Sign Up');
  return (
    <div className='login'>
      <form className='login-container'>
        <div className='login-title'>
            <h2>{curstate}</h2>
            <img src={assets.cross_icon} onClick={()=>{setShowLogin(false)}} />
        </div>
        <div className="login-inputs">
            {curstate==='Login'?<></>:<input type="text" placeholder='Enter UserName Here..' required minLength={3}/>}
            <input type="email" placeholder='Enter Email Here..' required/>
            <input type="password" placeholder='Enter Password Here..' required/>
        </div>
        <button>{curstate==="Sign Up"?'Create New Account':'Login'}</button>
        <div className="login-condition">
            <input type="checkbox" required/>
            <p>By Continuing , I agree to the terms of use & conditions.</p>
        </div>
        {curstate==='Login'?<p className='login-para'>Create a new account?<span onClick={()=>{setCurState('Sign Up')}}>Click Here</span></p>
        :<p className='login-para'>Already have an account?<span onClick={()=>{setCurState('Login')}}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default Login;