document.addEventListener("DOMContentLoaded", () => {
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
    });
});

// === Esports Calendar ===
document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.querySelector('.calendar');
    const scheduleBox = document.querySelector('.schedule-box');
    if (!calendarEl || !scheduleBox) return;

    // 보이는 날짜 범위 조절
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

    // 날짜 버튼 하나 생성해서 data-date에 키 저장
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

    // 경기 카드 HTML 하나 만들기
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

    // renderMatches(dataKey): scheduleData[dataKey]를 읽어 .schedule-box에 뿌림 
    // -> 데이터가 없으면 "경기가 없습니다" 메시지 표시
    function renderMatches(dateKey) {
        const list = scheduleData[dateKey] || [];
        scheduleBox.innerHTML = list.length
            ? list.map(m => matchTemplate(dateKey, m)).join('')
            : `<div class="match match--empty">해당 날짜에 경기가 없습니다.</div>`;
    }

    // ---- (C) 스페이서/스크롤 ----
    // 리스트 양쪽에 보이지 않는 스페이서(가짜 여백)을 넣고 그 폭을 --gutter CSS 변수로 전달
    function updateGutters() {
        const active = calendarEl.querySelector('.calendar__day--highlight');
        const sample = active || calendarEl.querySelector('.calendar__day');
        const itemW = sample ? sample.getBoundingClientRect().width : 100;
        const gutter = Math.max(0, Math.round((calendarEl.clientWidth - itemW) / 2));
        calendarEl.style.setProperty('--gutter', `${gutter}px`);
    }

    // 중앙으로 스크롤
    function scrollToCenter(target) {
        const left = target.offsetLeft - (calendarEl.clientWidth - target.clientWidth) / 2;
        const max = calendarEl.scrollWidth - calendarEl.clientWidth;
        calendarEl.scrollTo({ left: Math.max(0, Math.min(max, left)), behavior: 'smooth' });
    }

    // 달력 만들기(초기 진입)
    // ---- (D) 날짜 자동 생성 (+ 좌우 스페이서 추가) ----
    function generateCalendar(past = PAST_DAYS, future = FUTURE_DAYS) {
        calendarEl.innerHTML = '';

        // 좌/우 스페이서(가짜 여백) 추가: 끝 날짜도 중앙으로 올 수 있게
        const leftSpacer = document.createElement('div');
        const rightSpacer = document.createElement('div');
        leftSpacer.className = 'calendar__spacer calendar__spacer--left';
        rightSpacer.className = 'calendar__spacer calendar__spacer--right';
        calendarEl.appendChild(leftSpacer);

        // 날짜 버튼들 생성(오늘 +- 범위)
        const today = new Date();
        const start = new Date(today); start.setDate(today.getDate() - past);
        const end = new Date(today); end.setDate(today.getDate() + future);

        const frag = document.createDocumentFragment();
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const cur = new Date(d);
            const btn = createDayButton(cur);
            if (ymd(cur) === ymd(today)) btn.classList.add('calendar__day--highlight'); // 오늘 표시
            frag.appendChild(btn);
        }
        calendarEl.appendChild(frag);
        calendarEl.appendChild(rightSpacer);

        // 여백 계산 -> 오늘을 중앙으로 -> 오늘 경기 렌더
        updateGutters();

        const active = calendarEl.querySelector('.calendar__day--highlight') || calendarEl.querySelector('.calendar__day');
        if (active) {
            scrollToCenter(active);
            renderMatches(active.dataset.date);
        }
    }

    // 클릭했을 때의 흐름
    // 클릭: 가운데 스크롤 + 하이라이트 + 일정 렌더
    calendarEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.calendar__day');
        if (!btn) return;

        // 하이라이트 이동
        calendarEl.querySelectorAll('.calendar__day').forEach(b => b.classList.remove('calendar__day--highlight'));
        btn.classList.add('calendar__day--highlight');

        // 크기 변경 -> 다음 프레임에서 여백 재계산 후 중앙 이동
        requestAnimationFrame(() => {
            updateGutters();
            scrollToCenter(btn);
        });

        if (typeof renderMatches === 'function') renderMatches(btn.dataset.date);
    });


    // 리사이즈 대응
    // 화면 폭이 바뀌면 스페이서 폭과 스크롤 위치를 다시 맞춤
    window.addEventListener('resize', () => {
        updateGutters();
        const active = calendarEl.querySelector('.calendar__day--highlight');
        if (active) scrollToCenter(active);
    });

    // 실행
    generateCalendar();
});

document.addEventListener("DOMContentLoaded", () => {
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
});




// 여기부터 추가

// 길드원 검색 모달
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('inviteOverlay');
    const input = document.getElementById('inviteSearch');
    const list = document.querySelector('.invite-list');
    const empty = document.querySelector('.empty');
    const info = document.getElementById('inviteResultInfo');

    // ===== 모달 열기 =====
    function openInvite() {
        overlay.classList.add('show');
        overlay.removeAttribute('aria-hidden');
        input.focus();
        searchMembers(''); // 모달 열릴 때 기본 목록 로드
    }

    // ===== 모달 닫기 =====
    function closeInvite() {
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden', 'true');
    }

    // ===== 이벤트 바인딩 =====
    document.addEventListener('click', (e) => {
        // 초대 버튼 클릭 시
        if (e.target.closest('.guild-members-invite-btn')) {
            openInvite();
        }
        // 닫기 버튼 또는 오버레이 클릭 시
        if (e.target.closest('.invite-card__close') || e.target === overlay) {
            closeInvite();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('show')) closeInvite();
    });

    // ===== 디바운스 =====
    const debounce = (fn, ms = 300) => {
        let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
    };

    // ===== API 검색 =====
    let controller = null;
    async function searchMembers(query) {
        if (info) info.textContent = query ? `“${query}” 검색 중…` : '추천 불러오는 중…';
        if (controller) controller.abort();
        controller = new AbortController();

        try {
            const res = await fetch(`/api/invite/search?q=${encodeURIComponent(query)}`, {
                signal: controller.signal
            });
            if (!res.ok) throw new Error('검색 실패');
            const data = await res.json();
            renderList(data);
        } catch (err) {
            if (err.name === 'AbortError') return;
            console.error(err);
            renderList([]);
            if (info) info.textContent = '검색 중 오류 발생';
        }
    }

    // ===== 리스트 렌더링 =====
    function renderList(users) {
        list.innerHTML = '';
        if (!users || users.length === 0) {
            empty.hidden = false;
            if (info) info.textContent = '검색 결과: 0명';
            return;
        }
        empty.hidden = true;
        users.forEach(u => {
            const li = document.createElement('li');
            li.className = 'invite-item';
            li.innerHTML = `
      <img class="invite-item__avatar" src="${u.avatar || 'https://via.placeholder.com/80x80'}" alt="">
      <div class="invite-item__meta">
        <span class="invite-item__name">${u.name}</span>
        <span class="invite-item__tags">주라인: ${u.line || '-'} · 티어: ${u.tier || '-'}</span>
      </div>
      <button class="btn btn--primary btn--sm" data-userid="${u.id}">초대</button>
    `;
            list.appendChild(li);
        });
        if (info) info.textContent = `검색 결과: ${users.length}명`;
    }

    // ===== 입력 시 자동 검색 =====
    let composing = false;
    input.addEventListener('compositionstart', () => composing = true);
    input.addEventListener('compositionend', () => { composing = false; debouncedSearch(); });
    input.addEventListener('input', debounce(() => { if (!composing) debouncedSearch(); }, 300));

    const debouncedSearch = debounce(() => {
        searchMembers(input.value.trim());
    }, 0);

    // ===== 초대 버튼 토글 예시 =====
    overlay.addEventListener('click', (e) => {
        if (e.target.matches('.invite-item .btn--primary.btn--sm, .invite-item .btn--secondary.btn--sm')) {
            const btn = e.target;
            const invited = btn.dataset.invited === '1';
            btn.textContent = invited ? '초대' : '취소';
            btn.dataset.invited = invited ? '0' : '1';
            btn.classList.toggle('btn--secondary');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    function updateBadge(count) {
        const badge = document.querySelector('.msg-badge');
        if (!badge) return;

        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none'; // 0이면 숨김
        }
    }

    // 예시: 알림 5개
    updateBadge(5);
})


// ============ 요소 참조 ============
const noticeOverlay = document.getElementById('noticeOverlay');
const noticeList = document.getElementById('noticeList') || document.querySelector('.notice-list');
const closeBtnSel = '.notice-card__close';

// (선택) 헤더의 공지 버튼(기존 메시지 버튼 자리에 사용)
const noticeBtn = document.querySelector('.button--msg');

// (선택) 배지 업데이트용
function updateNoticeBadge(count) {
    const badge = document.querySelector('.button--msg .msg-badge');
    if (!badge) return;
    if (count > 0) { badge.textContent = count; badge.style.display = 'inline-block'; }
    else { badge.style.display = 'none'; }
}

// ============ 모달 열기/닫기 ============
function openNotice() {
    noticeOverlay.classList.add('show');
    noticeOverlay.removeAttribute('aria-hidden');
    // 처음 오픈 시 데이터 로드 (이미 로드시 중복 요청 막고 싶으면 state 관리)
    loadNotices();
}
function closeNotice() {
    noticeOverlay.classList.remove('show');
    noticeOverlay.setAttribute('aria-hidden', 'true');
}

// 트리거/닫기 이벤트
document.addEventListener('click', (e) => {
    if (e.target.closest('.button--msg')) openNotice();              // 공지 버튼
    if (e.target.closest(closeBtnSel) || e.target === noticeOverlay) closeNotice(); // 닫기, 오버레이
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && noticeOverlay.classList.contains('show')) closeNotice();
});

// ============ 데이터 로드 ============
let loading = false;
async function loadNotices() {
    if (loading) return;
    loading = true;

    // 로딩 상태 표시
    renderNotices({ loading: true });

    try {
        // ▼ 서버 API 맞춰서 경로/파라미터 수정 가능
        // 기대 응답 예시:
        // [{ id:1, title:"...", content:"...", createdAt:"2025-08-10T12:30:00Z", unread:true }, ...]
        const res = await fetch('/api/notices');
        if (!res.ok) throw new Error('공지 조회 실패');
        const data = await res.json();

        renderNotices({ items: data });

        // (선택) 미확인 개수 배지 갱신
        const unreadCount = (data || []).filter(n => n.unread).length;
        updateNoticeBadge(unreadCount);

    } catch (err) {
        console.error(err);
        renderNotices({ error: '공지 목록을 불러오지 못했습니다.' });
    } finally {
        loading = false;
    }
}

// ============ 렌더링 ============
function renderNotices({ loading = false, error = null, items = [] } = {}) {
    if (!noticeList) return;

    if (loading) {
        noticeList.innerHTML = `
      <li class="notice-item"><p class="notice-content">로딩 중…</p></li>
    `;
        return;
    }

    if (error) {
        noticeList.innerHTML = `
      <li class="notice-item"><p class="notice-content" style="color:#d33">${error}</p></li>
    `;
        return;
    }

    if (!items || items.length === 0) {
        noticeList.innerHTML = `
      <li class="notice-item"><p class="notice-content">표시할 공지가 없습니다.</p></li>
    `;
        return;
    }

    // 공지 최신순 정렬(선택)
    items.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    // 템플릿 렌더
    const html = items.map(n => `
    <li class="notice-item${n.unread ? ' is-unread' : ''}" data-id="${n.id}">
      <h4 class="notice-title">${escapeHtml(n.title || '')}</h4>
      <p class="notice-content">${escapeHtml(n.content || '')}</p>
      <span class="notice-date">${formatDate(n.createdAt)}</span>
    </li>
  `).join('');
    noticeList.innerHTML = html;
}

// ============ 유틸 ============
function formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}
function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s ?? '';
    return div.innerHTML;
}

/* ▼ 선택: 공지 읽음 처리 API 호출 예시
noticeList?.addEventListener('click', (e)=>{
  const item = e.target.closest('.notice-item');
  if (!item) return;
  const id = item.dataset.id;
  // 읽음 처리
  fetch(`/api/notices/${id}/read`, { method:'POST' }).catch(console.error);
  item.classList.remove('is-unread');
  // 배지 감소
  const left = noticeList.querySelectorAll('.notice-item.is-unread').length;
  updateNoticeBadge(left);
});
*/


