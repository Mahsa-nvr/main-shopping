import React from 'react';

import SignIn from '../../components/signIn/SignIn.component';
import SignUp from '../../components/signUp/SignUp.component';
import './SignIn&SignUp.styles.css';

const SignInSignup = () => {
    return (
        <div className='SignInSignupWrapper'>
            <div className='signInSection'><SignIn /></div>
            <div className='signUpSection'><SignUp/></div>
        </div>
    )
}

export default SignInSignup;