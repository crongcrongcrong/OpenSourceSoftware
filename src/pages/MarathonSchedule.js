import React from 'react';
import './MarathonSchedule.css';

function MarathonSchedule() {
  // 임시 데이터
  const schedules = [
    { id: 1, name: '대구 국제 마라톤', date: '2026-xx-xx', target: 'https://daegu.go.kr/daegumarathon/'   },
    { id: 2, name: '춘천 마라톤', date: '2025-10-26', target: 'https://www.chuncheonmarathon.com/' },
    { id: 3, name: '서울 마라톤', date: '2026-xx-xx', target: 'https://seoul-marathon.com/'  },
  ];

  return (
    <section className="schedule-container">
      <h2>마라톤 일정</h2>
      <div className="schedule-list">
        {schedules.map(schedule => (
          <div key={schedule.id} className="schedule-item">
            <div className="schedule-info">
              <h3>{schedule.name}</h3>
              <p>일시: {schedule.date}</p>
            </div>
            <a href={schedule.target} target="_blank" rel="noopener noreferrer" className="schedule-link">
              상세보기
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarathonSchedule;