const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const counter = document.getElementById("counter");
const heart = document.getElementById("heart");
const form = document.getElementById("comment-form");
const likes = document.getElementsByClassName("likes");
const comment = document.getElementById("comment-input")
let pause = document.getElementById('pause')
let isPause = true;
let counting

let time = 0

function createInterval () {
    counter.innerText = time++;
    return;
}

function startTimer() {
    counting = setInterval(createInterval, 1000);
}

function stopTimer() {
    clearInterval(counting)
}

pause.addEventListener("click", () => {
    if (isPause === true) {
        pause.textContent = "resume"
        isPause = false;
        stopTimer()
    }
    else if (isPause === false) {
        pause.textContent = "pause"
        isPause = true;
        startTimer()
    }
})

startTimer()

plus.addEventListener("click", () => {
    counter.textContent++
})

minus.addEventListener("click", () => {
    counter.textContent--
})

heart.addEventListener("click", () => {
    let li = document.createElement('li');
    li.textContent = `${counter.textContent} has been liked 1 time`
    document.querySelector('ul').appendChild(li);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let p = document.createElement('p');
    p.textContent = e.target.comment.value
    document.querySelector("form").appendChild(p)
    form.reset;
})