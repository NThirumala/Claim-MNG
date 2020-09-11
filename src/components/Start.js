import React, { useState } from 'react';
import Login from './Login';
import Claimsumamry from './Claimsummary';
const Start = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <div>
            {isSubmitted?(<Claimsumamry/>):(<Login submitForm={submitForm}/>)}
        </div>
    );
};

export default Start;