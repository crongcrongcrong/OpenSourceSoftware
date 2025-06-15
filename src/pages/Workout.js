import React from "react";
import './Workout.css';
import { useState } from "react";

const workoutPlans = {
   beginner: {
    title: '초보자 입문 (4주)',
    content: [
      '1주차: 1분 달리기, 2분 걷기 (5회 반복)',
      '2주차: 2분 달리기, 2분 걷기 (5회 반복)',
      '3주차: 3분 달리기, 2분 걷기 (4회 반복)',
      '4주차: 5분 달리기, 2분 걷기 (3회 반복)',
    ]
  },
    fiveK: {
    title: '5km 완주',
    content: [
      '준비: 주 3회, 30분 이상 꾸준히 달리기',
      '포인트 훈련 1: 400m 인터벌 (목표 페이스)',
      '포인트 훈련 2: 3km 지속주 (편안한 페이스)',
      '마무리: 대회 1주 전에는 가볍게 조깅만 하기',
    ]
  },
  tenK: {
    title: '10km 완주',
    content: [
      '준비: 주 3-4회, 5km 이상 꾸준히 달리기',
      '포인트 훈련 1: 1km 인터벌 (목표 페이스)',
      '포인트 훈련 2: 7km 지속주 (편안한 페이스)',
      '마무리: 충분한 휴식과 영양 섭취 필수',
    ]
  }
};
function Workout() {
  // 현재 활성화된 탭을 저장할 state ('beginner'를 기본값으로 설정)
  const [activeTab, setActiveTab] = useState('beginner');

  return (
    <section className="workout-container">
      <h2>훈련 방법</h2>
      <div className="workout-tabs">
        {/* Object.keys()를 사용해 탭 버튼들을 동적으로 생성. */}
        {Object.keys(workoutPlans).map(tabKey => (
          <button
            key={tabKey}
            className={activeTab === tabKey ? 'active' : ''}
            onClick={() => setActiveTab(tabKey)}
          >
            {workoutPlans[tabKey].title}
          </button>
        ))}
      </div>
      <div className="workout-content">
        <ul>
          {workoutPlans[activeTab].content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Workout;
