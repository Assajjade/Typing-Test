const textDisplayEl = document.getElementById("text-display");
const textInputEl = document.getElementById("text-input");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const restartButtonEl = document.getElementById("restart-button");
const resultsEl = document.getElementById("results");

const RANDOM_QUOTE_API_URL = "https://dummyjson.com/quotes/random";

let quoteChars = []; 
let currentCharlIndex = 0; 
let startTime;
let timerInterval;
let totalErrors = 0;
let timeLimit = 60; 
let isTyping = false;

async function renderNewQuote() {
    const response = await fetch(RANDOM_QUOTE_API_URL);
    const data = await response.json();
    const quote = data.quote;

    textDisplayEl.innerHTML = "";

    quoteChars = quote.split("");
    quoteChars.forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.innerText = char;
        textDisplayEl.appendChild(charSpan);
    });

    resetTest();
}

function resetTest() {
    clearInterval(timerInterval);
    timerEl.innerText = timeLimit;
    resultsEl.style.display = "none"; 
    textInputEl.value = ""; 
    textInputEl.disabled = false;
    textInputEl.focus(); 
    currentCharlIndex = 0;
    totalErrors = 0;
    isTyping = false;

    const allSpans = textDisplayEl.querySelectorAll("span");
    allSpans.forEach((span) => {
        span.classList.remove("correct", "incorrect", "active");
    });

    if (allSpans.length > 0) {
        allSpans[0].classList.add("active");
    }
}

textInputEl.addEventListener("input", () => {
    if (!isTyping) {
        startTimer();
        isTyping = true;
    }

    const allSpans = textDisplayEl.querySelectorAll("span");
    const typedValue = textInputEl.value;
    const typedChar = typedValue[currentCharlIndex];
    const quoteChar = quoteChars[currentCharlIndex];

    

    if (currentCharlIndex < quoteChars.length) {
        const allSpans = textDisplayEl.querySelectorAll("span");
        const currentCharSpan = allSpans[currentCharlIndex];
        const typedChar = typedValue[currentCharlIndex];

        if (typedChar == null) {
            currentCharlIndex--;
            allSpans[currentCharlIndex].classList.remove(
                "correct",
                "incorrect"
            );
        }
        else if (typedChar === currentCharSpan.innerText) {
            currentCharSpan.classList.add("correct");
            currentCharSpan.classList.remove("incorrect");
            currentCharlIndex++;
        }
        else {
            currentCharSpan.classList.add("incorrect");
            currentCharSpan.classList.remove("correct");
            totalErrors++;
            currentCharlIndex++;
        }

        allSpans.forEach((span) => span.classList.remove("active"));
        if (currentCharlIndex < allSpans.length) {
            allSpans[currentCharlIndex].classList.add("active");
        }

        if (currentCharlIndex === allSpans.length) {
            endTest();
        }
    }
});

function startTimer() {
    startTime = new Date();

    timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((new Date() - startTime) / 1000);
        const timeLeft = timeLimit - elapsedTime;

        timerEl.innerText = timeLeft;

        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

function endTest() {
    clearInterval(timerInterval);
    textInputEl.disabled = true; 
    resultsEl.style.display = "block"; 

    const correctChars = document.querySelectorAll(".correct").length;
    const timeInMinutes = (timeLimit - parseInt(timerEl.innerText)) / 60;

    let finalWPM = 0;
    if (timeInMinutes > 0) {
        finalWPM = Math.round(correctChars / 5 / timeInMinutes);
    }

    const totalCharsTyped = currentCharlIndex;
    const accuracy = Math.round(
        ((totalCharsTyped - totalErrors) / totalCharsTyped) * 100
    );

    wpmEl.innerText = finalWPM;
    accuracyEl.innerText = accuracy || 0; 
}

restartButtonEl.addEventListener("click", renderNewQuote);

renderNewQuote();
