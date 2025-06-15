import React from "react";
import { Link } from "react-router-dom"; 
import './Footer.css';

function Footer() {
    return (
    <footer className="footer-container">
        <p>2025 러닝 지원 플랫폼. ALL rights reserved.</p>
        <div className="footer-links">
            <Link to="#">이용약관</Link> | <Link to="#">개인정보처리방침</Link>
        </div>
    </footer>
    )
}

export default Footer;