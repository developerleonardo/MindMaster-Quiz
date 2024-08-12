import { listOfQuestions, vowels } from "./questions.js";

const form = document.getElementById("form");
const username = document.querySelector("[data-name]");
const optionToAnswerContainer = document.querySelector(".options_container");
const quizContainer = document.querySelector(".quiz_container");
const resultsContainer = document.querySelector(".final_result_message");
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
        questionContainer.textContent = listOfQuestions[numberOfQuestion].question;
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
        showScore();
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

//Show the final Score
const showScore = () => {
    quizContainer.style.display = "none";
    resultsContainer.style.display = "flex";
    const imageResult = document.getElementById("image_result-winner");
    const titleMessage = document.querySelector(".information_result_container").children[0];
    const finalScore = document.querySelector(".information_result_container").children[1];
    const infoMessage = document.querySelector(".information_result_container").children[2];
    const numberOfCorrectAnswers = document.querySelector(".information_result_container").children[3];
    const resultButton = document.getElementById("result_button");
    resultButton.addEventListener("click", () => {
        location.href = "../index.html";
    });
    const scoreInPercentage = score * 100 / listOfQuestions.length;
    if (score >=  listOfQuestions.length * 80 / 100) {
        imageResult.src = "../img/Winner.png";
        titleMessage.textContent = "CONGRATS!";
        finalScore.textContent = `${scoreInPercentage}%`;
        infoMessage.textContent = "Quiz completed successfully!";
        numberOfCorrectAnswers.textContent = `You got ${score} out of ${listOfQuestions.length} answers correct`;score / listOfQuestions.length;
        resultButton.textContent = "GO HOME";
    } else {
        imageResult.src = "../img/loser.png";
        titleMessage.textContent = "OH NO!";
        finalScore.textContent = `${scoreInPercentage}%`;
        finalScore.style.color = "var(--red)";
        infoMessage.textContent = "You did not reach the minimum score";
        numberOfCorrectAnswers.textContent = `You got ${score} out of ${listOfQuestions.length} answers correct`;
        resultButton.textContent = "TAKE AGAIN";
    }
}