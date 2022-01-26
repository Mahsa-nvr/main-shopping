import React, {useState} from 'react';
import CustomInput from '../customInput/CustomInput.component';
import CustomButton from '../customButton/CustomButton.component';

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

    return (
        <div className='signInWrapper'>
        <h2>I already have an account</h2>
          <CustomInput type="email" value={email} name="email" id="Emaill" handleChange={handleEmailChange}/>
          <CustomInput type="password" value={password} name="password" id="passwordd" handleChange={handlePasswordChange}/>
          <div className='btnWrapper'>
            <CustomButton onClick={click} title='Sign In'/>
            <CustomButton onClick={click} color="primary" title='Sign In With Google'/>
          </div>
        </div>
    )
}

export default SignIn;