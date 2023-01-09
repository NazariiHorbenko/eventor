import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Password-login.css'
import '../styles/Signinbutton.css'
import '../styles/Email-login.css'
import { createRef } from 'react';
import '../styles/Continuewithgooglebtn.css'
import '../styles/Header.css'
import '../styles/Remember.css'
// import Password from './Password';

const Neww = props => {
let checklogin = React.createRef();
let checkpassword = React.createRef();



let workwithuser = () =>{
    debugger;
    let logindata = checklogin.current.value;
    let passworddata = checkpassword.current.value;
    const newuser = {
        name: logindata,
        password: passworddata
    }

    let readytocheck = JSON.stringify(newuser);
    console.log(readytocheck);
}

    return (
        <div>
               <div>
                <header className='header'>Login to your account</header>
            </div>
            <div className='email'>
                <p className='text-paragraph'>email or username</p>
                <input ref={checklogin} type="text" placeholder='Email adress' />
            </div>
                <div className='password'>
               <p className='text-paragraph'>Password</p>
                <input ref={checkpassword} type="text" placeholder='Password' /> 
            </div>
            <button className='sign-in-btn' onClick={workwithuser}>SIGN IN</button>
            <div>
                <button className='googlebtn'>Continue with google </button>
                <div className='googleph'></div>
                <div className='remember'>
                <input type="checkbox" className='input-check'/>
                <p className='remember-me'>remember me</p>
            </div>
               <span className='already'>Don't have an account?<span className='sign'>Sign in</span></span> 

            </div>
        </div>
    );
};

Neww.propTypes = {
    
};

export default Neww;