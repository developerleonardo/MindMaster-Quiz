const quizContainer = document.querySelector(".quiz_container");
const resultsContainer = document.querySelector(".final_result_message");

//Show the final Score
export const showScore = (score, listOfQuestions) => {
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
        imageResult.src = "../img/Winner.AVIF";
        titleMessage.textContent = "CONGRATS!";
        finalScore.textContent = `${scoreInPercentage}%`;
        infoMessage.textContent = "Quiz completed successfully!";
        numberOfCorrectAnswers.textContent = `You got ${score} out of ${listOfQuestions.length} answers correct`;score / listOfQuestions.length;
        resultButton.textContent = "GO HOME";
    } else {
        imageResult.src = "../img/loser.AVIF";
        titleMessage.textContent = "OH NO!";
        finalScore.textContent = `${scoreInPercentage}%`;
        finalScore.style.color = "var(--red)";
        infoMessage.textContent = "You did not reach the minimum score";
        numberOfCorrectAnswers.textContent = `You got ${score} out of ${listOfQuestions.length} answers correct`;
        resultButton.textContent = "TAKE AGAIN";
    }
}