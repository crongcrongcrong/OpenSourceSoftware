import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css'; 
import logoImage from'../assets/logo.png';

function Header() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleLogout = () => {
    console.log("로그아웃 -> 로그인 페이지로 이동합니다.");
    navigate('/login');
  };

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    console.log("모드 전환 버튼 클릭");
  }

  return (
    <header className='header-container'>
      <div className='logo'>
        <Link to="/main" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img className='logoImage' src={logoImage} alt='1단 달려 로고'></img>
        </Link>
      </div>
      <div className='header-content'>
        <div className='user-action'>
          <p>강재호님</p>
          <button type="button" className='logout-button' onClick={handleLogout}>로그아웃</button>
        </div>
        <div className="mode-toggle">
        <span>🌙 어두운 모드</span>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={isDarkMode} 
            onChange={handleModeToggle} 
          />
          <span className="slider"></span>
        </label>
        </div>  
      </div>
      
    </header>
  );
}

export default Header;