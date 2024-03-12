import React, { useState } from 'react';
import './Login.css';
import Loginlogo from '../assets/Logo1.png';
import { Link } from 'react-router-dom';

function Login() {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleSignUpClick = () => {
      setIsSignIn(false);
    };

    const handleSignInClick = () => {
      setIsSignIn(true);
    };
    
    return (
      <div className='login-main'>
        <h1 className='login-title'><span className='login-title-x'>ORO</span> Cares for you</h1>
        <div className={`login-wrapper ${isSignIn ? 'animated-signup' : 'animated-signin'}`}>
        <div className="login-form-container sign-in">
          <div className='login-form'>
            <img src={Loginlogo} className='login-center-logo' alt='Loginlogo'/>
            <div className="login-form-group">
              <input type="text" required />
              <i class="fas fa-user"></i>

              <label htmlFor="">username</label>
            </div>
            <div className="login-form-group">
              <input type="password" required />
              <i className="fas fa-lock"></i>
              <label htmlFor="">password</label>
            </div>
            <div className="forgot-pass">
              <a href="#">forgot password?</a>
            </div>
            <button className='bmw'>
              <Link to='/' style={{ color: "#fff"}}>login</Link>
            </button>
            {/* <Link to='/admin' className="bmw">login</Link> */}
            <div className="link">
              <p>Don't have an account?<a href="#" className="signup-link" onClick={handleSignUpClick}> Request AccessKey</a></p>
            </div>
          </div>
        </div>
        <div className="login-form-container sign-up">
          <div className='login-form'>
            <img src={Loginlogo} className='login-center-logo' alt='Loginlogo'/>
            <div className="login-form-group">
              <input type="text" required />
              <i className="fas fa-user"></i>
              <label htmlFor="">username</label>
            </div>
            <div className="login-form-group">
              <input type="password" required />
              <i className="fas fa-lock"></i>
              <label htmlFor="">password</label>
            </div>
            <div className="login-form-group">
              <input type="password" required />
              <i className="fas fa-lock"></i>
              <label htmlFor="">confirm password</label>
            </div>
            <button className='bmw'>
              <Link to='/admin' style={{ color: "#fff"}}>sign up</Link>
            </button>
            {/* <Link to='/admin' className="bmw">sign up</Link> */}
            <div className="link">
              <p>You already have an account?<a href="#" className="signin-link" onClick={handleSignInClick}> Login</a></p>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }

  export default Login;
