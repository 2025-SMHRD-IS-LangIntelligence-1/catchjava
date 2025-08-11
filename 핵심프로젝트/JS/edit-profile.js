const button__close = document.querySelector(".button--close");
// 네비게이션 바 버튼
const btn_personal = document.querySelector(".btn-personal");
const btn_game = document.querySelector(".btn-game");
// 개인 프로필 수정 섹션
const profile_section__personal = document.querySelector(".profile-section--personal");
const profile_section__game = document.querySelector(".profile-section--game");

button__close.addEventListener("click", () => {
    window.location.href = "main.html";
});

btn_personal.addEventListener("click", () => {
    profile_section__personal.style.display = "block";
    profile_section__game.style.display = "none";
});

btn_game.addEventListener("click", () => {
    profile_section__personal.style.display = "none";
    profile_section__game.style.display = "block";
})

