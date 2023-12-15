let number = document.querySelectorAll('#num>button');
let enter = document.getElementById('btn');
let score = document.getElementById('input_score');
let min = document.getElementById('min');
let max = document.getElementById('max');
let isFirst = true;

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        if (isFirst == true) {
            score.innerText = number[i].innerText;
            isFirst= false;
        } else {
            score.innerText += number[i].innerText;
        }
    });
}

enter.addEventListener('click', function () {
    let currentScore = parseInt(score.innerText);

    if (currentScore > parseInt(max.innerText)) {
        max.innerText = currentScore;
    } else if (currentScore < parseInt(min.innerText) || min.innerText === "") {
        min.innerText = currentScore;
    }

    score.innerText = "0";
    isFirst = true;
})