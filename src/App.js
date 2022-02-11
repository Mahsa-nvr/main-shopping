
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInSignup from './pages/sign-in-and-sign-up/SignIn&SignUp.component';
import { auth } from '../src/firebase/firebase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentUser]= useState(null);
  const unsubscribe = null;

  useEffect(() => {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log('user in change firebase' , user);
    })
    return () => {
      unsubscribe()
  };
  }, [])

  useEffect(() => {
    return (
      unsubscribe()
    )   
  }, []);

  console.log('unsubscribe', unsubscribe);
  return (
    <div className='App'>
     
    <Router>
    <Header />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/signIn' element={<SignInSignup/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
