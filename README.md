# 🍽️ 오늘 뭐 먹지? (Random Menu Picker)

> 매일 반복되는 "오늘 뭐 먹지?" 고민을 한 번에 해결해 주는 랜덤 메뉴 추천 웹 서비스입니다.  
> 한식, 중식, 일식, 양식, 분식 등 다채로운 메뉴를 추천하고, 추천된 메뉴의 **내 주변 근처 맛집을 네이버 지도로 즉시 검색**할 수 있습니다.

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Vercel](https://img.shields.io/badge/deployment-Vercel-black.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 🌐 서비스 바로가기
🔗 **[https://random-menu-jet.vercel.app](https://random-menu-jet.vercel.app)**

---

## ✨ 주요 기능

1. **🎲 랜덤 메뉴 추천 & 룰렛 애니메이션**:
   - '메뉴 추천하기' 버튼을 누르면 약 0.8초간 메뉴들이 빠르게 회전하는 룰렛 효과 연출
   - 최종 메뉴가 선정되면 축하 폭죽(Confetti) 효과 발동

2. **🔄 연속 중복 방지 (카드 덱 셔플 알고리즘)**:
   - 버튼을 누를 때마다 이전에 나온 메뉴가 바로 다시 나오지 않고, 목록 내의 메뉴들을 골고루 추천
   - 한 바퀴를 다 돌 때까지 매번 새로운 메뉴 추천 보장

3. **📂 음식 카테고리 필터링**:
   - `전체`, `한식`, `중식`, `일식`, `양식`, `분식/기타` 탭을 지원하여 원하는 종류 내에서만 추천 가능

4. **📍 네이버 지도 & 카카오맵 내 주변 맛집 선택 연동**:
   - 추천받은 메뉴 하단에 **`🟢 네이버 지도로 보기`**와 **`🟡 카카오맵으로 보기`** 선택 버튼 제공
   - 선호하는 지도 앱/웹 서비스를 직접 선택하여 현재 계신 곳 주변의 실시간 맛집 목록 검색 가능

5. **📱 반응형 모던 UI/UX**:
   - 데스크톱, 태블릿, 모바일 스마트폰 어디서나 최적의 비율로 깔끔하게 렌더링

---

## 🛠️ 기술 스택
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Font**: Pretendard Variable
- **Effects**: Canvas Confetti
- **Map Service**: Naver Maps Search URL Scheme
- **Deployment**: Vercel

---

## 📁 디렉토리 구조
```
random-menu/
├── index.html       # 메인 웹페이지 마크업
├── style.css        # 반응형 스타일 및 애니메이션
├── script.js        # 메뉴 데이터 및 추천/지도 연동 로직
├── .gitignore       # Git 제외 설정
└── README.md        # 프로젝트 소개 및 문서
```

---

## 🚀 배포 및 로컬 실행 방법
1. 저장소 클론:
   ```bash
   git clone https://github.com/joeunjin1004/random-menu.git
   ```
2. 실행:
   - `index.html` 파일을 웹 브라우저에서 더블 클릭하여 바로 실행하거나 라이브 서버로 구동합니다.

