import React from 'react';
import Maindivbox from './elements/Maindivbox'
import Divlogo from './elements/Divlogo'
import Neww from './elements/new';
import PropTypes from 'prop-types';

const Loginpage = props => {
    return (
        <div>
    <Maindivbox />
    <Divlogo />
    <Neww />
        </div>
    );
};

Loginpage.propTypes = {

};

export default Loginpage;