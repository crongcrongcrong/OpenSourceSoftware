import React, { useState } from 'react'; 
import './HealthInformation.css'; 

function HealthInformation() {
  const injuries = [ // 부상 정보를  배열로 저장
    { 
      id: 1, 
      name: '족저근막염 (Plantar Fasciitis)', 
      cause: '과도한 훈련량, 딱딱하거나 쿠션이 없는 신발 착용, 평발이나 아치가 높은 발 구조 등이 주요 원인입니다.', 
      treatment: '가장 중요한 것은 휴식입니다. 통증이 느껴지면 즉시 달리기를 멈추고, 얼음 찜질과 함께 발바닥과 아킬레스건을 꾸준히 스트레칭해주는 것이 좋습니다.' 
    },
    { 
      id: 2, 
      name: '러너스 니 (Runner\'s Knee)', 
      cause: '무릎의 과사용, 허벅지 근육의 불균형 또는 약화로 인해 슬개골(무릎뼈)이 비정상적으로 움직여 연골에 통증을 유발합니다.', 
      treatment: '휴식과 함께 허벅지 앞뒤 근육을 강화하는 운동이 필수적입니다. 통증이 심할 경우 소염제를 복용하고, 러닝 시 무릎 보호대를 착용하는 것이 도움이 됩니다.' 
    },
    { 
      id: 3, 
      name: '정강이 부목 (Shin Splints)', 
      cause: '딱딱한 지면에서의 반복적인 충격이나 갑작스러운 훈련 강도 증가로 인해 정강이뼈 주변 근육과 조직에 염증이 생기는 질환입니다.', 
      treatment: '운동 강도를 낮추고, 푹신한 신발을 착용해야 합니다. 운동 전후로 정강이 주변을 충분히 스트레칭하고, 통증 부위에 얼음 찜질을 하는 것이 효과적입니다.'
    }
  ];

  // 현재 선택된 부상 항목의 id를 저장할 '상태(state)' 변수를 만듦.
  // 초기값은 null로, 아무것도 선택되지 않음.
  const [selectedInjuryId, setSelectedInjuryId] = useState(null);

  // 부상 이름 클릭 시 실행될 함수.
  const handleInjuryClick = (id) => {
    // 만약 이미 선택된 항목을 다시 클릭 시 선택 해제(null).
    if (selectedInjuryId === id) {
      setSelectedInjuryId(null);
    } else {
      // 다른 항목을 클릭했다면, 해당 id로 선택 상태를 변경.
      setSelectedInjuryId(id);
    }
  };

  return (
    <section className="health-info-container">
      <h2>러닝 부상 정보</h2>
      <div className="injury-list">
        {injuries.map(injury => (
          <div key={injury.id} className="injury-item">
            <h3 onClick={() => handleInjuryClick(injury.id)}>
              {injury.name}
            </h3>
            {/* 선택된 부상(selectedInjuryId)과 현재 항목의 id가 같을 때만 상세 정보를 표시 */}
            {selectedInjuryId === injury.id && (
              <div className="injury-details">
                <h4>원인</h4>
                <p>{injury.cause}</p>
                <h4>대처 방법</h4>
                <p>{injury.treatment}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HealthInformation;