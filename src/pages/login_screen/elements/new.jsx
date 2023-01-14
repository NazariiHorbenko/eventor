import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Password-login.css'
import '../styles/Signinbutton.css'
import '../styles/Email-login.css'
import { createRef } from 'react';
import '../styles/Continuewithgooglebtn.css'
import { Link } from 'react-router-dom';
import '../styles/new.css'


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
                <header className='headerlogin'>Login to your account</header>
            </div>
            <div className='emaillogin'>
                <p className='text-paragraph'>email or username</p>
                <input ref={checklogin} type="text" placeholder='Email adress' />
            </div>
                <div className='passwordlogin'>
               <p className='text-paragraph'>Password</p>
                <input ref={checkpassword} type="text" placeholder='Password' /> 
            </div>
            <button className='sign-in-btn' onClick={workwithuser}>SIGN IN</button>
            <div>
                <button className='googlebtn'>Continue with google </button>
                <div className='googleph'></div>
                <div className='rememberlogin'>
                <input type="checkbox" className='input-check'/>
                <p className='remember-melogin'>remember me</p>
            </div>
              <span className='already'>Don't have an account? <Link to={"/register"} ><span className='sign'>Sign up</span></Link></span> 
            </div>
        </div>
    );
};

Neww.propTypes = {
    
};

export default Neww;