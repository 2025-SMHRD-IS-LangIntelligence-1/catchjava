document.addEventListener("DOMContentLoaded", () => {
    let back = document.querySelector(".back");
    let duplicate_check_btn = document.querySelector(".duplicate-check-btn");
    
    
    back.addEventListener("click", () => {
        window.location.href = "login.html";
    });
});