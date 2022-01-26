import React, { useState } from 'react';
import CustomInput from '../customInput/CustomInput.component';
import CustomButton from '../customButton/CustomButton.component';

import './signUp.styles.css';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleDisplayNameChange = (e) => {
        setDisplayName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const signUpBtn = () => {
        console.log(displayName,email, password, confirmPassword);
    }
    return (
        <div className='signUpWrapper'>
            <h2> I don't have an account</h2>
             <CustomInput type="" value={displayName} name="displayName" id="displayName" handleChange={handleDisplayNameChange}/>
             <CustomInput type="email" value={email} name="email" id="email" handleChange={handleEmailChange}/>
             <CustomInput type="password" value={password} name="password" id="password" handleChange={handlePasswordChange}/>
             <CustomInput type="password" value={confirmPassword} name="confirmPassword" id="confirmPassword" handleChange={handleConfirmPasswordChange}/>
             <CustomButton onClick={signUpBtn} title="Sign Up"/>
        </div>
    )
}

export default SignUp;