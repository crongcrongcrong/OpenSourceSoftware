// npm install react-kakao-maps-sdk를 터미널에서 설치 (카카오 맵 라이브러리) -> public/index.html파일 수정 필요!!
// developers.kakao.com에 가입하고 애플리케이션 등록을 해야 키가 발급됨
// 
import React from 'react';
// react-kakao-maps-sdk에서 Map과 MapMarker를 import.
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import './RecommendedCourse..css';

function RecommendedCourse() {

  return (
    <section className="course-container">
      <h2>추천 러닝 코스</h2>
      <div className="course-map">
         
      </div>
    </section>
  );
}

export default RecommendedCourse;