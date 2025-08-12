const button__close = document.querySelector(".button--close");
// 네비게이션 바 버튼
const btn_personal = document.querySelector(".btn-personal");
const btn_game = document.querySelector(".btn-game");
// 개인 프로필 수정 섹션
const profile_section__personal = document.querySelector(".profile-section--personal");
const profile_section__game = document.querySelector(".profile-section--game");
// 개인/게임 프로필 저장 버튼
const personalForm = document.querySelector(".profile-section--personal form");
const gameForm = document.querySelector(".profile-section--game form");

// 게임 프로필 - 포지션, 게임 시간대 버튼 
const input_line = document.querySelector(".input-line");
const input_time = document.querySelector(".input-time");

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


function goToMain() {
    window.location.href = "main.html"
}

button__close.addEventListener("click", () => {
    goToMain();
});

btn_personal.addEventListener("click", () => {
    profile_section__personal.style.display = "block";
    profile_section__game.style.display = "none";
});

btn_game.addEventListener("click", () => {
    profile_section__personal.style.display = "none";
    profile_section__game.style.display = "block";
})

// 저장 버튼 클릭 시 main.html로 이동
// 저장되었습니다. 멘트(모달)가 나오고 확인 버튼 클릭 시 main.html로 이동으로 바꿔도 될듯
personalForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    goToMain();
})

gameForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    goToMain();
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