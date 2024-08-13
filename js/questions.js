export const listOfQuestions = [
    {
        question: "What is the result of the following code? <br> const obj = { a: 1 }; <br> Object.freeze(obj); <br> obj.a = 2; <br> console.log(obj.a);",
        answers: [
            { answer: "2", isCorrect: false },
            { answer: "undefined", isCorrect: false },
            { answer: "1", isCorrect: true },
            { answer: "Error", isCorrect: false }
        ]
    },
    {
        question: "Which of the following methods can be used to merge two arrays?",
        answers: [
            { answer: "merge", isCorrect: false },
            { answer: "concat", isCorrect: true },
            { answer: "append", isCorrect: false },
            { answer: "combine", isCorrect: false }
        ]
    },
    {
        question: "What does the 'this' keyword refer to in a regular function?",
        answers: [
            { answer: "Current object", isCorrect: false },
            { answer: "Global object", isCorrect: true },
            { answer: "Window object", isCorrect: false },
            { answer: "Function scope", isCorrect: false }
        ]
    },
    {
        question: "What is the output of the following code? <br> console.log(1 + '1' - 1);",
        answers: [
            { answer: "10", isCorrect: true },
            { answer: "11", isCorrect: false },
            { answer: "NaN", isCorrect: false },
            { answer: "undefined", isCorrect: false }
        ]
    },
    {
        question: "How can you prevent an object property from being changed?",
        answers: [
            { answer: "Object.prevent", isCorrect: false },
            { answer: "Object.freeze", isCorrect: true },
            { answer: "Object.seal", isCorrect: false },
            { answer: "Object.protect", isCorrect: false }
        ]
    },
    {
        question: "Which of the following will correctly copy an array?",
        answers: [
            { answer: "arr.map()", isCorrect: false },
            { answer: "[...arr]", isCorrect: true },
            { answer: "arr.copy()", isCorrect: false },
            { answer: "arr.slice()", isCorrect: false }
        ]
    },
    {
        question: "What is the result of: <br> typeof NaN;",
        answers: [
            { answer: "number", isCorrect: true },
            { answer: "NaN", isCorrect: false },
            { answer: "undefined", isCorrect: false },
            { answer: "null", isCorrect: false }
        ]
    },
    {
        question: "Which statement is true about closures in JavaScript?",
        answers: [
            { answer: "They prevent variable hoisting", isCorrect: false },
            { answer: "They are created with 'new' keyword", isCorrect: false },
            { answer: "They allow access to outer function's scope", isCorrect: true },
            { answer: "They are only available in global scope", isCorrect: false }
        ]
    },
    {
        question: "What will the following code return? <br> !!false;",
        answers: [
            { answer: "0", isCorrect: false },
            { answer: "false", isCorrect: true },
            { answer: "true", isCorrect: false },
            { answer: "undefined", isCorrect: false }
        ]
    },
    {
        question: "How do you create an arrow function that returns the sum of two numbers?",
        answers: [
            { answer: "(a, b) -> a + b", isCorrect: false },
            { answer: "(a, b) => { return a + b }", isCorrect: false },
            { answer: "function(a, b) { return a + b }", isCorrect: false },
            { answer: "(a, b) => a + b", isCorrect: true }
        ]
    }
];

export const vowels = ["A", "B", "C", "D"];