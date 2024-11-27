const sentences = [
    {
        norwegian: "Jeg liker å spise epler",
        russian: "Я люблю есть яблоки"
    },
    {
        norwegian: "Han går til skolen",
        russian: "Он идет в школу"
    },
    {
        norwegian: "Vi bor i Norge",
        russian: "Мы живем в Норвегии"
    }
];

const extraWords = ["og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem"];

let currentSentence = {};
let selectedWords = [];

function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomWords(words, count) {
    const shuffledWords = shuffleArray([...words]);
    return shuffledWords.slice(0, count);
}

function displaySentence() {
    currentSentence = getRandomSentence();
    document.getElementById("russianSentence").textContent = currentSentence.russian;
    document.getElementById("sentence").textContent = ""; // Очищаем поле для набранного предложения
    const words = currentSentence.norwegian.split(" ");
    const randomExtraWords = getRandomWords(extraWords, 10 - words.length);
    const allWords = shuffleArray([...words, ...randomExtraWords]);
    const wordsContainer = document.getElementById("wordsContainer");
    wordsContainer.innerHTML = "";
    allWords.forEach(word => {
        const wordElement = document.createElement("button");
        wordElement.textContent = word;
        wordElement.classList.add("word");
        wordElement.onclick = () => selectWord(word, wordElement);
        wordsContainer.appendChild(wordElement);
    });
}

function selectWord(word, wordElement) {
    selectedWords.push(word);
    wordElement.style.display = "none"; 
    const selectedSentence = selectedWords.join(" ");
    document.getElementById("sentence").textContent = selectedSentence;
    document.getElementById("feedback").textContent = ""; 
    document.getElementById("correctAnswer").textContent = ""; 
}

function checkAnswer() {
    const selectedSentence = selectedWords.join(" ");
    if (selectedSentence === currentSentence.norwegian) {
        document.getElementById("feedback").textContent = "Riktig!";
        document.getElementById("feedback").style.color = "green";
        document.getElementById("correctAnswer").textContent = ""; 
    } else {
        document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
        document.getElementById("feedback").style.color = "red";
        document.getElementById("correctAnswer").textContent = `Riktig svar: ${currentSentence.norwegian}`; // Отображаем правильный ответ
    }
    selectedWords = [];
    displaySentence();
}

document.getElementById("checkAnswer").onclick = checkAnswer;

window.onload = displaySentence;

// const sentences = [
//     {
//         norwegian: "Jeg liker å spise epler",
//         russian: "Я люблю есть яблоки"
//     },
//     {
//         norwegian: "Han går til skolen",
//         russian: "Он идет в школу"
//     },
//     {
//         norwegian: "Vi bor i Norge",
//         russian: "Мы живем в Норвегии"
//     }
// ];

// const extraWords = ["og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem"];

// let currentSentence = {};
// let selectedWords = [];

// function getRandomSentence() {
//     return sentences[Math.floor(Math.random() * sentences.length)];
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// function getRandomWords(words, count) {
//     const shuffledWords = shuffleArray([...words]);
//     return shuffledWords.slice(0, count);
// }

// function displaySentence() {
//     currentSentence = getRandomSentence();
//     document.getElementById("sentence").textContent = currentSentence.russian;
//     const words = currentSentence.norwegian.split(" ");
//     const randomExtraWords = getRandomWords(extraWords, 10 - words.length);
//     const allWords = shuffleArray([...words, ...randomExtraWords]);
//     const wordsContainer = document.getElementById("wordsContainer");
//     wordsContainer.innerHTML = "";
//     allWords.forEach(word => {
//         const wordElement = document.createElement("button");
//         wordElement.textContent = word;
//         wordElement.classList.add("word");
//         wordElement.onclick = () => selectWord(word, wordElement);
//         wordsContainer.appendChild(wordElement);
//     });
// }

// function selectWord(word, wordElement) {
//     selectedWords.push(word);
//     wordElement.style.display = "none"; // Убираем выбранное слово из списка
//     const selectedSentence = selectedWords.join(" ");
//     document.getElementById("sentence").textContent = selectedSentence;
//     document.getElementById("feedback").textContent = ""; // Очищаем поле обратной связи
//     document.getElementById("correctAnswer").textContent = ""; // Очищаем поле правильного ответа
// }

// function checkAnswer() {
//     const selectedSentence = selectedWords.join(" ");
//     if (selectedSentence === currentSentence.norwegian) {
//         document.getElementById("feedback").textContent = "Riktig!";
//         document.getElementById("feedback").style.color = "green";
//         document.getElementById("correctAnswer").textContent = ""; // Очищаем поле правильного ответа
//     } else {
//         document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
//         document.getElementById("feedback").style.color = "red";
//         document.getElementById("correctAnswer").textContent = `Riktig svar: ${currentSentence.norwegian}`; // Отображаем правильный ответ
//     }
//     selectedWords = [];
//     displaySentence();
// }

// document.getElementById("checkAnswer").onclick = checkAnswer;

// window.onload = displaySentence;




// const sentences = [
//     {
//         norwegian: "Jeg liker å spise epler",
//         russian: "Я люблю есть яблоки"
//     },
//     {
//         norwegian: "Han går til skolen",
//         russian: "Он идет в школу"
//     },
//     {
//         norwegian: "Vi bor i Norge",
//         russian: "Мы живем в Норвегии"
//     }
// ];

// const extraWords = ["og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem"];

// let currentSentence = {};
// let selectedWords = [];

// function getRandomSentence() {
//     return sentences[Math.floor(Math.random() * sentences.length)];
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// function getRandomWords(words, count) {
//     const shuffledWords = shuffleArray([...words]);
//     return shuffledWords.slice(0, count);
// }

// function displaySentence() {
//     currentSentence = getRandomSentence();
//     document.getElementById("sentence").textContent = currentSentence.russian;
//     const words = currentSentence.norwegian.split(" ");
//     const randomExtraWords = getRandomWords(extraWords, 10 - words.length);
//     const allWords = shuffleArray([...words, ...randomExtraWords]);
//     const wordsContainer = document.getElementById("wordsContainer");
//     wordsContainer.innerHTML = "";
//     allWords.forEach(word => {
//         const wordElement = document.createElement("button");
//         wordElement.textContent = word;
//         wordElement.classList.add("word");
//         wordElement.onclick = () => selectWord(word, wordElement);
//         wordsContainer.appendChild(wordElement);
//     });
// }

// function selectWord(word, wordElement) {
//     selectedWords.push(word);
//     wordElement.style.display = "none"; // Убираем выбранное слово из списка
//     const selectedSentence = selectedWords.join(" ");
//     document.getElementById("sentence").textContent = selectedSentence;
// }

// function checkAnswer() {
//     const selectedSentence = selectedWords.join(" ");
//     if (selectedSentence === currentSentence.norwegian) {
//         document.getElementById("feedback").textContent = "Riktig!";
//         document.getElementById("feedback").style.color = "green";
//     } else {
//         document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
//         document.getElementById("feedback").style.color = "red";
//     }
//     selectedWords = [];
//     displaySentence();
// }

// document.getElementById("checkAnswer").onclick = checkAnswer;

// window.onload = displaySentence;
