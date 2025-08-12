document.addEventListener("DOMContentLoaded", () => {
    const back = document.querySelector(".back");
    
    back.addEventListener("click", () => {
        console.log("클릭");
        window.location.href = "main.html";
    });
});