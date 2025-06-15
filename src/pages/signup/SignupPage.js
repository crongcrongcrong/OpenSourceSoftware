import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

function SignupPage() {
    const [email, setEmail] = useState('');  // 이메일 확인을 저장할 useState 변수
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // 회원가입 버튼을 눌렀을 때 실행될 함수
    const handleSignup = (event) => { // password와 confirmPassword값이 같은지 비교하기 위한 유효성 검사
        event.preventDefault();

        if (password != confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        const userDate = {
            email,
            username,
            password,
        };
        // console.log("회원가입 시도 정보: ", userData);ㄴ
        // 이 부분에 Java 백엔드로 회원가입 요청을 보내는 코드 작성.
    }

    return (
        <div className='signup-container'>
            <h2>회원가입</h2>
            <form onSubmit={handleSignup}> {/*<from> 태그에 onSubmit={gandleSignup}을 연결하여, 폼 안에서 Enter를 누르거나 '가입하기' 버튼을 클릭했을 때 handleSignup함수가 실행*/}
                <div className='input-group'>
                    <input
                        type='email'
                        placeholder='이메일'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                </div>
                <div className='input-group'>
                    <input
                        type='text'
                        placeholder='아이디'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                </div>
                <div className='input-group'>
                    <input
                        type='password'
                        placeholder='비밀번호'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                </div>
                <div className='input-group'>
                    <input
                        type='password'
                        placeholder='비밀번호 확인'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        />
                </div>
                <div>
                    <button type='submit' className='signup-button'>가입하기</button>
                </div>
            </form>
            <div className='links'>
                <p>이미 계정이 있으신가요? <Link to="/login">로그인</Link></p>
            </div>
        </div>
    )
}
// 파일 외부(App.js)에서 SignupPage컴포넌트를 불러올 수 있도록 export
export default SignupPage;