const form = document.getElementById("form");
const username = document.querySelector("[data-name]");
const optionToAnswerContainer = document.querySelector(".options_container");
const button = document.querySelector(".button");

form?.addEventListener("submit", (event) => {
    event.preventDefault();
    username.value ? location.href = "./pages/questions.html" : alert("Insert your name to continue");
});
const listOfQuestions = [
    {
        question: "What is javascript",
        answers: [
            { answer: "A programming language", isCorrect: true },
            { answer: "A style guide", isCorrect: false },
            { answer: "The structure of a website", isCorrect: false },
            { answer: "A database", isCorrect: false }
        ]
    },
    {
        question: "In the following array, mark the correct value of the variable numberToFind: <br> const multipleOf5 = [5, 10, 15, 20] <br> const numberToFind = multipleOf5.find((number) => number > 10)",
        answers: [
            { answer: "10", isCorrect: false },
            { answer: "15", isCorrect: true },
            { answer: "20", isCorrect: false },
            { answer: "[15, 20]", isCorrect: false }
        ]
    },
    {
        question: "What is javascript",
        answers: [
            { answer: "A programming language", isCorrect: true },
            { answer: "A style guide", isCorrect: false },
            { answer: "The structure of a website", isCorrect: false },
            { answer: "A database", isCorrect: false }
        ]
    },

];
const vowels = ["A", "B", "C", "D"];
let numberOfQuestion = 0;
const currentQuestion = () => {
    const counter = document.querySelector(".counter");
    const totalOfQuestions = `${numberOfQuestion + 1} / ${listOfQuestions.length}`
    if (numberOfQuestion + 1 <= listOfQuestions.length) {
        counter.textContent = totalOfQuestions;
    }
}
const createNewQuestion = () => {
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
    });
    currentQuestion();
    numberOfQuestion++;
}
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
button.addEventListener("click", () => ShowQuestion());

optionToAnswerContainer.addEventListener("click", (event) => {
    const allTheOptions = document.getElementsByClassName("option");
    const options = Array.from(allTheOptions);
    options.forEach((option) => {
        if(event.target.classList.contains("option")) option.classList.remove("option-active");
    })
    event.target.closest(".option").classList.toggle("option-active");
})