const quizDB=[
    {
        question: "Q1: What does the abbreviation HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Markup Language",
        c: "HyperText Markdown Language",
        d: "None of the above.",
        ans: "ans1"
    },
    {
        question: "Q2: What does the abbreviation HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Markup Language",
        c: "HyperText Markdown Language",
        d: "None of the above.",
        ans: "ans1"
    },
    {
        question: "Q3: What does the abbreviation HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Markup Language",
        c: "HyperText Markdown Language",
        d: "None of the above.",
        ans: "ans1"
    },
    {
        question: "Q4: What does the abbreviation HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Markup Language",
        c: "HyperText Markdown Language",
        d: "None of the above.",
        ans: "ans1"
    }
];

const question =document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers= document.querySelectorAll('.answer')

const showScore=document.querySelector('#showScore')

let questionCount=0;
let score=0;

const loadQuestion = () =>{
    const questionList=quizDB[questionCount];

   question.innerText = questionList.question;
   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;

   
}

loadQuestion();

const getCheckAnswer =() =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
        
    });

    return answer; 

}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer==quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    if (questionCount<quizDB.length) {
        loadQuestion();
         
    }else{
        showScore.innerHTML=`
        <h3>You Scored ${score}/${quizDB.length}✌️</h3>
        <button class="btn" onclick = "location.reload()">play Again</button>
        `;
        
        showScore.classList.remove('scoreArea');

    }
})