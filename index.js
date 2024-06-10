const startbtn = document.querySelector('.start-btn');
const popupinfo = document.querySelector('.popup-info');
const exitbtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continuebtn = document.querySelector('.continue-btn');
const quizsection = document.querySelector('.quiz-section');
const quizbox = document.querySelector('.quiz-box');
const resultbox = document.querySelector('.result-box');
const tryAgainbtn = document.querySelector('.tryagain-btn');
const goHomebtn = document.querySelector('.gohome-btn');

const nextBtn = document.querySelector('.next-btn'); // Moved up to the global scope

startbtn.onclick = () => {
    popupinfo.classList.add('active');
    main.classList.add('active');
};

exitbtn.onclick = () => {
    popupinfo.classList.remove('active');
    main.classList.remove('active');
};

continuebtn.onclick = () => {
    quizsection.classList.add('active');
    popupinfo.classList.remove('active');
    main.classList.remove('active');
    quizbox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerscore();
    nextBtn.classList.remove('active'); // Make sure to hide the next button initially
};

tryAgainbtn.onclick = () => {
    quizbox.classList.add('active');
    nextBtn.classList.remove('active');
    resultbox.classList.remove('active');

    questionCount = 0;
    questionNumb = 0;
    userscore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerscore();
};

goHomebtn.onclick = () => {
    quizsection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultbox.classList.remove('active');

    questionCount = 0;
    questionNumb = 0;
    userscore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

};

let questionCount = 0;
let questionNumb = 1;
let userscore = 0;

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active'); // Hide the next button again after showing the next question
    } else {
        console.log('Question Completed');
        showresultbox();
    }
};

const optionlist = document.querySelector('.option-list');

// Rest of your code...


// Getting question and options from array.
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optiontag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        optiontag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }

    optionlist.innerHTML = optiontag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].classList.remove('correct'); // Remove the 'correct' class from all options
        option[i].setAttribute('onclick', 'optionselected(this)');
    }
}

function optionselected(answer) {
    if (!answer.classList.contains('correct')) {
        let useranswer = answer.textContent;
        let correctanswers = questions[questionCount].answer; // Assuming answer is an array
        let alloptions = optionlist.children.length;

        if (correctanswers.includes(useranswer)) {
            answer.classList.add('correct');
            userscore += 1;
            headerscore();
        } else {
            answer.classList.add('incorrect');

            // Mark the correct answers
            for (let i = 0; i < alloptions; i++) {
                if (correctanswers.includes(optionlist.children[i].textContent)) {
                    optionlist.children[i].classList.add('correct');
                }
            }
        }

        // Disable all options
        for (let i = 0; i < alloptions; i++) {
            optionlist.children[i].classList.add('disabled');
        }
        nextBtn.classList.add('active');
    }
}


function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} questions`;
}

function headerscore(){
    const headerscoretext = document.querySelector('.header-score');
    headerscoretext.textContent = `Score: ${userscore} / ${questions.length}`;
}

function showresultbox(){
    quizbox.classList.remove('active');
    resultbox.classList.add('active');

    const scoretext = document.querySelector('.score-text');
    scoretext.textContent = `Your Score ${userscore} out of ${questions.length}`;

    const circularprogress = document.querySelector('.circular-progress');
    const progressvalue = document.querySelector('.progress-value');

    let progresStartValue = -1;
    let progressEndValue = (userscore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(()=>{
        progresStartValue++;
        
        progressvalue.textContent = `${progresStartValue}%`;   
        circularprogress.style.background = `conic-gradient(#c40094 ${progresStartValue * 3.6}deg, rgba(255,255,255,.1) 0deg)`;


if (progresStartValue === progressEndValue) {
    clearInterval(progress);
}


    }, speed);
}