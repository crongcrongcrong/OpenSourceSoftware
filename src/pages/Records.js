// src/pages/Records.js를 터미널에서 설치 필요!!

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Records.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Records() {
  // 임시 데이터.
  const [runningRecords, setRunningRecords] = useState([
    { id: 1, date: '2024-11-26', distance: 22.2, time: '2:29:23' },
    { id: 2, date: '2024-12-05', distance: 10.02, time: '57:41' },
    { id: 3, date: '2025-04-01', distance: 11.01, time: '1:09:23' },
  ]);

  // 기록 추가 창(모달)의 표시 여부를 관리하는 state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const chartData = {
    labels: runningRecords.map(record => record.date), // x축 (날짜)
    datasets: [
      {
        label: '러닝 거리 (km)',
        data: runningRecords.map(record => record.distance), // y축 (거리)
        backgroundColor: 'rgba(54, 162, 235, 0.6)',

        barPercentage: 0.5, // 각 막대가 할당된 공간에서 차지하는 너비 비율 (0.5 = 50%)
        categoryPercentage: 0.7, // 각 카테고리(날짜)에서 막대가 차지하는 너비 비율 (0.7 = 70%)
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: '날짜별 러닝 거리' },
    },
  };

  return (
    <section className="records-container">
      <h2>러닝 기록</h2>
      <div className="records-layout">
        {/* 왼쪽: 막대 그래프 */}
        <div className="chart-container">
          <Bar options={chartOptions} data={chartData} />
        </div>

        {/* 오른쪽: 최근 러닝 기록 목록 */}
        <div className="list-container">
          <h3>최근 러닝 기록</h3>
          <ul className="records-list">
            {runningRecords.map(record => (
              <li key={record.id} className="record-item">
                <span className="record-date">{record.date}</span>
                <span className="record-distance">{record.distance} km</span>
                <span className="record-time">{record.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <button className="add-record-button" onClick={() => setIsModalOpen(true)}>
        기록 추가하기
      </button>

      {/* 기록 추가 창 (모달) */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h3>새로운 기록 추가</h3>
            <p>날짜: <input type="date" /></p>
            <p>거리(km): <input type="number" /></p>
            <p>시간: <input type="text" placeholder="예: 55:30" /></p>
            <div className="modal-buttons">
              <button onClick={() => setIsModalOpen(false)}>취소</button>
              <button>저장</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Records;