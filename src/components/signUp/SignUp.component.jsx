import React, { useState } from 'react';
import CustomInput from '../customInput/CustomInput.component';
import CustomButton from '../customButton/CustomButton.component';
import { logout, signup, useAuth } from '../../firebase/firebase.utils';

import './signUp.styles.css';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const currentUser = useAuth();

    const handleDisplayNameChange = (e) => {
        setDisplayName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    async function  signUpBtn() {
      try {
        await  signup(email,password, displayName )
      } catch {
          console.log('you create this account');
      }
    }

    async function logOutBtn() {
      try {
        await logout();
       } catch {
        console.log('error in log out')
       }
    }

    console.log('currentUser', currentUser);
    return (
        <div className='signUpWrapper'>
            <h2> I don't have an account</h2>
            <div> currently logged in : { currentUser?.email }</div>
             <CustomInput type="" value={displayName} name="displayName" id="displayName" handleChange={handleDisplayNameChange}/>
             <CustomInput type="email" value={email} name="email" id="email" handleChange={handleEmailChange}/>
             <CustomInput type="password" value={password} name="password" id="password" handleChange={handlePasswordChange}/>
            
             <CustomButton onClick={signUpBtn} title="Sign Up"/>
             <CustomButton onClick={logOutBtn} title="log Out"/>
        </div>
    )
}

export default SignUp;