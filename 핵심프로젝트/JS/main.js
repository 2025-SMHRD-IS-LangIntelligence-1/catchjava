// 메인 프로필 버튼
const button__profile = document.querySelector(".button--profile"); 
// 유저 프로필 창
const user_panel = document.querySelector(".user-panel");
// 유저 프로필 - x 버튼
const button__close = document.querySelector(".button--close");
// 메인 - 홈, 길드 탭
const btn_home = document.querySelector(".btn-home");
const btn_guild = document.querySelector(".btn-guild");
// 메인 섹션
const main_section = document.querySelector(".main-section");
// 메인 섹션 - esports 경기일정
const esports_schedule = document.querySelector(".esports-schedule");
// 메인 섹션 - esports 뉴스
const esports_news = document.querySelector(".esports-news");
// 길드 섹션
const guild_section = document.querySelector(".guild-section");
// 길드 섹션 - 길드 프로필 작성
const game_profile_intro = document.querySelector(".game-profile-intro");
// 길드 섹션 - 길드 프로필 작성 - 라인 선택 버튼
const input_line = document.querySelector(".input-line");
// 길드 섹션 - 길드 프로필 작성 - 시간 선택 버튼
const input_time = document.querySelector(".input-time");
// 길드 섹션 - 길드 찾기 페이지(길드 없을 때)
const guild_find = document.querySelector(".guild-find");
// 길드 섹션 - 길드 페이지(길드 있을 때)
const guild_section__have = document.querySelector(".guild-section--have");
// 길드 섹션 - 모달
const Modal = document.getElementById("Modal");
// 길드 섹션 - 모달 - 메인/서브 라인 선택
const modal_step__main = document.querySelector(".modal-step--main");
const modal_step__sub = document.querySelector(".modal-step--sub");
// 길드 섹션 - 모달 - 라인 선택 버튼들
const mainpositionButtons = document.querySelectorAll(".main-option");
const subpositionButtons = document.querySelectorAll(".sub-option");
// 길드 섹션 - 모달 - 서브 포지션 스킵 버튼
const skip = document.querySelector(".skip");
// 길드 섹션 - 모달 - 시간 선택 모달
const modal_step__time = document.querySelector(".modal-step--time");
// 길드 섹션 - 모달 - 시간 선택 버튼들
const dayButtons = document.querySelectorAll(".day-option");
// 길드 섹션 - 모달 - 시간 선택(취소, 저장 버튼)
const btn_cancel = document.querySelector(".btn-cancel");
const btn_save = document.querySelector(".btn-save");
// 요일 선택 값을 서버로 보내는 input
const daysInput  = document.getElementById('daysInput'); // 선택사항
// 길드 섹션 - 모달 - 저장 버튼
const save_btn = document.querySelector(".save-btn");
// 길드 매칭 버튼
const matching_button = document.querySelector(".matching-button");
// 로딩 오버레이
const loading_overlay = document.querySelector(".loading-overlay");
// esports 경기 일정 - 리그 버튼
const category__toggle = document.querySelector(".category__toggle");
// 리그 버튼 리스트
const category__list = document.querySelector(".category__list");
// 길드 가입 버튼
const sign_up_btn = document.querySelector(".sign-up-btn");



// 프로필 아이콘 클릭 시 프로필 창
button__profile.addEventListener("click", () => {
    user_panel.style.display = "block";
});

// 프로필 창 x버튼 누르면 프로필 창 닫기
button__close.addEventListener("click", () => {
    user_panel.style.display = "none";
});

// 홈 버튼 클릭 시
btn_home.addEventListener("click", () => {
    main_section.style.display = "block";
    esports_schedule.style.display = "block";
    esports_news.style.display = "block";
    guild_section.style.display = "none";
    game_profile_intro.style.display = "none";
    guild_find.style.display = "none";
    guild_section__have.style.display = "none";
});

// esports 경기 일정 - 리그 버튼
category__toggle.addEventListener("click", () => {
    if(category__list.style.display === "block") {
        category__list.style.display = "none";
    } else {
        category__list.style.display = "block";
    }
});

// 길드 버튼 클릭 시
// 길드 페이지는 로그인 후 첫 들어갔을 때, 게임 프로필 입력창 뜨고
// 게임 입력 창 작성 후 길드에 안들어가있으면 길드 찾기 창이 뜨고
// 길드에 들어가 있으면 길드 페이지가 뜸
btn_guild.addEventListener("click", () => {
    main_section.style.display = "none";
    esports_schedule.style.display = "none";
    esports_news.style.display = "none";
    guild_section.style.display = "block";
    game_profile_intro.style.display = "block";
    guild_find.style.display = "none";
    guild_section__have.style.display = "none";
});

// 게임 프로필 라인 선택 버튼 클릭 시
input_line.addEventListener("click", () => {
    Modal.style.display = "flex";
    modal_step__main.style.display = "block";
});

// 메인 포지션
mainpositionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const mainValue = button.dataset.value;

        // 올라운더 선택 시 -> 부포지션 건너뜀
        if (mainValue === "올라운더") {
            Modal.style.display = "none"
            modal_step__main.style.display = "none";
            modal_step__sub.style.display = "none";
        } else {
            // 나머지 버튼 클릭 시 -> 부포지션 모달 열기
            modal_step__main.style.display = "none";
            modal_step__sub.style.display = "block";
        }
    });
});

// 서브 포지션
subpositionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const subValue = button.dataset.value;
        Modal.style.display = "none";
        modal_step__sub.style.display = "none";
    })
})

// 스킵 버튼
skip.addEventListener("click", () => {
    Modal.style.display = "none";
    modal_step__sub.style.display = "none";
})

// 시간 선택 버튼
input_time.addEventListener("click", () => {
    Modal.style.display = "flex";
    modal_step__time.style.display = "block";
})

// 시간 선택 취소 버튼
btn_cancel.addEventListener("click", () => {
    Modal.style.display = "none";
    modal_step__time.style.display = "none";
})

// 시간 선택 저장 버튼
btn_save.addEventListener("click", () => {
    Modal.style.display = "none";
    modal_step__time.style.display = "none";
})

// 요일 버튼 눌렀을 때 
function updateDaysInput() {
  if (!daysInput) return;
  const selectedDays = [...dayButtons]
    .filter(b => b.getAttribute('aria-pressed') === 'true')
    .map(b => b.dataset.day);
  daysInput.value = selectedDays.join(',');
}

dayButtons.forEach(btn => {
  // 접근성: 토글 버튼으로 선언
  btn.setAttribute('role', 'button');
  btn.setAttribute('aria-pressed', 'false');

  btn.addEventListener('click', () => {
    const isPressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!isPressed));
    btn.classList.toggle('selected', !isPressed);
    updateDaysInput();
  });
});

// 요일 버튼 취소, 저장 누르면 초기화
const cancelBtn = document.querySelector('.modal-actions .btn-cancel');
const saveBtn = document.querySelector('.modal-actions .btn-save');

function resetDays() {
  dayButtons.forEach(b => {
    b.setAttribute('aria-pressed', 'false');
    b.classList.remove('selected');
  });
  if (daysInput) daysInput.value = '';
}

cancelBtn?.addEventListener('click', (e) => {
  e.preventDefault();        // form 제출 막기 (필요 시)
  resetDays();
  // TODO: 모달 닫기 함수가 있으면 여기서 호출
});

saveBtn?.addEventListener('click', (e) => {
  e.preventDefault();        // form 제출 직접 처리할 거면 유지
  // TODO: 저장 로직(폼 submit or fetch) 수행
  resetDays();
  // TODO: 모달 닫기
});

// 길드 프로필 저장 버튼
save_btn.addEventListener("click", () => {
    game_profile_intro.style.display = "none";
    guild_find.style.display = "block";
});

// 길드 매칭 버튼 클릭 시 로딩 오버레이
// 매칭 완료되면 매칭 수락 창
matching_button.addEventListener("click", () => {
    loading_overlay.style.display = "flex";
});

sign_up_btn.addEventListener("click", () => {
    guild_find.style.display = "none";
    guild_section__have.style.display = "block";
})

// esports 캘린더 
document.addEventListener('DOMContentLoaded', () => {
  const calendar = document.querySelector('.calendar');
  const dayButtons = calendar.querySelectorAll('.calendar__day'); // 이미 있는 버튼들
  const scheduleBox = document.querySelector('.schedule-box');

  // [A] 날짜별 경기 데이터 (예시)
  const scheduleData = {
    "2025-08-01": [
      {
        time: "17:00",
        league: "LoL",
        teams: [
          { name: "GEN", logo: "#", score: 0 },
          { name: "KT",  logo: "#", score: 0 }
        ],
        status: "upcoming"
      }
    ],
    "2025-08-02": [
      {
        time: "18:00",
        league: "LoL",
        teams: [
          { name: "T1", logo: "#", score: 0 },
          { name: "DK", logo: "#", score: 0 }
        ],
        status: "upcoming"
      }
    ],
    "2025-08-03": []
  };

  // [B] 버튼 순서에 맞춰 날짜키 매핑 (HTML 건드리기 싫으면 이렇게)
  //   → 화면에 보이는 29/Tue, 30/Wed... 순서에 대응시켜주세요.
  const dateKeys = [
    "2025-07-29",
    "2025-07-30",
    "2025-07-31",
    "2025-08-01",
    "2025-08-02",
    "2025-08-03",
    "2025-08-04"
  ];
  dayButtons.forEach((btn, i) => {
    btn.dataset.date = dateKeys[i]; // HTML 수정 없이 data-date 주입
  });

  // 유틸: 오늘/그외 라벨
  const todayKey = new Date().toISOString().split('T')[0];
  const dateLabel = (dateKey) =>
    dateKey === todayKey
      ? 'today'
      : new Date(dateKey).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', weekday: 'short' });

  // [C] 경기 카드 템플릿
  function matchTemplate(dateKey, m) {
    return `
      <div class="match">
        <div class="match-header">
          <div class="match__time">${dateLabel(dateKey)}, ${m.time}</div>
          <button class="match__result-button">
            ${m.status === 'finished' ? '상세보기' : '경기결과'}
          </button>
        </div>
        <div class="match__content">
          <div class="team">
            <div class="team__logo"><img src="${m.teams[0].logo}" alt="${m.teams[0].name} 로고"></div>
            <div class="team__name">${m.teams[0].name}</div>
            <div class="team__score"><span>${m.teams[0].score ?? '-'}</span></div>
          </div>
          <div class="vs">vs</div>
          <div class="team">
            <div class="team__logo"><img src="${m.teams[1].logo}" alt="${m.teams[1].name} 로고"></div>
            <div class="team__name">${m.teams[1].name}</div>
            <div class="team__score"><span>${m.teams[1].score ?? '-'}</span></div>
          </div>
        </div>
      </div>`;
  }

  // [D] 렌더 함수
  function renderMatches(dateKey) {
    const list = scheduleData[dateKey] || [];
    scheduleBox.innerHTML = list.length
      ? list.map(m => matchTemplate(dateKey, m)).join('')
      : `<div class="match match--empty">해당 날짜에 경기가 없습니다.</div>`;
  }

  // [E] 하이라이트 이동
  function setActiveDay(btn) {
    dayButtons.forEach(b => b.classList.remove('calendar__day--highlight'));
    btn.classList.add('calendar__day--highlight');
  }

  // [F] 클릭 이벤트: 하이라이트 + 렌더
  calendar.addEventListener('click', (e) => {
    const btn = e.target.closest('.calendar__day');
    if (!btn) return;
    setActiveDay(btn);
    renderMatches(btn.dataset.date);
  });

  // [G] 초기 렌더: 기존 하이라이트 버튼 또는 첫 버튼
  const initialBtn = calendar.querySelector('.calendar__day--highlight') || dayButtons[0];
  const initialDate = initialBtn?.dataset.date || dateKeys[0];
  if (initialBtn) setActiveDay(initialBtn);
  renderMatches(initialDate);
});
