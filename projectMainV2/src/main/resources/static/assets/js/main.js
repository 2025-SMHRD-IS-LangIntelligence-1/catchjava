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
// Hidden inputs for main/sub position
const hiddenMain = document.getElementById('PositionInput');
const hiddenSub  = document.getElementById('mainPositionInput');
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
// 서버에서 전달된 hasPosition 값을 body data-* 속성으로부터 읽기
const hasPosition = document.body.dataset.hasPosition === 'true';



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

// 길드 버튼 클릭 시 - 서버 상태(hasPosition)에 따라 분기
btn_guild.addEventListener("click", () => {
    // 공통: 메인 영역 숨김
    main_section.style.display = "none";
    esports_schedule.style.display = "none";
    esports_news.style.display = "none";

    // 길드 루트는 항상 보이게 (부모가 숨겨지면 자식도 안 보임)
    guild_section.style.display = "block";

    if (hasPosition) {
        // 프로필이 이미 있음: 프로필 작성 숨김, 나머지도 기본 숨김(필요 시 이후 로직으로 열기)
        game_profile_intro.style.display = "none";
        guild_find.style.display = "block";
        guild_section__have.style.display = "none";
    } else {
        // 프로필이 없음: 프로필 작성 보이기
        game_profile_intro.style.display = "block";
        guild_find.style.display = "none";
        guild_section__have.style.display = "none";
    }
});

// 게임 프로필 라인 선택 버튼 클릭 시
input_line.addEventListener("click", () => {
    Modal.style.display = "flex";
    modal_step__main.style.display = "block";
});

// 메인 포지션
mainpositionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const mainValue = button.value;
        if (hiddenMain) hiddenMain.value = mainValue;

        // 올라운더 선택 시 -> 부포지션 건너뜀
        if (mainValue === "6") {
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
        const subValue = button.value;
        if (hiddenSub) hiddenSub.value = subValue;
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
const saveBtn   = document.querySelector('.modal-actions .btn-save');

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
