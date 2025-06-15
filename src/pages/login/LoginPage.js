import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function LoginPage() {
    return (
        <div className="Login-container">
            <h2>로그인</h2>
            <form>
                <div className="input-group">
                    <input type="text" placeholder="이메일 또는 아이디" id="email" required />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="비밀번호" id="password" required />
                </div>
                <Link to="/main">
                    <button type="button" className="login-button">로그인</button>
                </Link>
            </form>
            <div className='links'>
                <Link to='/signup'>회원가입</Link> | <Link to="/findPassword">비밀번호 찾기</Link>
            </div>
        </div>
    );
}

export default LoginPage;