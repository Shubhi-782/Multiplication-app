const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEL = document.getElementById("question");
const formEL = document.getElementById("form");
const inputEL = document.getElementById("input");
const scoreEL = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
questionEL.innerText = `What is ${num1} multiply by ${num2} ?`
if (!score) {
    score = 0;
}
scoreEL.innerText = `Score: ${score}`
const correctAns = num1 * num2;

formEL.addEventListener("submit", () => {
    const usersAns = +inputEL.value;
    if (usersAns === correctAns) {
        score++
        updateLocalstorage()
    } else {
        score--
        updateLocalstorage()
    }
});

function updateLocalstorage() {
    localStorage.setItem("score", JSON.stringify(score))
};
