import React, { useState} from 'react';
import Data from './Data';
import useSignup from './useSignup';
import signSuccess from './signSucces';
import './sign.css';




const SignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitSignUp(){
        setIsSubmitted(true);
    }
    return (
        <>
        
        <div>
            {!isSubmitted ? <useSignup submitSignUp={submitSignUp} /> : <signSuccess />}
            
        </div>
        <Data />
        </>
    )
}

export default SignUp;
