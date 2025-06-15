import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Records from './Records';
import MarathonSchedule from './MarathonSchedule';
import HealthInformation from './HealthInformation'; // HealthInformation import 추가
import './Mainpage.css';
import Workout from './Workout';
import Footer from './Footer';
import RecommendedCourse from './RecommendedCourse';

function MainPage() {
  return (
    <div className='mainpage-container'>
      <Header />
      <main className='main-content'>
        <Profile />
        <Records />
        <MarathonSchedule />
        <HealthInformation />
        <Workout />
        <RecommendedCourse />
      </main>
      <footer className='footer-content'/>
        <Footer />
    </div>
  );
}

export default MainPage;