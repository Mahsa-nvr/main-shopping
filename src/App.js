
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth }  from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInSignup from './pages/sign-in-and-sign-up/SignIn&SignUp.component';
import './App.css';

function App(props) {
  const { setCurrentUser } = props;
  const userData = useAuth();
  useEffect(() => {
    setCurrentUser(userData)
  })  

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

const mapStateToProps = user => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
