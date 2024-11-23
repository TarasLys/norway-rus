// Список глаголов с формами
const verbs = [
        {
        "infinitiv": "være",
        "presens": "er",
        "preteritum": "var",
        "perfektum": "vært"
    },
    {
        "infinitiv": "ha",
        "presens": "har",
        "preteritum": "hadde",
        "perfektum": "hatt"
    },
    {
        "infinitiv": "gjøre",
        "presens": "gjør",
        "preteritum": "gjorde",
        "perfektum": "gjort"
    },
    {
        "infinitiv": "si",
        "presens": "sier",
        "preteritum": "sa",
        "perfektum": "sagt"
    },
    {
        "infinitiv": "gå",
        "presens": "går",
        "preteritum": "gikk",
        "perfektum": "gått"
    },
    {
        "infinitiv": "komme",
        "presens": "kommer",
        "preteritum": "kom",
        "perfektum": "kommet"
    },
    {
        "infinitiv": "se",
        "presens": "ser",
        "preteritum": "så",
        "perfektum": "sett"
    },
    {
        "infinitiv": "bli",
        "presens": "blir",
        "preteritum": "ble",
        "perfektum": "blitt"
    },
    {
        "infinitiv": "få",
        "presens": "får",
        "preteritum": "fikk",
        "perfektum": "fått"
    },
    {
        "infinitiv": "ta",
        "presens": "tar",
        "preteritum": "tok",
        "perfektum": "tatt"
    },
    {
        "infinitiv": "kunne",
        "presens": "kan",
        "preteritum": "kunne",
        "perfektum": "kunnet"
    },
    {
        "infinitiv": "ville",
        "presens": "vil",
        "preteritum": "ville",
        "perfektum": "villet"
    },
    {
        "infinitiv": "skulle",
        "presens": "skal",
        "preteritum": "skulle",
        "perfektum": "skullet"
    },
    {
        "infinitiv": "måtte",
        "presens": "må",
        "preteritum": "måtte",
        "perfektum": "måttet"
    },
    {
        "infinitiv": "vite",
        "presens": "vet",
        "preteritum": "visste",
        "perfektum": "visst"
    },
    {
        "infinitiv": "tro",
        "presens": "tror",
        "preteritum": "trodde",
        "perfektum": "trodd"
    },
    {
        "infinitiv": "tenke",
        "presens": "tenker",
        "preteritum": "tenkte",
        "perfektum": "tenkt"
    },
    {
        "infinitiv": "like",
        "presens": "liker",
        "preteritum": "likte",
        "perfektum": "likt"
    },
    {
        "infinitiv": "elske",
        "presens": "elsker",
        "preteritum": "elsket",
        "perfektum": "elsket"
    },
    {
        "infinitiv": "høre",
        "presens": "hører",
        "preteritum": "hørte",
        "perfektum": "hørt"
    },
    {
        "infinitiv": "finne",
        "presens": "finner",
        "preteritum": "fant",
        "perfektum": "funnet"
    },
    {
        "infinitiv": "spørre",
        "presens": "spør",
        "preteritum": "spurte",
        "perfektum": "spurt"
    },
    {
        "infinitiv": "kjenne",
        "presens": "kjenner",
        "preteritum": "kjente",
        "perfektum": "kjent"
    },
    {
        "infinitiv": "sove",
        "presens": "sover",
        "preteritum": "sov",
        "perfektum": "sovet"
    },
    {
        "infinitiv": "leve",
        "presens": "lever",
        "preteritum": "levde",
        "perfektum": "levd"
    },
    {
        "infinitiv": "dø",
        "presens": "dør",
        "preteritum": "døde",
        "perfektum": "dødd"
    },
    {
        "infinitiv": "løpe",
        "presens": "løper",
        "preteritum": "løp",
        "perfektum": "løpt"
    },
    {
        "infinitiv": "skrive",
        "presens": "skriver",
        "preteritum": "skrev",
        "perfektum": "skrevet"
    },
    {
        "infinitiv": "lese",
        "presens": "leser",
        "preteritum": "leste",
        "perfektum": "lest"
    },
    {
        "infinitiv": "lage",
        "presens": "lager",
        "preteritum": "laget",
        "perfektum": "laget"
    },
    {
        "infinitiv": "spise",
        "presens": "spiser",
        "preteritum": "spiste",
        "perfektum": "spist"
    },
    {
        "infinitiv": "drikke",
        "presens": "drikker",
        "preteritum": "drakk",
        "perfektum": "drukket"
    },
    {
        "infinitiv": "kjøpe",
        "presens": "kjøper",
        "preteritum": "kjøpte",
        "perfektum": "kjøpt"
    },
    {
        "infinitiv": "selge",
        "presens": "selger",
        "preteritum": "solgte",
        "perfektum": "solgt"
    },
    {
        "infinitiv": "stå",
        "presens": "står",
        "preteritum": "sto",
        "perfektum": "stått"
    },
    {
        "infinitiv": "sitte",
        "presens": "sitter",
        "preteritum": "satt",
        "perfektum": "sittet"
    },
    {
        "infinitiv": "ligge",
        "presens": "ligger",
        "preteritum": "lå",
        "perfektum": "ligget"
    },
    {
        "infinitiv": "gi",
        "presens": "gir",
        "preteritum": "ga",
        "perfektum": "gitt"
    },
    {
        "infinitiv": "ta imot",
        "presens": "tar imot",
        "preteritum": "tok imot",
        "perfektum": "tatt imot"
    },
    {
        "infinitiv": "kjøre",
        "presens": "kjører",
        "preteritum": "kjørte",
        "perfektum": "kjørt"
    },
    {
        "infinitiv": "åpne",
        "presens": "åpner",
        "preteritum": "åpnet",
        "perfektum": "åpnet"
    },
    {
        "infinitiv": "lukke",
        "presens": "lukker",
        "preteritum": "lukket",
        "perfektum": "lukket"
    },
    {
        "infinitiv": "hente",
        "presens": "henter",
        "preteritum": "hentet",
        "perfektum": "hentet"
    },
    {
        "infinitiv": "ringe",
        "presens": "ringer",
        "preteritum": "ringte",
        "perfektum": "ringt"
    },
    {
        "infinitiv": "betale",
        "presens": "betaler",
        "preteritum": "betalte",
        "perfektum": "betalt"
    },
    {
        "infinitiv": "forstå",
        "presens": "forstår",
        "preteritum": "forsto",
        "perfektum": "forstått"
    },
    {
        "infinitiv": "glemme",
        "presens": "glemmer",
        "preteritum": "glemte",
        "perfektum": "glemt"
    },
    {
        "infinitiv": "hjelpe",
        "presens": "hjelper",
        "preteritum": "hjalp",
        "perfektum": "hjulpet"
    },
    {
        "infinitiv": "fortelle",
        "presens": "forteller",
        "preteritum": "fortalte",
        "perfektum": "fortalt"
    },
    {
        "infinitiv": "vente",
        "presens": "venter",
        "preteritum": "ventet",
        "perfektum": "ventet"
    },
    {
        "infinitiv": "reise",
        "presens": "reiser",
        "preteritum": "reiste",
        "perfektum": "reist"
    },
    {
        "infinitiv": "prøve",
        "presens": "prøver",
        "preteritum": "prøvde",
        "perfektum": "prøvd"
    },
    {
        "infinitiv": "møte",
        "presens": "møter",
        "preteritum": "møtte",
        "perfektum": "møtt"
    },
    {
        "infinitiv": "arbeide",
        "presens": "arbeider",
        "preteritum": "arbeidet",
        "perfektum": "arbeidet"
    },
    {
        "infinitiv": "låne",
        "presens": "låner",
        "preteritum": "lånte",
        "perfektum": "lånt"
    },
    {
        "infinitiv": "selge",
        "presens": "selger",
        "preteritum": "solgte",
        "perfektum": "solgt"
    },
    {
        "infinitiv": "spille",
        "presens": "spiller",
        "preteritum": "spilte",
        "perfektum": "spilt"
    },
    {
        "infinitiv": "vite",
        "presens": "vet",
        "preteritum": "visste",
        "perfektum": "visst"
    },
    {
        "infinitiv": "bære",
        "presens": "bærer",
        "preteritum": "bar",
        "perfektum": "båret"
    },
    {
        "infinitiv": "kjøpe",
        "presens": "kjøper",
        "preteritum": "kjøpte",
        "perfektum": "kjøpt"
    },
    {
        "infinitiv": "bygge",
        "presens": "bygger",
        "preteritum": "bygget",
        "perfektum": "bygget"
    },
    {
        "infinitiv": "danse",
        "presens": "danser",
        "preteritum": "danset",
        "perfektum": "danset"
    },
    {
        "infinitiv": "tegne",
        "presens": "tegner",
        "preteritum": "tegnet",
        "perfektum": "tegnet"
    },
    {
        "infinitiv": "hoppe",
        "presens": "hopper",
        "preteritum": "hoppet",
        "perfektum": "hoppet"
    },
    {
        "infinitiv": "flytte",
        "presens": "flytter",
        "preteritum": "flyttet",
        "perfektum": "flyttet"
    },
    {
        "infinitiv": "studere",
        "presens": "studerer",
        "preteritum": "studerte",
        "perfektum": "studert"
    },
    {
        "infinitiv": "våkne",
        "presens": "våkner",
        "preteritum": "våknet",
        "perfektum": "våknet"
    },
    {
        "infinitiv": "bestille",
        "presens": "bestiller",
        "preteritum": "bestilte",
        "perfektum": "bestilt"
    },
    {
        "infinitiv": "planlegge",
        "presens": "planlegger",
        "preteritum": "planla",
        "perfektum": "planlagt"
    },
    {
        "infinitiv": "gråte",
        "presens": "gråter",
        "preteritum": "gråt",
        "perfektum": "grått"
    },
    {
        "infinitiv": "smile",
        "presens": "smiler",
        "preteritum": "smilte",
        "perfektum": "smilt"
    },
    {
        "infinitiv": "le",
        "presens": "ler",
        "preteritum": "lo",
        "perfektum": "ledd"
    },
    {
        "infinitiv": "klippe",
        "presens": "klipper",
        "preteritum": "klippet",
        "perfektum": "klippet"
    },
    {
        "infinitiv": "skynde",
        "presens": "skynder",
        "preteritum": "skyndte",
        "perfektum": "skyndt"
    },
    {
        "infinitiv": "bruke",
        "presens": "bruker",
        "preteritum": "brukte",
        "perfektum": "brukt"
    },
    {
        "infinitiv": "låse",
        "presens": "låser",
        "preteritum": "låste",
        "perfektum": "låst"
    },
    {
        "infinitiv": "huske",
        "presens": "husker",
        "preteritum": "husket",
        "perfektum": "husket"
    },
    {
        "infinitiv": "besøke",
        "presens": "besøker",
        "preteritum": "besøkte",
        "perfektum": "besøkt"
    }

//   { infinitiv: "være", presens: "er", preteritum: "var", perfektum: "vært" },
//   { infinitiv: "ha", presens: "har", preteritum: "hadde", perfektum: "hatt" },
//   { infinitiv: "gjøre", presens: "gjør", preteritum: "gjorde", perfektum: "gjort" },
//   { infinitiv: "si", presens: "sier", preteritum: "sa", perfektum: "sagt" },
//   { infinitiv: "få", presens: "får", preteritum: "fikk", perfektum: "fått" },
//   { infinitiv: "komme", presens: "kommer", preteritum: "kom", perfektum: "kommet" },
//   { infinitiv: "gå", presens: "går", preteritum: "gikk", perfektum: "gått" },
//   { infinitiv: "se", presens: "ser", preteritum: "så", perfektum: "sett" },
//   { infinitiv: "ta", presens: "tar", preteritum: "tok", perfektum: "tatt" },
//   { infinitiv: "like", presens: "liker", preteritum: "likte", perfektum: "likt" },
//   { infinitiv: "kunne", presens: "kan", preteritum: "kunne", perfektum: "kunnet" },
//   { infinitiv: "ville", presens: "vil", preteritum: "ville", perfektum: "villet" },
//   { infinitiv: "måtte", presens: "må", preteritum: "måtte", perfektum: "måttet" },
//   { infinitiv: "skulle", presens: "skal", preteritum: "skulle", perfektum: "skullet" },
//   { infinitiv: "bli", presens: "blir", preteritum: "ble", perfektum: "blitt" },
//   { infinitiv: "spise", presens: "spiser", preteritum: "spiste", perfektum: "spist" },
//   { infinitiv: "drikke", presens: "drikker", preteritum: "drakk", perfektum: "drukket" },
//   { infinitiv: "lese", presens: "leser", preteritum: "leste", perfektum: "lest" },
//   { infinitiv: "skrive", presens: "skriver", preteritum: "skrev", perfektum: "skrevet" },
//   { infinitiv: "bo", presens: "bor", preteritum: "bodde", perfektum: "bodd" },
//   { infinitiv: "snakke", presens: "snakker", preteritum: "snakket", perfektum: "snakket" },
//   { infinitiv: "jobbe", presens: "jobber", preteritum: "jobbet", perfektum: "jobbet" },
//   { infinitiv: "høre", presens: "hører", preteritum: "hørte", perfektum: "hørt" },
//   { infinitiv: "kjøpe", presens: "kjøper", preteritum: "kjøpte", perfektum: "kjøpt" },
//   { infinitiv: "leve", presens: "lever", preteritum: "levde", perfektum: "levd" },
//   { infinitiv: "tenke", presens: "tenker", preteritum: "tenkte", perfektum: "tenkt" },
//   { infinitiv: "betale", presens: "betaler", preteritum: "betalte", perfektum: "betalt" },
//   { infinitiv: "velge", presens: "velger", preteritum: "valgte", perfektum: "valgt" },
//   { infinitiv: "kjenne", presens: "kjenner", preteritum: "kjente", perfektum: "kjent" },
//   { infinitiv: "sove", presens: "sover", preteritum: "sov", perfektum: "sovet" },
];

// Функция для случайного выбора элемента из массива
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Функция для запуска викторины
function startQuiz() {
  let score = 0;
  const rounds = 10; // Количество раундов
  let currentRound = 0;

  const quizContainer = document.getElementById("quizContainer");
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");

  quizContainer.style.display = "block";

  function askQuestion() {
    const verb = getRandomElement(verbs);
    const forms = ["infinitiv", "presens", "preteritum", "perfektum"];
    const randomForm = getRandomElement(forms);
    const correctAnswer = verb[randomForm];

    questionElement.textContent = `Назови форму '${randomForm}' для глагола '${verb.infinitiv}':`;
    answerInput.value = "";
    answerInput.focus();

    document.getElementById("submitAnswer").onclick = function() {
      const userAnswer = answerInput.value;
      if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.textContent = "Правильно!";
        feedbackElement.style.color = "green";
        feedbackElement.style.animation = "none";
        score++;
      } else {
        feedbackElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}.`;
        feedbackElement.style.color = "red";
        feedbackElement.style.animation = "blink 1s step-end infinite";
      }
      currentRound++;
      if (currentRound < rounds) {
        askQuestion();
      } else {
        quizContainer.style.display = "none";
        scoreElement.textContent = `Игра окончена! Твой счет: ${score}/${rounds}.`;
      }
    };
  }

  askQuestion();
}

document.getElementById("startQuiz").onclick = startQuiz;

// Добавляем CSS для мигания текста
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blink {
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);

