let btn = document.getElementById("btn");

let nickname = "안녕하세요"


const getnickname = () => {
    console.log(nickname);
}

getnickname();

btn.addEventListener("click", getnickname);