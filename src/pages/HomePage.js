import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import logoImage from'../assets/logo.png';

function HomePage() {
  return (
    <div className='homepage-container'> 
      <div className='homepage-logo'>
        <img className='logoImage' src={logoImage} alt='1단 달려 로고'></img>
      </div>
      <h1>1단 달려</h1>
      <p>초보 러너들을 위한 첫 걸음, 1단 달려에 오신 것을 환영합니다.</p>
      
      <div className="homepage-actions">
        <Link to="/login">
          <button className="login-button">로그인</button>
        </Link>
        <Link to="/signup">
          <button className="signup-button">회원가입</button>
        </Link>
      </div>

    </div>
  );
}

export default HomePage;