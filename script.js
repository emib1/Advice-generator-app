const adviceBtn = document.querySelector(".dice");
const adviceNo = document.querySelector(".advice-no");
const adviceText = document.querySelector(".advice-text");

window.onload = () => {
    setAdvice();
}

adviceBtn.addEventListener("click", () => {
    setAdvice();
});


function setAdvice(){
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then(res => res.json())
    .then(data => {
        const advice = data.slip;
        console.log(advice);
        adviceNo.textContent = ` Advice #${advice.id}`
        adviceText.textContent = advice.advice;
    })
}