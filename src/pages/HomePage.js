import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // CSS 파일을 import 합니다.

function HomePage() {
  return (
    <div className='homepage-container'> 
      <h1>1단 달려</h1>
      <p>초보 러너들을 위한 첫 걸음, 1단 달려에 오신 것을 환영합니다.</p>
      <nav>
        <Link to="/login">
          <button className="login-button">로그인</button>
        </Link>
        <Link to="/signup">
          <button className="signup-button">회원가입</button>
        </Link>
      </nav>
    </div>
  );
}

export default HomePage;