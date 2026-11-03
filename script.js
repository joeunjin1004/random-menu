// 풍부한 메뉴 데이터 목록 (메뉴와 100% 일치하는 실제 음식 사진 연동)
const menuList = [
  // 한식
  {
    name: "김치찌개",
    category: "한식",
    icon: "🍲",
    image: "images/kimchi-jjigae.jpg",
    desc: "칼칼하고 깊은 국물에 밥 한 공기 뚝딱!"
  },
  {
    name: "된장찌개",
    category: "한식",
    icon: "🥘",
    image: "images/doenjang-jjigae.jpg",
    desc: "구수한 고향의 맛, 든든한 찌개 백반!"
  },
  {
    name: "제육볶음",
    category: "한식",
    icon: "🥩",
    image: "images/jeyuk-bokkeum.jpg",
    desc: "매콤달콤 불맛 가득한 밥도둑 1등 공신!"
  },
  {
    name: "비빔밥",
    category: "한식",
    icon: "🥗",
    image: "images/bibimbap.jpg",
    desc: "알록달록 신선한 나물과 매콤한 고추장의 조화!"
  },
  {
    name: "삼겹살",
    category: "한식",
    icon: "🥓",
    image: "images/samgyeopsal.jpg",
    desc: "지글지글 구워 먹는 기름진 행복!"
  },
  {
    name: "순두부찌개",
    category: "한식",
    icon: "🍲",
    image: "images/sundubu-jjigae.jpg",
    desc: "몽글몽글 부드러운 순두부와 얼큰한 국물!"
  },
  {
    name: "갈비탕",
    category: "한식",
    icon: "🥣",
    image: "images/galbitang.jpg",
    desc: "맑고 진한 고기 국물로 원기 회복!"
  },
  {
    name: "닭볶음탕",
    category: "한식",
    icon: "🍗",
    image: "images/dakbokkeumtang.jpg",
    desc: "포슬포슬 감자와 매콤달콤 닭고기!"
  },
  {
    name: "소불고기",
    category: "한식",
    icon: "🥩",
    image: "images/bulgogi.jpg",
    desc: "달콤 짭조름한 양념에 밥 비벼 먹으면 꿀맛!"
  },
  {
    name: "국밥",
    category: "한식",
    icon: "🥣",
    image: "images/gukbap.jpg",
    desc: "뜨끈하고 든든한 국밥 한 그릇이면 속이 풀려요!"
  },

  // 중식
  {
    name: "짜장면",
    category: "중식",
    icon: "🥢",
    image: "images/jajangmyeon.jpg",
    desc: "달콤 짭짤한 춘장의 영원한 국민 메뉴!"
  },
  {
    name: "짬뽕",
    category: "중식",
    icon: "🍜",
    image: "images/jjambbong.jpg",
    desc: "얼큰하고 시원한 해물 불맛 국물!"
  },
  {
    name: "탕수육",
    category: "중식",
    icon: "🥟",
    image: "images/tangsuyuk.jpg",
    desc: "바삭바삭 튀김과 달콤 새콤한 소스!"
  },
  {
    name: "마라탕",
    category: "중식",
    icon: "🌶️",
    image: "images/malatang.jpg",
    desc: "얼얼하고 중독성 넘치는 알싸한 국물!"
  },
  {
    name: "볶음밥",
    category: "중식",
    icon: "🍳",
    image: "images/bokkeumbap.jpg",
    desc: "고슬고슬 볶아 짜장 소스와 곁들이면 최고!"
  },
  {
    name: "유린기",
    category: "중식",
    icon: "🍗",
    image: "images/yuringi.jpg",
    desc: "바삭한 닭튀김에 상큼한 간장 고추 소스!"
  },

  // 일식
  {
    name: "초밥",
    category: "일식",
    icon: "🍣",
    image: "images/sushi.jpg",
    desc: "신선하고 깔끔한 바다의 미식!"
  },
  {
    name: "돈까스",
    category: "일식",
    icon: "🍱",
    image: "images/tonkatsu.jpg",
    desc: "겉은 바삭 속은 촉촉한 황금빛 튀김!"
  },
  {
    name: "라멘",
    category: "일식",
    icon: "🍜",
    image: "images/ramen.jpg",
    desc: "진하고 깊은 차슈 국물에 쫄깃한 면발!"
  },
  {
    name: "규동",
    category: "일식",
    icon: "🍚",
    image: "images/gyudon.jpg",
    desc: "달콤 짭조름한 소고기 덮밥 한 그릇!"
  },
  {
    name: "연어덮밥(사케동)",
    category: "일식",
    icon: "🐟",
    image: "images/sakedon.jpg",
    desc: "입에서 사르르 녹는 부드러운 연어의 풍미!"
  },
  {
    name: "우동 & 튀김",
    category: "일식",
    icon: "🍤",
    image: "images/udon.jpg",
    desc: "오동통한 면발에 따뜻한 국물과 바삭한 튀김!"
  },

  // 양식
  {
    name: "파스타",
    category: "양식",
    icon: "🍝",
    image: "images/pasta.jpg",
    desc: "토마토, 크림, 오일 취향대로 즐기는 맛!"
  },
  {
    name: "화덕 피자",
    category: "양식",
    icon: "🍕",
    image: "images/pizza.jpg",
    desc: "치즈가 쭉쭉 늘어나는 고소한 피자!"
  },
  {
    name: "스테이크",
    category: "양식",
    icon: "🥩",
    image: "images/steak.jpg",
    desc: "육즙이 팡팡 터지는 고급스러운 한 끼!"
  },
  {
    name: "리조또",
    category: "양식",
    icon: "🍛",
    image: "images/risotto.jpg",
    desc: "부드럽고 크리미한 쌀알의 풍부한 맛!"
  },
  {
    name: "수제 버거",
    category: "양식",
    icon: "🍔",
    image: "images/burger.jpg",
    desc: "두툼한 패티와 신선한 야채의 앙상블!"
  },

  // 분식 / 패스트푸드
  {
    name: "떡볶이",
    category: "분식/패스트푸드",
    icon: "🍢",
    image: "images/tteokbokki.jpg",
    desc: "매콤달콤 쫄깃쫄깃 영원한 소울푸드!"
  },
  {
    name: "김밥 & 라면",
    category: "분식/패스트푸드",
    icon: "🍙",
    image: "images/gimbap.jpg",
    desc: "언제 먹어도 실패 없는 환상의 꿀조합!"
  },
  {
    name: "치킨",
    category: "분식/패스트푸드",
    icon: "🍗",
    image: "images/chicken.jpg",
    desc: "바삭한 프라이드와 달콤한 양념의 축제!"
  },
  {
    name: "샌드위치 / 서브웨이",
    category: "분식/패스트푸드",
    icon: "🥪",
    image: "images/sandwich.jpg",
    desc: "신선하고 가볍지만 든든한 건강식!"
  },
  {
    name: "베트남 쌀국수",
    category: "분식/패스트푸드",
    icon: "🍜",
    image: "images/pho.jpg",
    desc: "진한 양지 육수에 향긋한 숙주와 고수!"
  },
  {
    name: "멕시칸 타코",
    category: "분식/패스트푸드",
    icon: "🌮",
    image: "images/taco.jpg",
    desc: "풍성한 고기와 살사 소스의 이국적인 매력!"
  }
];

// DOM 요소 참조
const recommendBtn = document.getElementById("recommendBtn");
const displayBox = document.getElementById("displayBox");
const menuIcon = document.getElementById("menuIcon");
const menuImage = document.getElementById("menuImage");
const menuTag = document.getElementById("menuTag");
const menuName = document.getElementById("menuName");
const menuDesc = document.getElementById("menuDesc");
const tabBtns = document.querySelectorAll(".tab-btn");
const mapChoiceBox = document.getElementById("mapChoiceBox");
const naverMapLink = document.getElementById("naverMapLink");
const kakaoMapLink = document.getElementById("kakaoMapLink");

let currentCategory = "all";
let isSpinning = false;
let lastPickedMenuName = null; // 직전에 추천된 메뉴 이름 기록

// 이미지 로드 실패 시 이모지로 자동 폴백
menuImage.onerror = () => {
  menuImage.style.display = "none";
  menuIcon.style.display = "block";
};

// 카테고리별 아직 추천되지 않은 남은 메뉴 풀 관리
const remainingPools = {};

function initPool(category) {
  const baseList = category === "all"
    ? menuList
    : menuList.filter(item => item.category === category);
  remainingPools[category] = [...baseList];
}

// 다음 추천할 메뉴 가져오기 (매번 다른 메뉴 보장)
function getNextRandomMenu(category) {
  if (!remainingPools[category] || remainingPools[category].length === 0) {
    initPool(category);
  }

  let pool = remainingPools[category];

  let candidatePool = pool;
  if (pool.length > 1 && lastPickedMenuName) {
    const withoutLast = pool.filter(item => item.name !== lastPickedMenuName);
    if (withoutLast.length > 0) {
      candidatePool = withoutLast;
    }
  }

  const randomIndex = Math.floor(Math.random() * candidatePool.length);
  const chosen = candidatePool[randomIndex];

  const actualIndex = pool.findIndex(item => item.name === chosen.name);
  if (actualIndex > -1) {
    pool.splice(actualIndex, 1);
  }

  lastPickedMenuName = chosen.name;
  return chosen;
}

// 카테고리 탭 클릭 이벤트
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (isSpinning) return;
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
  });
});

// 메뉴 추천 로직
function recommendMenu() {
  if (isSpinning) return;

  const currentList = currentCategory === "all"
    ? menuList
    : menuList.filter(item => item.category === currentCategory);

  if (currentList.length === 0) return;

  isSpinning = true;
  recommendBtn.disabled = true;
  recommendBtn.querySelector(".btn-text").textContent = "메뉴 고르는 중...";

  displayBox.classList.remove("highlight");
  menuTag.style.display = "inline-block";
  mapChoiceBox.style.display = "none";

  // 회전 중에는 음식 사진을 숨기고 룰렛 이모지를 표시
  menuImage.style.display = "none";
  menuIcon.style.display = "block";

  // 이번에 최종으로 보여줄 메뉴 결정 (중복 방지 알고리즘 적용)
  const finalChosenMenu = getNextRandomMenu(currentCategory);

  // 룰렛 애니메이션 연출 (약 0.8초)
  let spinCount = 0;
  const maxSpins = 16;
  const spinInterval = setInterval(() => {
    const randomTemp = currentList[Math.floor(Math.random() * currentList.length)];
    menuIcon.textContent = randomTemp.icon;
    menuName.textContent = randomTemp.name;
    menuTag.textContent = randomTemp.category;
    menuDesc.textContent = "두구두구... 오늘의 운명은?";
    spinCount++;

    if (spinCount >= maxSpins) {
      clearInterval(spinInterval);
      finishSelection(finalChosenMenu);
    }
  }, 50);
}

// 최종 메뉴 선택 및 완료 효과
function finishSelection(chosen) {
  // 실제 음식 사진 세팅 및 표시
  if (chosen.image) {
    menuImage.src = chosen.image;
    menuImage.alt = chosen.name;
    menuImage.style.display = "block";
    menuIcon.style.display = "none";
  } else {
    menuIcon.textContent = chosen.icon;
    menuIcon.style.display = "block";
    menuImage.style.display = "none";
  }

  menuName.textContent = chosen.name;
  menuTag.textContent = chosen.category;
  menuDesc.textContent = chosen.desc;

  // 네이버 지도 및 카카오맵 내 주변 검색 링크 세팅
  const query = encodeURIComponent(`내 주변 ${chosen.name} 맛집`);
  naverMapLink.href = `https://map.naver.com/p/search/${query}`;
  kakaoMapLink.href = `https://map.kakao.com/link/search/${query}`;
  mapChoiceBox.style.display = "block";

  displayBox.classList.add("highlight");
  recommendBtn.disabled = false;
  recommendBtn.querySelector(".btn-text").textContent = "다른 메뉴 추천받기";

  // 화려한 축하 컨페티 효과 실행
  if (typeof confetti === "function") {
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.65 }
    });
  }

  isSpinning = false;
}

// 이벤트 리스너 등록
recommendBtn.addEventListener("click", recommendMenu);
