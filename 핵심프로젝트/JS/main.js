// 메인 프로필 버튼
const button__profile = document.querySelector(".button--profile");
// 유저 프로필 창
const user_panel = document.querySelector(".user-panel");
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
const daysInput = document.getElementById('daysInput'); // 선택사항
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
    if (category__list.style.display === "block") {
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

// === Esports Calendar ===
document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.querySelector('.calendar');
    const scheduleBox = document.querySelector('.schedule-box');
    if (!calendarEl || !scheduleBox) return;

    const PAST_DAYS = 12;   // 오늘 기준 과거
    const FUTURE_DAYS = 7;  // 오늘 기준 미래

    // ---- (A) 예시 데이터: 실제 데이터로 교체해 써도 됨 ----
    const scheduleData = {
        "2025-08-01": [
            {
                time: "17:00",
                league: "LoL",
                teams: [
                    { name: "GEN", logo: "#", score: 0 },
                    { name: "KT", logo: "#", score: 0 }
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

    // ---- (B) 유틸/템플릿/렌더 ----
    const ymd = (d) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${dd}`;
    };

    function createDayButton(date) {
        const btn = document.createElement('button');
        btn.className = 'calendar__day';
        btn.dataset.date = ymd(date);
        const dayNum = date.getDate();
        const w = date.toLocaleDateString('en-US', { weekday: 'short' }); // Sun, Mon...
        btn.innerHTML = `${dayNum}<br>${w}`;
        return btn;
    }

    function dateLabel(dateKey) {
        const todayKey = ymd(new Date());
        return dateKey === todayKey
            ? 'today'
            : new Date(dateKey).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', weekday: 'short' });
    }

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

    function renderMatches(dateKey) {
        const list = scheduleData[dateKey] || [];
        scheduleBox.innerHTML = list.length
            ? list.map(m => matchTemplate(dateKey, m)).join('')
            : `<div class="match match--empty">해당 날짜에 경기가 없습니다.</div>`;
    }

    // ---- (C) 스페이서/스크롤 ----
    function updateGutters() {
        const active = calendarEl.querySelector('.calendar__day--highlight');
        const sample = active || calendarEl.querySelector('.calendar__day');
        const itemW = sample ? sample.getBoundingClientRect().width : 100;
        const gutter = Math.max(0, Math.round((calendarEl.clientWidth - itemW) / 2));
        calendarEl.style.setProperty('--gutter', `${gutter}px`);
    }

    function scrollToCenter(target) {
        const left = target.offsetLeft - (calendarEl.clientWidth - target.clientWidth) / 2;
        const max = calendarEl.scrollWidth - calendarEl.clientWidth;
        calendarEl.scrollTo({ left: Math.max(0, Math.min(max, left)), behavior: 'smooth' });
    }

    // ---- (D) 날짜 자동 생성 (+ 좌우 스페이서 추가) ----
    function generateCalendar(past = PAST_DAYS, future = FUTURE_DAYS) {
        calendarEl.innerHTML = '';

        // 좌/우 스페이서(가짜 여백) 추가: 끝 날짜도 중앙으로 올 수 있게
        const leftSpacer = document.createElement('div');
        const rightSpacer = document.createElement('div');
        leftSpacer.className = 'calendar__spacer calendar__spacer--left';
        rightSpacer.className = 'calendar__spacer calendar__spacer--right';
        calendarEl.appendChild(leftSpacer);

        const today = new Date();
        const start = new Date(today); start.setDate(today.getDate() - past);
        const end = new Date(today); end.setDate(today.getDate() + future);

        const frag = document.createDocumentFragment();
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const cur = new Date(d);
            const btn = createDayButton(cur);
            if (ymd(cur) === ymd(today)) btn.classList.add('calendar__day--highlight');
            frag.appendChild(btn);
        }
        calendarEl.appendChild(frag);
        calendarEl.appendChild(rightSpacer);

        updateGutters();

        const active = calendarEl.querySelector('.calendar__day--highlight') || calendarEl.querySelector('.calendar__day');
        if (active) {
            scrollToCenter(active);
            renderMatches(active.dataset.date);
        }
    }

    // 클릭: 가운데 스크롤 + 하이라이트 + 일정 렌더
    calendarEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.calendar__day');
        if (!btn) return;

        // 하이라이트 이동
        calendarEl.querySelectorAll('.calendar__day').forEach(b => b.classList.remove('calendar__day--highlight'));
        btn.classList.add('calendar__day--highlight');

        // 크기가 변한 뒤 계산하도록 다음 프레임에서 실행
        requestAnimationFrame(() => {
            updateGutters();
            scrollToCenter(btn);
        });

        if (typeof renderMatches === 'function') renderMatches(btn.dataset.date);
    });


    // 리사이즈 대응
    window.addEventListener('resize', () => {
        updateGutters();
        const active = calendarEl.querySelector('.calendar__day--highlight');
        if (active) scrollToCenter(active);
    });

    // 실행
    generateCalendar();
});

// 길드 생성 모달
(function () {
    function _open() {
        // ✅ FAB 숨기기
        const fab = document.querySelector('.fab-create-guild');
        if (fab) fab.style.display = 'none';

        const overlay = document.getElementById('Modal');
        if (!overlay) return;

        // 다른 모달 다 닫고, 길드생성만 켜기
        document.querySelectorAll('.modal-step').forEach(el => el.style.display = 'none');
        const gc = document.querySelector('.modal-step--guildcreate');
        if (!gc) return;
        gc.style.display = 'block';

        overlay.style.display = 'flex';
        document.querySelector('.mobile-container')?.classList.add('modal-open');
    }

    function _close() {
        // ✅ FAB 다시 보이기
        const fab = document.querySelector('.fab-create-guild');
        if (fab) fab.style.display = '';

        const overlay = document.getElementById('Modal');
        if (!overlay) return;
        overlay.style.display = 'none';
        document.querySelector('.mobile-container')?.classList.remove('modal-open');
    }

    function _submit(e) {
        e.preventDefault();
        const name = document.getElementById('guildName')?.value.trim() || '';
        const intro = document.getElementById('guildIntro')?.value.trim() || '';

        // TODO: 서버 저장 호출 자리
        // await fetch('/api/guilds', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, intro }) });

        _close();
        alert('임시 길드 생성 완료!\n(서버 연동 시 이 알림을 페이지 전환/섹션 표시로 바꾸세요)');
        return false;
    }

    // 전역 바인딩
    window.openCreateGuild = _open;
    window.closeGuildCreate = _close;
    window.handleQuickCreate = _submit;

    // ESC로 닫기
    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') _close();
    });
})();

// 길드 생성 라인 선택 버튼
document.addEventListener('click', (e) => {
    if (e.target.matches('.line-select-buttons button')) {
        e.target.classList.toggle('active');

        const selected = Array.from(document.querySelectorAll('.line-select-buttons button.active'))
            .map(btn => btn.dataset.line);

        document.getElementById('guildNeed').value = selected.join(', ');
    }
});

// 라인 선택 버튼 초기화
(function () {
    // ✅ 추가: 폼/라인 선택 초기화
    function resetGuildCreateForm() {
        const form = document.querySelector('.modal-step--guildcreate form');
        if (form) form.reset(); // guildName, guildIntro 초기화

        // 라인 버튼 선택 해제
        document.querySelectorAll('.line-select-buttons button.active')
            .forEach(btn => btn.classList.remove('active'));

        // hidden 값 초기화
        const need = document.getElementById('guildNeed');
        if (need) need.value = '';
    }

    function _open() {
        // (선택) 열 때는 이전 선택 유지하고 싶으면 주석, 항상 초기화하고 싶으면 아래 한 줄 활성화
        // resetGuildCreateForm();

        // FAB 숨김 (있다면)
        const fab = document.querySelector('.fab-create-guild');
        if (fab) fab.style.display = 'none';

        const overlay = document.getElementById('Modal');
        if (!overlay) return;

        // 다른 모달 닫고 길드생성만
        document.querySelectorAll('.modal-step').forEach(el => el.style.display = 'none');
        const gc = document.querySelector('.modal-step--guildcreate');
        if (!gc) return;
        gc.style.display = 'block';

        overlay.style.display = 'flex';
        document.querySelector('.mobile-container')?.classList.add('modal-open');
    }

    function _close() {
        // ✅ 취소/닫기 시 초기화
        resetGuildCreateForm();

        // FAB 다시 보이기 (있다면)
        const fab = document.querySelector('.fab-create-guild');
        if (fab) fab.style.display = '';

        const overlay = document.getElementById('Modal');
        if (!overlay) return;
        overlay.style.display = 'none';
        document.querySelector('.mobile-container')?.classList.remove('modal-open');
    }

    function _submit(e) {
        e.preventDefault();
        const name = document.getElementById('guildName')?.value.trim() || '';
        const intro = document.getElementById('guildIntro')?.value.trim() || '';
        const need = document.getElementById('guildNeed')?.value.trim() || '';

        // TODO: 서버 저장 호출
        // await fetch('/api/guilds', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, intro, need }) });

        // ✅ 생성 후 초기화 + 닫기
        resetGuildCreateForm();
        _close();

        alert('임시 길드 생성 완료!');
        return false;
    }

    // 전역 바인딩
    window.openCreateGuild = _open;
    window.closeGuildCreate = _close;
    window.handleQuickCreate = _submit;

    // ESC로 닫기
    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') _close();
    });
})();


// 유저 패널
(function () {
    const panel = document.querySelector('.user-panel');
    const overlay = document.querySelector('.user-panel__overlay');
    const openBtn = document.querySelector('.button--profile');
    const closeBtn = document.querySelector('.button--close');
    const shell = document.querySelector('.mobile-container');

    function openUserPanel() {
        if (!panel) return;
        panel.classList.add('is-open');
        overlay?.classList.add('is-show');
        shell?.classList.add('no-scroll');
    }

    function closeUserPanel() {
        if (!panel) return;
        panel.classList.remove('is-open');
        overlay?.classList.remove('is-show');
        shell?.classList.remove('no-scroll');
    }

    openBtn?.addEventListener('click', openUserPanel);
    closeBtn?.addEventListener('click', closeUserPanel);
    overlay?.addEventListener('click', closeUserPanel);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeUserPanel(); });

    // 전역 필요하면
    window.openUserPanel = openUserPanel;
    window.closeUserPanel = closeUserPanel;
})();

// 유저 패널 x버튼
closeBtn?.addEventListener('click', () => {
    panel.classList.remove('is-open');       // transform으로 슬라이드
    overlay.classList.remove('is-show');     // 오버레이 서서히 사라짐
    shell.classList.remove('no-scroll');     // 스크롤 잠금 해제
});