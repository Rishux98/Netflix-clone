import React, { useState } from 'react';
import './App.css';
import backgroundImg from './assets/login_background.png';

import avatar1 from './assets/avatar1.svg';
import avatar2 from './assets/avatar2.svg';
import avatar3 from './assets/avatar3.svg';
import avatar4 from './assets/avatar4.svg';

function App() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleVideoEnd = () => {
    setIsFadingOut(true);
    setTimeout(() => { setIsIntroFinished(true); }, 500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2001/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg>
  );

  const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2001/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
  );

  return (
    <div className="app-container">
      {!isIntroFinished ? (
        <div className={`video-wrapper ${isFadingOut ? 'fade-out' : ''}`}>
          <video autoPlay muted playsInline onEnded={handleVideoEnd} className="full-screen-video">
            <source src="/netflix_animation.mp4" type="video/mp4" />
          </video>
        </div>
      ) : isLoggedIn ? (
        <div className="profile-screen fade-in">
          <header className="navbar profile-nav">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="nav-logo" alt="Netflix" />
          </header>
          
          <main className="profile-container">
            <h1>Who's watching?</h1>
            <div className="profile-grid">
              <div className="profile-item">
                <div className="avatar"><img src={avatar1} alt="Rishav" className="avatar-img" /></div>
                <p>Rishav</p>
              </div>
              <div className="profile-item">
                <div className="avatar"><img src={avatar2} alt="Sayam" className="avatar-img" /></div>
                <p>Sayam</p>
              </div>
              <div className="profile-item">
                <div className="avatar"><img src={avatar3} alt="Kirtan" className="avatar-img" /></div>
                <p>kirtan</p>
              </div>
              <div className="profile-item">
                <div className="avatar"><img src={avatar4} alt="Baby" className="avatar-img" /></div>
                <p>Baby</p>
              </div>
              <div className="profile-item">
                <div className="avatar add"><span>+</span></div>
                <p>Add Profile</p>
              </div>
            </div>
            <button className="manage-btn">Manage Profiles</button>
          </main>
        </div>
      ) : (
        <div 
          className="login-screen fade-in" 
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${backgroundImg})` }}
        >
          <header className="navbar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="nav-logo" alt="Netflix" />
            <div className="nav-right">
              <select className="lang-dropdown">
                <option>English</option>
                <option>हिन्दी</option>
              </select>
              <button className="nav-signin-btn">Sign In</button>
            </div>
          </header>

          <main className="login-content">
            <div className="login-card">
  <h1>Sign In</h1>
  <form onSubmit={handleLogin}>
    <input type="text" placeholder="Email or phone number" className="login-input" required />
    
    <div className="input-container">
      <input 
        type={showPassword ? "text" : "password"} 
        placeholder="Password" 
        className="login-input" 
        required
      />
      <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
      </span>
    </div>

    <button type="submit" className="signin-btn">Sign In</button>
    
    {/* RE-ADDED: Remember me and Need help? */}
    <div className="help-row">
      <div className="remember">
        <input type="checkbox" id="rem" />
        <label htmlFor="rem">Remember me</label>
      </div>
      <a href="#" className="help-link">Need help?</a>
    </div>
  </form>
  
  <div className="card-footer">
    <p>New to Netflix? <a href="#">Sign up now.</a></p>
    <p className="recaptcha-text">
      This page is protected by Google reCAPTCHA to ensure you're not a bot. 
      <a href="#"> Learn more.</a>
    </p>
  </div>
</div>
          </main>

          {/* --- NEW FOOTER SECTION --- */}
          <footer className="login-footer">
            <div className="footer-wrapper">
              <p className="footer-top">Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></p>
              <ul className="footer-links">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Corporate Information</a></li>
              </ul>
        
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;