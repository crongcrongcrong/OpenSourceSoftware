# OpenSourceSoftware - 1단 달려

1. 사전 준비 사항
- Node.js (v18.x LTS 버전 이상을 권장.)
- npm (Node.js 설치 시 자동으로 함께 설치된다.)

2. 설치 및 설정 절차
- 제출된 ZIP 압축 파일의 압축을 해제.
- 터미널(CMD 권장)을 열고, 압축 해제된 프로젝트 폴더로 이동.
- npm install 명령어를 터미널에 입력하여 프로젝트 실행에 필요한 모든 라이브러리 설치.

3. 실행 방법
- 라이브러리가 설치 되면, 터미널에서 npm start를 입력하여 React 개발 서버를 실행.
- 자동으로 기ㅣ본 웹 브라우저가 열리며 https://localhost:3000 주소로 애플리케이션이 실행된다.
  *만약 브라우저가 자동으로 열리지 않으면, 직접 웹 브라우저를 열고 주소창에 위 주소를 직접 입력하여 접속. 

4. 참고사항
- 추천 러닝 코스 기능은 카카오맵 API를 사용한다. 지도가 정상적으로 보이기 위해 카카오 개발자 JavaScript 키가 필요하다. (구현 미완성)

*구현 완료를 가정*
- 프로젝트 폴더 내의 'public' 폴더 안에 있는 'index.html' 파일을 연다.
- 파일의 '<head>' 태그 안에서 아래와 같은 스크립트 태그를 찾아
- <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=JAVASCRIPT_KEY 입력 부분&libraries=services"></script> 
- JavaScript 앱 키를 교체하고 저장하면 지도 기능이 정상적으로 동작.
