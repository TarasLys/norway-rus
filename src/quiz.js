// Список глаголов с формами
const verbs = [
    
    {
        "infinitiv": "å være",
        "presens": "er",
        "preteritum": "var",
        "perfektum": "har vært"
    },
    {
        "infinitiv": "å ha",
        "presens": "har",
        "preteritum": "hadde",
        "perfektum": "har hatt"
    },
    {
        "infinitiv": "å gjøre",
        "presens": "gjør",
        "preteritum": "gjorde",
        "perfektum": "har gjort"
    },
    {
        "infinitiv": "å si",
        "presens": "sier",
        "preteritum": "sa",
        "perfektum": "har sagt"
    },
    {
        "infinitiv": "å gå",
        "presens": "går",
        "preteritum": "gikk",
        "perfektum": "har gått"
    },
    {
        "infinitiv": "å komme",
        "presens": "kommer",
        "preteritum": "kom",
        "perfektum": "har kommet"
    },
    {
        "infinitiv": "å se",
        "presens": "ser",
        "preteritum": "så",
        "perfektum": "har sett"
    },
    {
        "infinitiv": "å bli",
        "presens": "blir",
        "preteritum": "ble",
        "perfektum": "har blitt"
    },
    {
        "infinitiv": "å få",
        "presens": "får",
        "preteritum": "fikk",
        "perfektum": "har fått"
    },
    {
        "infinitiv": "å ta",
        "presens": "tar",
        "preteritum": "tok",
        "perfektum": "har tatt"
    },
    {
        "infinitiv": "å kunne",
        "presens": "kan",
        "preteritum": "kunne",
        "perfektum": "har kunnet"
    },
    {
        "infinitiv": "å ville",
        "presens": "vil",
        "preteritum": "ville",
        "perfektum": "har villet"
    },
    {
        "infinitiv": "å skulle",
        "presens": "skal",
        "preteritum": "skulle",
        "perfektum": "har skullet"
    },
    {
        "infinitiv": "å måtte",
        "presens": "må",
        "preteritum": "måtte",
        "perfektum": "har måttet"
    },
    {
        "infinitiv": "å vite",
        "presens": "vet",
        "preteritum": "visste",
        "perfektum": "har visst"
    },
    {
        "infinitiv": "å tro",
        "presens": "tror",
        "preteritum": "trodde",
        "perfektum": "har trodd"
    },
    {
        "infinitiv": "å tenke",
        "presens": "tenker",
        "preteritum": "tenkte",
        "perfektum": "har tenkt"
    },
    {
        "infinitiv": "å like",
        "presens": "liker",
        "preteritum": "likte",
        "perfektum": "har likt"
    },
    {
        "infinitiv": "å elske",
        "presens": "elsker",
        "preteritum": "elsket",
        "perfektum": "har elsket"
    },
    {
        "infinitiv": "å høre",
        "presens": "hører",
        "preteritum": "hørte",
        "perfektum": "har hørt"
    },
    {
        "infinitiv": "å finne",
        "presens": "finner",
        "preteritum": "fant",
        "perfektum": "har funnet"
    },
    {
        "infinitiv": "å spørre",
        "presens": "spør",
        "preteritum": "spurte",
        "perfektum": "har spurt"
    },
    {
        "infinitiv": "å kjenne",
        "presens": "kjenner",
        "preteritum": "kjente",
        "perfektum": "har kjent"
    },
    {
        "infinitiv": "å sove",
        "presens": "sover",
        "preteritum": "sov",
        "perfektum": "har sovet"
    },
    {
        "infinitiv": "å leve",
        "presens": "lever",
        "preteritum": "levde",
        "perfektum": "har levd"
    },
    {
        "infinitiv": "å dø",
        "presens": "dør",
        "preteritum": "døde",
        "perfektum": "har dødd"
    },
    {
        "infinitiv": "å løpe",
        "presens": "løper",
        "preteritum": "løp",
        "perfektum": "har løpt"
    },
    {
        "infinitiv": "å skrive",
        "presens": "skriver",
        "preteritum": "skrev",
        "perfektum": "har skrevet"
    },
    {
        "infinitiv": "å lese",
        "presens": "leser",
        "preteritum": "leste",
        "perfektum": "har lest"
    },
    {
        "infinitiv": "å lage",
        "presens": "lager",
        "preteritum": "laget",
        "perfektum": "har laget"
    },
    {
        "infinitiv": "å spise",
        "presens": "spiser",
        "preteritum": "spiste",
        "perfektum": "har spist"
    },
    {
        "infinitiv": "å drikke",
        "presens": "drikker",
        "preteritum": "drakk",
        "perfektum": "har drukket"
    },
    {
        "infinitiv": "å kjøpe",
        "presens": "kjøper",
        "preteritum": "kjøpte",
        "perfektum": "har kjøpt"
    },
    {
        "infinitiv": "å selge",
        "presens": "selger",
        "preteritum": "solgte",
        "perfektum": "har solgt"
    },
    {
        "infinitiv": "å stå",
        "presens": "står",
        "preteritum": "sto",
        "perfektum": "har stått"
    },
    {
        "infinitiv": "å sitte",
        "presens": "sitter",
        "preteritum": "satt",
        "perfektum": "har sittet"
    },
    {
        "infinitiv": "å ligge",
        "presens": "ligger",
        "preteritum": "lå",
        "perfektum": "har ligget"
    },
    {
        "infinitiv": "å gi",
        "presens": "gir",
        "preteritum": "ga",
        "perfektum": "har gitt"
    },
    {
        "infinitiv": "å ta imot",
        "presens": "tar imot",
        "preteritum": "tok imot",
        "perfektum": "har tatt imot"
    },
    {
        "infinitiv": "å kjøre",
        "presens": "kjører",
        "preteritum": "kjørte",
        "perfektum": "har kjørt"
    },
    {
        "infinitiv": "å åpne",
        "presens": "åpner",
        "preteritum": "åpnet",
        "perfektum": "har åpnet"
    },
    {
        "infinitiv": "å lukke",
        "presens": "lukker",
        "preteritum": "lukket",
        "perfektum": "har lukket"
    },
    {
        "infinitiv": "å hente",
        "presens": "henter",
        "preteritum": "hentet",
        "perfektum": "har hentet"
    },
    {
        "infinitiv": "å ringe",
        "presens": "ringer",
        "preteritum": "ringte",
        "perfektum": "har ringt"
    },
    {
        "infinitiv": "å betale",
        "presens": "betaler",
        "preteritum": "betalte",
        "perfektum": "har betalt"
    },


    //     {
    //     "infinitiv": "være",
    //     "presens": "er",
    //     "preteritum": "var",
    //     "perfektum": "vært"
    // },
    // {
    //     "infinitiv": "ha",
    //     "presens": "har",
    //     "preteritum": "hadde",
    //     "perfektum": "hatt"
    // },
    // {
    //     "infinitiv": "gjøre",
    //     "presens": "gjør",
    //     "preteritum": "gjorde",
    //     "perfektum": "gjort"
    // },
    // {
    //     "infinitiv": "si",
    //     "presens": "sier",
    //     "preteritum": "sa",
    //     "perfektum": "sagt"
    // },
    // {
    //     "infinitiv": "gå",
    //     "presens": "går",
    //     "preteritum": "gikk",
    //     "perfektum": "gått"
    // },
    // {
    //     "infinitiv": "komme",
    //     "presens": "kommer",
    //     "preteritum": "kom",
    //     "perfektum": "kommet"
    // },
    // {
    //     "infinitiv": "se",
    //     "presens": "ser",
    //     "preteritum": "så",
    //     "perfektum": "sett"
    // },
    // {
    //     "infinitiv": "bli",
    //     "presens": "blir",
    //     "preteritum": "ble",
    //     "perfektum": "blitt"
    // },
    // {
    //     "infinitiv": "få",
    //     "presens": "får",
    //     "preteritum": "fikk",
    //     "perfektum": "fått"
    // },
    // {
    //     "infinitiv": "ta",
    //     "presens": "tar",
    //     "preteritum": "tok",
    //     "perfektum": "tatt"
    // },
    // {
    //     "infinitiv": "kunne",
    //     "presens": "kan",
    //     "preteritum": "kunne",
    //     "perfektum": "kunnet"
    // },
    // {
    //     "infinitiv": "ville",
    //     "presens": "vil",
    //     "preteritum": "ville",
    //     "perfektum": "villet"
    // },
    // {
    //     "infinitiv": "skulle",
    //     "presens": "skal",
    //     "preteritum": "skulle",
    //     "perfektum": "skullet"
    // },
    // {
    //     "infinitiv": "måtte",
    //     "presens": "må",
    //     "preteritum": "måtte",
    //     "perfektum": "måttet"
    // },
    // {
    //     "infinitiv": "vite",
    //     "presens": "vet",
    //     "preteritum": "visste",
    //     "perfektum": "visst"
    // },
    // {
    //     "infinitiv": "tro",
    //     "presens": "tror",
    //     "preteritum": "trodde",
    //     "perfektum": "trodd"
    // },
    // {
    //     "infinitiv": "tenke",
    //     "presens": "tenker",
    //     "preteritum": "tenkte",
    //     "perfektum": "tenkt"
    // },
    // {
    //     "infinitiv": "like",
    //     "presens": "liker",
    //     "preteritum": "likte",
    //     "perfektum": "likt"
    // },
    // {
    //     "infinitiv": "elske",
    //     "presens": "elsker",
    //     "preteritum": "elsket",
    //     "perfektum": "elsket"
    // },
    // {
    //     "infinitiv": "høre",
    //     "presens": "hører",
    //     "preteritum": "hørte",
    //     "perfektum": "hørt"
    // },
    // {
    //     "infinitiv": "finne",
    //     "presens": "finner",
    //     "preteritum": "fant",
    //     "perfektum": "funnet"
    // },
    // {
    //     "infinitiv": "spørre",
    //     "presens": "spør",
    //     "preteritum": "spurte",
    //     "perfektum": "spurt"
    // },
    // {
    //     "infinitiv": "kjenne",
    //     "presens": "kjenner",
    //     "preteritum": "kjente",
    //     "perfektum": "kjent"
    // },
    // {
    //     "infinitiv": "sove",
    //     "presens": "sover",
    //     "preteritum": "sov",
    //     "perfektum": "sovet"
    // },
    // {
    //     "infinitiv": "leve",
    //     "presens": "lever",
    //     "preteritum": "levde",
    //     "perfektum": "levd"
    // },
    // {
    //     "infinitiv": "dø",
    //     "presens": "dør",
    //     "preteritum": "døde",
    //     "perfektum": "dødd"
    // },
    // {
    //     "infinitiv": "løpe",
    //     "presens": "løper",
    //     "preteritum": "løp",
    //     "perfektum": "løpt"
    // },
    // {
    //     "infinitiv": "skrive",
    //     "presens": "skriver",
    //     "preteritum": "skrev",
    //     "perfektum": "skrevet"
    // },
    // {
    //     "infinitiv": "lese",
    //     "presens": "leser",
    //     "preteritum": "leste",
    //     "perfektum": "lest"
    // },
    // {
    //     "infinitiv": "lage",
    //     "presens": "lager",
    //     "preteritum": "laget",
    //     "perfektum": "laget"
    // },
    // {
    //     "infinitiv": "spise",
    //     "presens": "spiser",
    //     "preteritum": "spiste",
    //     "perfektum": "spist"
    // },
    // {
    //     "infinitiv": "drikke",
    //     "presens": "drikker",
    //     "preteritum": "drakk",
    //     "perfektum": "drukket"
    // },
    // {
    //     "infinitiv": "kjøpe",
    //     "presens": "kjøper",
    //     "preteritum": "kjøpte",
    //     "perfektum": "kjøpt"
    // },
    // {
    //     "infinitiv": "selge",
    //     "presens": "selger",
    //     "preteritum": "solgte",
    //     "perfektum": "solgt"
    // },
    // {
    //     "infinitiv": "stå",
    //     "presens": "står",
    //     "preteritum": "sto",
    //     "perfektum": "stått"
    // },
    // {
    //     "infinitiv": "sitte",
    //     "presens": "sitter",
    //     "preteritum": "satt",
    //     "perfektum": "sittet"
    // },
    // {
    //     "infinitiv": "ligge",
    //     "presens": "ligger",
    //     "preteritum": "lå",
    //     "perfektum": "ligget"
    // },
    // {
    //     "infinitiv": "gi",
    //     "presens": "gir",
    //     "preteritum": "ga",
    //     "perfektum": "gitt"
    // },
    // {
    //     "infinitiv": "ta imot",
    //     "presens": "tar imot",
    //     "preteritum": "tok imot",
    //     "perfektum": "tatt imot"
    // },
    // {
    //     "infinitiv": "kjøre",
    //     "presens": "kjører",
    //     "preteritum": "kjørte",
    //     "perfektum": "kjørt"
    // },
    // {
    //     "infinitiv": "åpne",
    //     "presens": "åpner",
    //     "preteritum": "åpnet",
    //     "perfektum": "åpnet"
    // },
    // {
    //     "infinitiv": "lukke",
    //     "presens": "lukker",
    //     "preteritum": "lukket",
    //     "perfektum": "lukket"
    // },
    // {
    //     "infinitiv": "hente",
    //     "presens": "henter",
    //     "preteritum": "hentet",
    //     "perfektum": "hentet"
    // },
    // {
    //     "infinitiv": "ringe",
    //     "presens": "ringer",
    //     "preteritum": "ringte",
    //     "perfektum": "ringt"
    // },
    // {
    //     "infinitiv": "betale",
    //     "presens": "betaler",
    //     "preteritum": "betalte",
    //     "perfektum": "betalt"
    // },
    // {
    //     "infinitiv": "forstå",
    //     "presens": "forstår",
    //     "preteritum": "forsto",
    //     "perfektum": "forstått"
    // },
    // {
    //     "infinitiv": "glemme",
    //     "presens": "glemmer",
    //     "preteritum": "glemte",
    //     "perfektum": "glemt"
    // },
    // {
    //     "infinitiv": "hjelpe",
    //     "presens": "hjelper",
    //     "preteritum": "hjalp",
    //     "perfektum": "hjulpet"
    // },
    // {
    //     "infinitiv": "fortelle",
    //     "presens": "forteller",
    //     "preteritum": "fortalte",
    //     "perfektum": "fortalt"
    // },
    // {
    //     "infinitiv": "vente",
    //     "presens": "venter",
    //     "preteritum": "ventet",
    //     "perfektum": "ventet"
    // },
    // {
    //     "infinitiv": "reise",
    //     "presens": "reiser",
    //     "preteritum": "reiste",
    //     "perfektum": "reist"
    // },
    // {
    //     "infinitiv": "prøve",
    //     "presens": "prøver",
    //     "preteritum": "prøvde",
    //     "perfektum": "prøvd"
    // },
    // {
    //     "infinitiv": "møte",
    //     "presens": "møter",
    //     "preteritum": "møtte",
    //     "perfektum": "møtt"
    // },
    // {
    //     "infinitiv": "arbeide",
    //     "presens": "arbeider",
    //     "preteritum": "arbeidet",
    //     "perfektum": "arbeidet"
    // },
    // {
    //     "infinitiv": "låne",
    //     "presens": "låner",
    //     "preteritum": "lånte",
    //     "perfektum": "lånt"
    // },
    // {
    //     "infinitiv": "selge",
    //     "presens": "selger",
    //     "preteritum": "solgte",
    //     "perfektum": "solgt"
    // },
    // {
    //     "infinitiv": "spille",
    //     "presens": "spiller",
    //     "preteritum": "spilte",
    //     "perfektum": "spilt"
    // },
    // {
    //     "infinitiv": "vite",
    //     "presens": "vet",
    //     "preteritum": "visste",
    //     "perfektum": "visst"
    // },
    // {
    //     "infinitiv": "bære",
    //     "presens": "bærer",
    //     "preteritum": "bar",
    //     "perfektum": "båret"
    // },
    // {
    //     "infinitiv": "kjøpe",
    //     "presens": "kjøper",
    //     "preteritum": "kjøpte",
    //     "perfektum": "kjøpt"
    // },
    // {
    //     "infinitiv": "bygge",
    //     "presens": "bygger",
    //     "preteritum": "bygget",
    //     "perfektum": "bygget"
    // },
    // {
    //     "infinitiv": "danse",
    //     "presens": "danser",
    //     "preteritum": "danset",
    //     "perfektum": "danset"
    // },
    // {
    //     "infinitiv": "tegne",
    //     "presens": "tegner",
    //     "preteritum": "tegnet",
    //     "perfektum": "tegnet"
    // },
    // {
    //     "infinitiv": "hoppe",
    //     "presens": "hopper",
    //     "preteritum": "hoppet",
    //     "perfektum": "hoppet"
    // },
    // {
    //     "infinitiv": "flytte",
    //     "presens": "flytter",
    //     "preteritum": "flyttet",
    //     "perfektum": "flyttet"
    // },
    // {
    //     "infinitiv": "studere",
    //     "presens": "studerer",
    //     "preteritum": "studerte",
    //     "perfektum": "studert"
    // },
    // {
    //     "infinitiv": "våkne",
    //     "presens": "våkner",
    //     "preteritum": "våknet",
    //     "perfektum": "våknet"
    // },
    // {
    //     "infinitiv": "bestille",
    //     "presens": "bestiller",
    //     "preteritum": "bestilte",
    //     "perfektum": "bestilt"
    // },
    // {
    //     "infinitiv": "planlegge",
    //     "presens": "planlegger",
    //     "preteritum": "planla",
    //     "perfektum": "planlagt"
    // },
    // {
    //     "infinitiv": "gråte",
    //     "presens": "gråter",
    //     "preteritum": "gråt",
    //     "perfektum": "grått"
    // },
    // {
    //     "infinitiv": "smile",
    //     "presens": "smiler",
    //     "preteritum": "smilte",
    //     "perfektum": "smilt"
    // },
    // {
    //     "infinitiv": "le",
    //     "presens": "ler",
    //     "preteritum": "lo",
    //     "perfektum": "ledd"
    // },
    // {
    //     "infinitiv": "klippe",
    //     "presens": "klipper",
    //     "preteritum": "klippet",
    //     "perfektum": "klippet"
    // },
    // {
    //     "infinitiv": "skynde",
    //     "presens": "skynder",
    //     "preteritum": "skyndte",
    //     "perfektum": "skyndt"
    // },
    // {
    //     "infinitiv": "bruke",
    //     "presens": "bruker",
    //     "preteritum": "brukte",
    //     "perfektum": "brukt"
    // },
    // {
    //     "infinitiv": "låse",
    //     "presens": "låser",
    //     "preteritum": "låste",
    //     "perfektum": "låst"
    // },
    // {
    //     "infinitiv": "huske",
    //     "presens": "husker",
    //     "preteritum": "husket",
    //     "perfektum": "husket"
    // },
    // {
    //     "infinitiv": "besøke",
    //     "presens": "besøker",
    //     "preteritum": "besøkte",
    //     "perfektum": "besøkt"
    // }
    
        {
            "infinitiv": "å forstå",
            "presens": "forstår",
            "preteritum": "forsto",
            "perfektum": "har forstått"
        },
        {
            "infinitiv": "å glemme",
            "presens": "glemmer",
            "preteritum": "glemte",
            "perfektum": "har glemt"
        },
        {
            "infinitiv": "å hjelpe",
            "presens": "hjelper",
            "preteritum": "hjalp",
            "perfektum": "har hjulpet"
        },
        {
            "infinitiv": "å fortelle",
            "presens": "forteller",
            "preteritum": "fortalte",
            "perfektum": "har fortalt"
        },
        {
            "infinitiv": "å vente",
            "presens": "venter",
            "preteritum": "ventet",
            "perfektum": "har ventet"
        },
        {
            "infinitiv": "å reise",
            "presens": "reiser",
            "preteritum": "reiste",
            "perfektum": "har reist"
        },
        {
            "infinitiv": "å prøve",
            "presens": "prøver",
            "preteritum": "prøvde",
            "perfektum": "har prøvd"
        },
        {
            "infinitiv": "å møte",
            "presens": "møter",
            "preteritum": "møtte",
            "perfektum": "har møtt"
        },
        {
            "infinitiv": "å arbeide",
            "presens": "arbeider",
            "preteritum": "arbeidet",
            "perfektum": "har arbeidet"
        },
        {
            "infinitiv": "å låne",
            "presens": "låner",
            "preteritum": "lånte",
            "perfektum": "har lånt"
        },
        {
            "infinitiv": "å selge",
            "presens": "selger",
            "preteritum": "solgte",
            "perfektum": "har solgt"
        },
        {
            "infinitiv": "å spille",
            "presens": "spiller",
            "preteritum": "spilte",
            "perfektum": "har spilt"
        },
        {
            "infinitiv": "å vite",
            "presens": "vet",
            "preteritum": "visste",
            "perfektum": "har visst"
        },
        {
            "infinitiv": "å bære",
            "presens": "bærer",
            "preteritum": "bar",
            "perfektum": "har båret"
        },
        {
            "infinitiv": "å kjøpe",
            "presens": "kjøper",
            "preteritum": "kjøpte",
            "perfektum": "har kjøpt"
        },
        {
            "infinitiv": "å bygge",
            "presens": "bygger",
            "preteritum": "bygget",
            "perfektum": "har bygget"
        },
        {
            "infinitiv": "å danse",
            "presens": "danser",
            "preteritum": "danset",
            "perfektum": "har danset"
        },
        {
            "infinitiv": "å tegne",
            "presens": "tegner",
            "preteritum": "tegnet",
            "perfektum": "har tegnet"
        },
        {
            "infinitiv": "å hoppe",
            "presens": "hopper",
            "preteritum": "hoppet",
            "perfektum": "har hoppet"
        },
        {
            "infinitiv": "å flytte",
            "presens": "flytter",
            "preteritum": "flyttet",
            "perfektum": "har flyttet"
        },
        {
            "infinitiv": "å studere",
            "presens": "studerer",
            "preteritum": "studerte",
            "perfektum": "har studert"
        },
        {
            "infinitiv": "å våkne",
            "presens": "våkner",
            "preteritum": "våknet",
            "perfektum": "har våknet"
        },
        {
            "infinitiv": "å bestille",
            "presens": "bestiller",
            "preteritum": "bestilte",
            "perfektum": "har bestilt"
        },
        {
            "infinitiv": "å planlegge",
            "presens": "planlegger",
            "preteritum": "planla",
            "perfektum": "har planlagt"
        },
        {
            "infinitiv": "å gråte",
            "presens": "gråter",
            "preteritum": "gråt",
            "perfektum": "har grått"
        },
        {
            "infinitiv": "å smile",
            "presens": "smiler",
            "preteritum": "smilte",
            "perfektum": "har smilt"
        },
        {
            "infinitiv": "å le",
            "presens": "ler",
            "preteritum": "lo",
            "perfektum": "har ledd"
        },
        {
            "infinitiv": "å klippe",
            "presens": "klipper",
            "preteritum": "klippet",
            "perfektum": "har klippet"
        },
        {
            "infinitiv": "å skynde",
            "presens": "skynder",
            "preteritum": "skyndte",
            "perfektum": "har skyndt"
        },
        {
            "infinitiv": "å bruke",
            "presens": "bruker",
            "preteritum": "brukte",
            "perfektum": "har brukt"
        },
        {
            "infinitiv": "å låse",
            "presens": "låser",
            "preteritum": "låste",
            "perfektum": "har låst"
        },
        {
            "infinitiv": "å huske",
            "presens": "husker",
            "preteritum": "husket",
            "perfektum": "har husket"
        },
        {
            "infinitiv": "å besøke",
            "presens": "besøker",
            "preteritum": "besøkte",
            "perfektum": "har besøkt"
        }

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

  const startButton = document.getElementById("startQuiz");
  const quizContainer = document.getElementById("quizContainer");
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");

  startButton.style.display = "none"; // Скрыть кнопку "Начать викторину"
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
        startButton.style.display = "block"; // Показать кнопку "Начать викторину" после окончания игры
        startButton.style.marginTop = "20px"; // Добавить отступ сверху для центрирования
      }
    };
  }

  askQuestion();
}

document.getElementById("startQuiz").onclick = startQuiz;
