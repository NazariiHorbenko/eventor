import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import "../styles/header.css";
import { MdEmail } from 'react-icons/md';
import {FcGoogle} from 'react-icons/fc';
import { validEmail, validPassword, validUsername } from './regexforsignup';
export default function Sign_up() {

    // render() {
        // let emailreg = React.createRef();
        // let loginreg = React.createRef();
        // let passwordreg = React.createRef();
        
        const [emailreg, setEmail] = useState('');
        const [loginreg, setLogin] = useState('');
        const [passwordreg, setPassword] = useState('');
        const [emailErr, setEmailErr] = useState(false);
        const [loginErr, setLoginErr] = useState(false);
        const [pwdError, setPwdError] = useState(false);
        const validate = () => {
      if (!validEmail.test(emailreg)) {
         setEmailErr(true);
      }
      if(!validUsername.test(loginreg)){
        setLoginErr(true);
      }
      if (!validPassword.test(passwordreg)) {
         setPwdError(true);
      }
      console.log(emailreg); // checking value
      console.log(loginreg); // checking value
      console.log(passwordreg); // checking value
   };


        return (
            <div>
                <div className='for-header'><h1 className='header'>Sign up </h1> 
                <div className='divforlogin'>
                <div className='tt'><span>If you already have an account register</span> <br/> <span>You can</span> <Link to={'/'}><span className='lh'> <b>Login here!</b> </span></Link></div>
                </div>
                <div className='foremail'>
                    <p className='emailname'> Email </p>
                    <input type="text" value={emailreg} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' className='imputforemail' />

                </div>
                <div className='forusername'>
                 <p className='username'>Username</p>
                 <input type="text" value={loginreg} onChange={(e)=>setLogin(e.target.value)} placeholder={`Enter your username`} className='inputforusername' />
                </div>
                <div className='forpassword'>
                    <p className='password'>Password</p>
                    <input type="password" value={passwordreg} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'  className='inputforpassword'/>
                </div>
                <div className='forconfirm'>
                    <p className='confirm'>Confirm password</p>
                    <input type="password" placeholder='Confirm your password' className='inputforconfirm'/>
                </div>
                <button className='btnregister' onClick={validate} >Register</button>
                {emailErr && console.log('Your email is invalid')}
                {loginErr && console.log('Your username is invalid')}
                {pwdError && console.log('Your password is invalid')}
                <button className='btnwithgoogle'><FcGoogle className='fcgoogle' style={{position: 'absolute', top: '15px', left: '90px'}}/> Continue with Google</button>
                </div>


            </div>
        );
    // }
}

Sign_up.propTypes = {

};

// export default Sign_up;