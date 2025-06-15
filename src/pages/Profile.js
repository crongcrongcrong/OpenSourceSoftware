import React from "react";
import './Profile.css';
import userProfileImage from '../assets/Quokka.jpg';

function Profile() {
    const userName = "사용자 이름";

    return (
        <section className="profile-container">
            <h2>내 정보 </h2>
            <div className="profile-content">
                <img src={userProfileImage} alt="프로필 사진" className="profile-ficture" />
                <div className="profile-info">
                    <p className="profile-name">{userName}님</p>
                    <p className="profile-goal">이번 주 목표: 30Km 달리기</p>
                    <button className="edit-profile-button">개인 정보 수정</button>
                </div>
            </div>
        </section>
    )
}

export default Profile;