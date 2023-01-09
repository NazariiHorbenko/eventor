import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/header.css";
import { MdEmail } from 'react-icons/md';
import {FcGoogle} from 'react-icons/fc';
class Sign_up extends Component {
    render() {
        return (
            <div>
                <div className='for-header'><h1 className='header'>Sign up </h1> 
                <div className='divforlogin'>
                <div className='tt'><span>If you already have an account register</span> <br/> <span>You can</span> <span className='lh'> <b>Login here!</b> </span></div>
                </div>
                <div className='foremail'>
                    <p className='emailname'> Email </p>
                    <input type="text" placeholder='Enter your email' className='imputforemail' />

                </div>
                <div className='forusername'>
                 <p className='username'>Username</p>
                 <input type="text" placeholder={`Enter your username`} className='inputforusername' />
                </div>
                <div className='forpassword'>
                    <p className='password'>Password</p>
                    <input type="text" placeholder='Enter your password'  className='inputforpassword'/>
                </div>
                <div className='forconfirm'>
                    <p className='confirm'>Confirm password</p>
                    <input type="text" placeholder='Confirm your password' className='inputforconfirm'/>
                </div>
                <button className='btnregister'>Register</button>
                <button className='btnwithgoogle'><FcGoogle className='fcgoogle' style={{position: 'absolute', top: '15px', left: '90px'}}/> Continue with Google</button>
                </div>


            </div>
        );
    }
}

Sign_up.propTypes = {

};

export default Sign_up;