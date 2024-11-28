const sentences = [
     {
        "norwegian": "Hvis det regner, blir vi hjemme.",
        "russian": "Если пойдет дождь, мы останемся дома.",
        "english": "If it rains, we will stay home."
    },
    {
        "norwegian": "Han sa, at han var trøtt.",
        "russian": "Он сказал, что устал.",
        "english": "He said that he was tired."
    },
    {
        "norwegian": "Vet du, om butikken er åpen?",
        "russian": "Ты знаешь, открыт ли магазин?",
        "english": "Do you know if the shop is open?"
    },
    {
        "norwegian": "Jenta, som løp i parken, er søsteren min.",
        "russian": "Девочка, которая бегала в парке, моя сестра.",
        "english": "The girl, who was running in the park, is my sister."
    },
    {
        "norwegian": "Vi ble hjemme, derfor så vi filmen sammen.",
        "russian": "Мы остались дома, поэтому посмотрели фильм вместе.",
        "english": "We stayed home, therefore we watched the movie together."
    },
    {
        "norwegian": "Han kom ikke, fordi han var syk.",
        "russian": "Он не пришел, потому что был болен.",
        "english": "He didn’t come because he was sick."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If you want, we can go now."
    },
    {
        "norwegian": "Jeg vet, at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "I know that he has a lot of work."
    },
    {
        "norwegian": "Kan du si meg, om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Can you tell me if the train is on time?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "The house, which we saw yesterday, was very nice."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "He was tired, therefore he went to bed early."
    },
    {
        "norwegian": "De ble hjemme, fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "They stayed home because it was raining."
    },
     {"norwegian": "Hvis vi har tid, kan vi besøke museet.", "russian": "Если у нас будет время, мы можем посетить музей.", "english": "If we have time, we can visit the museum."},
    {"norwegian": "Jeg hørte, at du skal på ferie snart.", "russian": "Я слышал, что ты скоро едешь в отпуск.", "english": "I heard that you are going on vacation soon."},
    {"norwegian": "Vet du, om han allerede har spist?", "russian": "Ты знаешь, ел ли он уже?", "english": "Do you know if he has already eaten?"},
    {"norwegian": "Boken, som ligger på bordet, er min.", "russian": "Книга, которая лежит на столе, моя.", "english": "The book, which is on the table, is mine."},
    {"norwegian": "Det er kaldt ute, derfor trenger vi varme klær.", "russian": "На улице холодно, поэтому нам нужна теплая одежда.", "english": "It is cold outside, therefore we need warm clothes."},
    {"norwegian": "Han kom sent, fordi bussen var forsinket.", "russian": "Он пришел поздно, потому что автобус задержался.", "english": "He arrived late because the bus was delayed."},
    {"norwegian": "Hvis du ikke kan komme, gi meg beskjed.", "russian": "Если ты не сможешь прийти, дай мне знать.", "english": "If you can’t come, let me know."},
    {"norwegian": "Jeg tror, at vi trenger mer tid.", "russian": "Я думаю, что нам нужно больше времени.", "english": "I think that we need more time."},
    {"norwegian": "Har du spurt, om hun vil være med oss?", "russian": "Ты спросил, пойдет ли она с нами?", "english": "Did you ask if she wants to join us?"},
    {"norwegian": "Gutten, som sykler der borte, er broren min.", "russian": "Мальчик, который едет на велосипеде вон там, мой брат.", "english": "The boy, who is cycling over there, is my brother."},
    {"norwegian": "Det begynte å regne, derfor dro vi hjem.", "russian": "Начался дождь, поэтому мы поехали домой.", "english": "It started raining, therefore we went home."},
    { "norwegian": "Hun ble sint, fordi ingen hørte på henne.", "russian": "Она разозлилась, потому что никто ее не слушал.", "english": "She got angry because no one listened to her." },
     {"norwegian": "Hvis du studerer hardt, vil du lykkes.", "russian": "Если ты будешь усердно учиться, ты добьешься успеха.", "english": "If you study hard, you will succeed."},
    {"norwegian": "Jeg vet, at de har kjøpt en ny bil.", "russian": "Я знаю, что они купили новую машину.", "english": "I know that they bought a new car."},
    {"norwegian": "Om du trenger hjelp, bare si fra.", "russian": "Если тебе нужна помощь, просто скажи.", "english": "If you need help, just let me know."},
    {"norwegian": "Læreren, som underviser i matematikk, er veldig streng.", "russian": "Учитель, который преподает математику, очень строгий.", "english": "The teacher, who teaches math, is very strict."},
    {"norwegian": "Hun var glad, derfor smilte hun hele dagen.", "russian": "Она была счастлива, поэтому улыбалась весь день.", "english": "She was happy, therefore she smiled all day."},
    {"norwegian": "Vi spiste ute, fordi vi ikke hadde tid til å lage mat.", "russian": "Мы поели вне дома, потому что у нас не было времени готовить.", "english": "We ate out because we didn't have time to cook."},
    {"norwegian": "Hvis du leser denne boken, vil du lære mye.", "russian": "Если ты прочитаешь эту книгу, ты узнаешь много нового.", "english": "If you read this book, you will learn a lot."},
    {"norwegian": "Han spurte, om vi ville være med på turen.", "russian": "Он спросил, захотим ли мы поехать в поездку.", "english": "He asked if we wanted to join the trip."},
    {"norwegian": "Jenta, som bor i nabohuset, er venninnen min.", "russian": "Девочка, которая живет в соседнем доме, моя подруга.", "english": "The girl, who lives in the house next door, is my friend."},
    {"norwegian": "Vi kan ikke gå ut, fordi det er for kaldt.", "russian": "Мы не можем выйти на улицу, потому что слишком холодно.", "english": "We can't go outside because it is too cold."},
    {"norwegian": "Han ble glad, fordi han fikk den jobben han ønsket.", "russian": "Он был рад, потому что получил работу, о которой мечтал.", "english": "He was happy because he got the job he wanted."},
    { "norwegian": "Hvis du har spørsmål, er jeg her for å hjelpe.", "russian": "Если у тебя есть вопросы, я здесь, чтобы помочь.", "english": "If you have questions, I am here to help." },
    {"norwegian": "Hvis vi jobber sammen, kan vi fullføre prosjektet raskt.", "russian": "Если мы будем работать вместе, мы сможем быстро завершить проект.", "english": "If we work together, we can finish the project quickly."},
    {"norwegian": "Jeg håper, at det blir sol i morgen.", "russian": "Я надеюсь, что завтра будет солнце.", "english": "I hope that it will be sunny tomorrow."},
    {"norwegian": "Om du ønsker det, kan vi ta en pause.", "russian": "Если ты хочешь, мы можем сделать перерыв.", "english": "If you want, we can take a break."},
    {"norwegian": "Boken, som jeg leste i sommer, var veldig interessant.", "russian": "Книга, которую я читал этим летом, была очень интересной.", "english": "The book, which I read this summer, was very interesting."},
    {"norwegian": "Hun var opprørt, derfor snakket hun ikke til noen.", "russian": "Она была расстроена, поэтому не говорила с никем.", "english": "She was upset, therefore she didn't speak to anyone."},
    {"norwegian": "Vi måtte dra hjem, fordi vi hadde glemt nøklene.", "russian": "Нам пришлось вернуться домой, потому что мы забыли ключи.", "english": "We had to go back home because we forgot the keys."},
    {"norwegian": "Hvis du ser ham, kan du si at jeg leter etter ham?", "russian": "Если ты его увидишь, можешь сказать, что я его ищу?", "english": "If you see him, can you tell him I am looking for him?"},
    {"norwegian": "Jeg vet, at hun har en stor samling av frimerker.", "russian": "Я знаю, что у неё большая коллекция марок.", "english": "I know that she has a large collection of stamps."},
    {"norwegian": "Om været er bra, planlegger vi en piknik i parken.", "russian": "Если погода будет хорошая, мы планируем пикник в парке.", "english": "If the weather is nice, we are planning a picnic in the park."},
    {"norwegian": "Guttene, som spiller fotball, er vennene mine.", "russian": "Мальчики, которые играют в футбол, мои друзья.", "english": "The boys, who are playing football, are my friends."},
    {"norwegian": "Det var sent, derfor bestemte vi oss for å ta taxi hjem.", "russian": "Было поздно, поэтому мы решили поехать домой на такси.", "english": "It was late, therefore we decided to take a taxi home."},
    {"norwegian": "Hun smilte, fordi hun var lykkelig.", "russian": "Она улыбалась, потому что была счастлива.", "english": "She smiled because she was happy."}
];


const extraWords = ["og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem", "derfor", "som", "at", "om", "så", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem", "derfor", "som", "at", "om", "så"];

let currentSentence = {};
let selectedWords = [];
let correctCount = 0;
let incorrectCount = 0;

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
    document.getElementById("englishSentence").textContent = currentSentence.english; // Добавляем английский вариант предложения
    document.getElementById("sentence").textContent = ""; // Очищаем поле для набранного предложения
    const words = currentSentence.norwegian.split(/(\s|,|\.|!|\?)/).filter(word => word.trim() !== ""); // Разделяем слова и знаки препинания, удаляем пробелы
    const randomExtraWords = getRandomWords(extraWords, 16 - words.length);
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
    wordElement.style.display = "none"; // Убираем выбранное слово из списка
    const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 "); // Удаляем пробелы вокруг знаков препинания
    document.getElementById("sentence").textContent = selectedSentence;
    document.getElementById("feedback").textContent = ""; // Очищаем поле обратной связи
    document.getElementById("correctAnswer").textContent = ""; // Очищаем поле правильного ответа
}

function removeLastWord() {
    if (selectedWords.length > 0) {
        const lastWord = selectedWords.pop();
        const wordsContainer = document.getElementById("wordsContainer");
        const wordElement = document.createElement("button");
        wordElement.textContent = lastWord;
        wordElement.classList.add("word");
        wordElement.onclick = () => selectWord(lastWord, wordElement);
        wordsContainer.appendChild(wordElement);
        const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 "); // Удаляем пробелы вокруг знаков препинания
        document.getElementById("sentence").textContent = selectedSentence;
    }
}

function normalizeSentence(sentence) {
    return sentence.replace(/\s*([,\.!?])\s*/g, "$1").trim(); // Удаляем пробелы вокруг знаков препинания и обрезаем пробелы в начале и конце
}

function checkAnswer() {
    const selectedSentence = normalizeSentence(selectedWords.join(" ")); // Нормализуем выбранное предложение
    const correctSentence = normalizeSentence(currentSentence.norwegian); // Нормализуем правильное предложение
    if (selectedSentence === correctSentence) {
        document.getElementById("feedback").textContent = "Riktig!";
        document.getElementById("feedback").style.color = "green";
        document.getElementById("correctAnswer").textContent = ""; // Очищаем поле правильного ответа
        correctCount++;
        document.getElementById("correctCount").textContent = correctCount;
    } else {
        document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
        document.getElementById("feedback").style.color = "red";
        document.getElementById("correctAnswer").textContent = `Riktig svar: ${currentSentence.norwegian}`; // Отображаем правильный ответ
        incorrectCount++;
        document.getElementById("incorrectCount").textContent = incorrectCount;
    }
    selectedWords = [];
    displaySentence();
}

document.getElementById("checkAnswer").onclick = checkAnswer;
document.getElementById("removeLastWord").onclick = removeLastWord;

window.onload = displaySentence;





// const extraWords = ["og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem", "derfor", "som", "at", "om", "så", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem", "derfor", "som", "at", "om", "så"];

// let currentSentence = {};
// let selectedWords = [];
// let correctCount = 0;
// let incorrectCount = 0;

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
//     document.getElementById("russianSentence").textContent = currentSentence.russian;
//     document.getElementById("sentence").textContent = ""; // Очищаем поле для набранного предложения
//     const words = currentSentence.norwegian.split(/(\s|,|\.|!|\?)/).filter(word => word.trim() !== ""); // Разделяем слова и знаки препинания, удаляем пробелы
//     const randomExtraWords = getRandomWords(extraWords, 17 - words.length);
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
//     const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 "); // Удаляем пробелы вокруг знаков препинания
//     document.getElementById("sentence").textContent = selectedSentence;
//     document.getElementById("feedback").textContent = ""; // Очищаем поле обратной связи
//     document.getElementById("correctAnswer").textContent = ""; // Очищаем поле правильного ответа
// }

// function removeLastWord() {
//     if (selectedWords.length > 0) {
//         const lastWord = selectedWords.pop();
//         const wordsContainer = document.getElementById("wordsContainer");
//         const wordElement = document.createElement("button");
//         wordElement.textContent = lastWord;
//         wordElement.classList.add("word");
//         wordElement.onclick = () => selectWord(lastWord, wordElement);
//         wordsContainer.appendChild(wordElement);
//         const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 "); // Удаляем пробелы вокруг знаков препинания
//         document.getElementById("sentence").textContent = selectedSentence;
//     }
// }

// function normalizeSentence(sentence) {
//     return sentence.replace(/\s*([,\.!?])\s*/g, "$1").trim(); // Удаляем пробелы вокруг знаков препинания и обрезаем пробелы в начале и конце
// }

// function checkAnswer() {
//     const selectedSentence = normalizeSentence(selectedWords.join(" ")); // Нормализуем выбранное предложение
//     const correctSentence = normalizeSentence(currentSentence.norwegian); // Нормализуем правильное предложение
//     if (selectedSentence === correctSentence) {
//         document.getElementById("feedback").textContent = "Riktig!";
//         document.getElementById("feedback").style.color = "green";
//         document.getElementById("correctAnswer").textContent = ""; // Очищаем поле правильного ответа
//         correctCount++;
//         document.getElementById("correctCount").textContent = correctCount;
//     } else {
//         document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
//         document.getElementById("feedback").style.color = "red";
//         document.getElementById("correctAnswer").textContent = `Riktig svar: ${currentSentence.norwegian}`; // Отображаем правильный ответ
//         incorrectCount++;
//         document.getElementById("incorrectCount").textContent = incorrectCount;
//     }
//     selectedWords = [];
//     displaySentence();
// }

// document.getElementById("checkAnswer").onclick = checkAnswer;
// document.getElementById("removeLastWord").onclick = removeLastWord;

// window.onload = displaySentence;














// const extraWords = ["og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem"];

// let currentSentence = {};
// let selectedWords = [];
// let correctCount = 0;
// let incorrectCount = 0;

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
//     document.getElementById("russianSentence").textContent = currentSentence.russian;
//     document.getElementById("sentence").textContent = ""; // Очищаем поле для набранного предложения
//     const words = currentSentence.norwegian.split(/(\s|,)/).filter(word => word.trim() !== ""); // Разделяем слова и запятые, удаляем пробелы
//     const randomExtraWords = getRandomWords(extraWords, 17 - words.length);
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
//     const selectedSentence = selectedWords.join(" ").replace(/\s*,\s*/g, ", "); // Удаляем пробелы вокруг запятых
//     document.getElementById("sentence").textContent = selectedSentence;
//     document.getElementById("feedback").textContent = ""; // Очищаем поле обратной связи
//     document.getElementById("correctAnswer").textContent = ""; // Очищаем поле правильного ответа
// }

// function removeLastWord() {
//     if (selectedWords.length > 0) {
//         const lastWord = selectedWords.pop();
//         const wordsContainer = document.getElementById("wordsContainer");
//         const wordElement = document.createElement("button");
//         wordElement.textContent = lastWord;
//         wordElement.classList.add("word");
//         wordElement.onclick = () => selectWord(lastWord, wordElement);
//         wordsContainer.appendChild(wordElement);
//         const selectedSentence = selectedWords.join(" ").replace(/\s*,\s*/g, ", "); // Удаляем пробелы вокруг запятых
//         document.getElementById("sentence").textContent = selectedSentence;
//     }
// }

// function checkAnswer() {
//     const selectedSentence = selectedWords.join(" ").replace(/\s*,\s*/g, ", "); // Удаляем пробелы вокруг запятых
//     if (selectedSentence === currentSentence.norwegian) {
//         document.getElementById("feedback").textContent = "Riktig!";
//         document.getElementById("feedback").style.color = "green";
//         document.getElementById("correctAnswer").textContent = ""; // Очищаем поле правильного ответа
//         correctCount++;
//         document.getElementById("correctCount").textContent = correctCount;
//     } else {
//         document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
//         document.getElementById("feedback").style.color = "red";
//         document.getElementById("correctAnswer").textContent = `Riktig svar: ${currentSentence.norwegian}`; // Отображаем правильный ответ
//         incorrectCount++;
//         document.getElementById("incorrectCount").textContent = incorrectCount;
//     }
//     selectedWords = [];
//     displaySentence();
// }

// document.getElementById("checkAnswer").onclick = checkAnswer;
// document.getElementById("removeLastWord").onclick = removeLastWord;

// window.onload = displaySentence;



// const sentences = [
//     {
//         norwegian: "Jeg liker, å spise epler",
//         russian: "Я люблю есть яблоки"
//     },
//     {
//         norwegian: "Han går, til skolen",
//         russian: "Он идет в школу"
//     },
//     {
//         norwegian: "Vi bor, i Norge",
//         russian: "Мы живем в Норвегии"
//     }
// ];

// const extraWords = ["og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem"];

// let currentSentence = {};
// let selectedWords = [];
// let correctCount = 0;
// let incorrectCount = 0;

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
//     document.getElementById("russianSentence").textContent = currentSentence.russian;
//     document.getElementById("sentence").textContent = ""; // Очищаем поле для набранного предложения
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

// function removeLastWord() {
//     if (selectedWords.length > 0) {
//         const lastWord = selectedWords.pop();
//         const wordsContainer = document.getElementById("wordsContainer");
//         const wordElement = document.createElement("button");
//         wordElement.textContent = lastWord;
//         wordElement.classList.add("word");
//         wordElement.onclick = () => selectWord(lastWord, wordElement);
//         wordsContainer.appendChild(wordElement);
//         const selectedSentence = selectedWords.join(" ");
//         document.getElementById("sentence").textContent = selectedSentence;
//     }
// }
// function checkAnswer() {
//     const selectedSentence = selectedWords.join(" ");
//     if (selectedSentence === currentSentence.norwegian) {
//         document.getElementById("feedback").textContent = "Riktig!";
//         document.getElementById("feedback").style.color = "green";
//         document.getElementById("correctAnswer").textContent = ""; // Очищаем поле правильного ответа
//         correctCount++;
//         document.getElementById("correctCount").textContent = correctCount;
//     } else {
//         document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
//         document.getElementById("feedback").style.color = "red";
//         document.getElementById("correctAnswer").textContent = `Riktig svar: ${currentSentence.norwegian}`; // Отображаем правильный ответ
//         incorrectCount++;
//         document.getElementById("incorrectCount").textContent = incorrectCount;
//     }
//     selectedWords = [];
//     displaySentence();
// }

// document.getElementById("checkAnswer").onclick = checkAnswer;
// document.getElementById("removeLastWord").onclick = removeLastWord;

// window.onload = displaySentence;

