import React from 'react';
import PropTypes from 'prop-types';
import Divlogo from '../login_screen/elements/Divlogo';
import Maindivbox from '../login_screen/elements/Maindivbox';
import Sign_up from '../sign_up_screen/elements/Sign_up';

const Signuppage = props => {
    return (
        <div>
            <Maindivbox />
            <Divlogo />
            <Sign_up />
        </div>
    );
};

Signuppage.propTypes = {
    
};

export default Signuppage;