import { listOfQuestions, vowels } from "./questions.js";
import { showScore } from "./results.js";

const form = document.getElementById("form");
const username = document.querySelector("[data-name]");
const optionToAnswerContainer = document.querySelector(".options_container");
const button = document.querySelector(".button");

//Save username in the form
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    username.value ? location.href = "./pages/questions.html" : alert("Insert your name to continue");
});
//Show the (number of the question / total) the user is solving
let numberOfQuestion = 0;
const currentQuestion = () => {
    const counter = document.querySelector(".counter");
    const totalOfQuestions = `${numberOfQuestion + 1} / ${listOfQuestions.length}`
    if (numberOfQuestion + 1 <= listOfQuestions.length) {
        counter.textContent = totalOfQuestions;
    }
    if (numberOfQuestion + 1 === listOfQuestions.length) {
        button.textContent = "FINISH";
    }
}

//Save result of the answers
let score = 0;
let isCorrect = false;

const createNewQuestion = () => {
    if (numberOfQuestion + 1 <= listOfQuestions.length) {
        const questionContainer = document.querySelector("[data-question]");
        questionContainer.innerHTML = listOfQuestions[numberOfQuestion].question;
        let vowelOption = 3;
        listOfQuestions[numberOfQuestion].answers.forEach((answer) => {
            const newOption = document.createElement("div");
            newOption.classList.add("option");
            newOption.innerHTML = `
                <span class="vowel_option">${vowels[vowelOption]}</span>
                <p data-optionA>${answer.answer}</p>`
            optionToAnswerContainer.insertAdjacentElement("afterbegin", newOption);
            vowelOption--;
            newOption.addEventListener("click", () => {
                if (answer.isCorrect) {
                    isCorrect = true;
                } else {
                    isCorrect = false;
                }
            })
        });
    } else {
        showScore(score, listOfQuestions);
    }
    currentQuestion();
    numberOfQuestion++;
}
//Render every question of the quiz
const ShowQuestion = () => {
    const optionsToDelete = document.getElementsByClassName("option");
    const optionsInArray = Array.from(optionsToDelete);
    optionsInArray.forEach((option) => {
        option.remove();
    })
    createNewQuestion();
}

currentQuestion();
createNewQuestion();

button.addEventListener("click", () => {
    ShowQuestion();
    if (isCorrect) {
        score++;
        isCorrect = false;
    }
});

optionToAnswerContainer.addEventListener("click", (event) => {
    const allTheOptions = document.getElementsByClassName("option");
    const options = Array.from(allTheOptions);
    options.forEach((option) => {
        if (event.target.classList.contains("option")) option.classList.remove("option-active");
    })
    event.target.closest(".option")?.classList.toggle("option-active");
});