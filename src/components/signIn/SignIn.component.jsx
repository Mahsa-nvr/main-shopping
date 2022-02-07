import React, {useState} from 'react';
import CustomInput from '../customInput/CustomInput.component';
import CustomButton from '../customButton/CustomButton.component';

import { auth } from '../../firebase/firebase.utils';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import './signIn.styles.css';

const SignIn = () => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
const click = () => {
  console.log(password , email);
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log('result', result);
  })
  .catch((err) => {
    console.log(err)
  })
}

    return (
        <div className='signInWrapper'>
        <h2>I already have an account</h2>
          <CustomInput type="email" value={email} name="email" id="Emaill" handleChange={handleEmailChange}/>
          <CustomInput type="password" value={password} name="password" id="passwordd" handleChange={handlePasswordChange}/>
          <div className='btnWrapper'>
            <CustomButton onClick={click} title='Sign In'/>
            <CustomButton onClick={signInWithGoogle} color="primary" title='Sign In With Google'/>
          </div>
        </div>
    )
}

export default SignIn;