const sentences = [
 {
    "norwegian": "Jeg bor i Norge.",
    "russian": "Я живу в Норвегии.",
    "english": "I live in Norway."
  },
  {
    "norwegian": "Jeg heter Anna.",
    "russian": "Меня зовут Анна.",
    "english": "My name is Anna."
  },
  {
    "norwegian": "Hvor er toalettet?",
    "russian": "Где находится туалет?",
    "english": "Where is the toilet?"
  },
  {
    "norwegian": "Han kjøper melk i butikken.",
    "russian": "Он покупает молоко в магазине.",
    "english": "He buys milk at the store."
  },
  {
    "norwegian": "Vi spiser middag klokka seks.",
    "russian": "Мы ужинаем в шесть часов.",
    "english": "We eat dinner at six o'clock."
  },
  {
    "norwegian": "De går til skolen hver dag.",
    "russian": "Они ходят в школу каждый день.",
    "english": "They go to school every day."
  },
  {
    "norwegian": "Jeg liker kaffe.",
    "russian": "Мне нравится кофе.",
    "english": "I like coffee."
  },
  {
    "norwegian": "Hun jobber på en restaurant.",
    "russian": "Она работает в ресторане.",
    "english": "She works at a restaurant."
  },
  {
    "norwegian": "Bussen kommer om ti minutter.",
    "russian": "Автобус прибудет через десять минут.",
    "english": "The bus arrives in ten minutes."
  },
  {
    "norwegian": "Vi skal på ferie neste uke.",
    "russian": "Мы поедем в отпуск на следующей неделе.",
    "english": "We are going on vacation next week."
    },
   {
    "norwegian": "Hun leser en bok i stua.",
    "russian": "Она читает книгу в гостиной.",
    "english": "She is reading a book in the living room."
  },
  {
    "norwegian": "Vi ser på TV om kvelden.",
    "russian": "Мы смотрим телевизор вечером.",
    "english": "We watch TV in the evening."
  },
  {
    "norwegian": "Barnet sover i senga.",
    "russian": "Ребёнок спит в кровати.",
    "english": "The child is sleeping in the bed."
  },
  {
    "norwegian": "Jeg spiser frokost klokka åtte.",
    "russian": "Я завтракаю в восемь часов.",
    "english": "I eat breakfast at eight o'clock."
  },
  {
    "norwegian": "Han kjører bil til jobben.",
    "russian": "Он едет на машине на работу.",
    "english": "He drives to work."
  },
  {
    "norwegian": "De handler på butikken hver lørdag.",
    "russian": "Они делают покупки в магазине каждую субботу.",
    "english": "They shop at the store every Saturday."
  },
  {
    "norwegian": "Jeg har en katt som heter Luna.",
    "russian": "У меня есть кошка по имени Луна.",
    "english": "I have a cat named Luna."
  },
  {
    "norwegian": "Vi går en tur i parken.",
    "russian": "Мы гуляем в парке.",
    "english": "We are taking a walk in the park."
  },
  {
    "norwegian": "Han skriver et brev til sin venn.",
    "russian": "Он пишет письмо своему другу.",
    "english": "He is writing a letter to his friend."
  },
  {
    "norwegian": "Huset deres er veldig stort.",
    "russian": "Их дом очень большой.",
    "english": "Their house is very big."
    },
   {
    "norwegian": "Jeg liker å gå tur i skogen.",
    "russian": "Мне нравится гулять в лесу.",
    "english": "I like to walk in the forest."
  },
  {
    "norwegian": "De spiser is i sola.",
    "russian": "Они едят мороженое на солнце.",
    "english": "They are eating ice cream in the sun."
  },
  {
    "norwegian": "Han drikker vann fra glasset.",
    "russian": "Он пьёт воду из стакана.",
    "english": "He drinks water from the glass."
  },
  {
    "norwegian": "Vi bor i et lite hus på landet.",
    "russian": "Мы живём в маленьком доме в деревне.",
    "english": "We live in a small house in the countryside."
  },
  {
    "norwegian": "Hun kjøper blomster på torget.",
    "russian": "Она покупает цветы на рынке.",
    "english": "She buys flowers at the market."
  },
  {
    "norwegian": "Jeg trener på treningssenteret.",
    "russian": "Я занимаюсь в спортзале.",
    "english": "I work out at the gym."
  },
  {
    "norwegian": "De studerer norsk på skolen.",
    "russian": "Они учат норвежский в школе.",
    "english": "They study Norwegian at school."
  },
  {
    "norwegian": "Han venter på bussen i regnet.",
    "russian": "Он ждёт автобус под дождём.",
    "english": "He is waiting for the bus in the rain."
  },
  {
    "norwegian": "Katten sitter på stolen.",
    "russian": "Кошка сидит на стуле.",
    "english": "The cat is sitting on the chair."
  },
  {
    "norwegian": "Vi lager middag sammen i kveld.",
    "russian": "Мы готовим ужин вместе сегодня вечером.",
    "english": "We are cooking dinner together tonight."
    },
  {
    "norwegian": "Hun sykler til skolen hver morgen.",
    "russian": "Она едет на велосипеде в школу каждое утро.",
    "english": "She cycles to school every morning."
  },
  {
    "norwegian": "Jeg kjøper grønnsaker på butikken.",
    "russian": "Я покупаю овощи в магазине.",
    "english": "I buy vegetables at the store."
  },
  {
    "norwegian": "Vi besøker besteforeldrene våre i helgen.",
    "russian": "Мы навещаем наших бабушку и дедушку на выходных.",
    "english": "We are visiting our grandparents this weekend."
  },
  {
    "norwegian": "Han ser en fugl i treet.",
    "russian": "Он видит птицу на дереве.",
    "english": "He sees a bird in the tree."
  },
  {
    "norwegian": "Barnet leker med ballen i hagen.",
    "russian": "Ребёнок играет с мячом в саду.",
    "english": "The child is playing with the ball in the garden."
  },
  {
    "norwegian": "Jeg skriver i dagboka mi hver kveld.",
    "russian": "Я пишу в своём дневнике каждый вечер.",
    "english": "I write in my diary every evening."
  },
  {
    "norwegian": "De leser avisen ved bordet.",
    "russian": "Они читают газету за столом.",
    "english": "They are reading the newspaper at the table."
  },
  {
    "norwegian": "Vi lager kake til bursdagen hans.",
    "russian": "Мы готовим торт к его дню рождения.",
    "english": "We are making a cake for his birthday."
  },
  {
    "norwegian": "Hun drømmer om å reise til Italia.",
    "russian": "Она мечтает о поездке в Италию.",
    "english": "She dreams of traveling to Italy."
  },
  {
    "norwegian": "Jeg liker å høre på musikk når jeg jobber.",
    "russian": "Мне нравится слушать музыку, когда я работаю.",
    "english": "I like listening to music when I work."
    },
  {
    "norwegian": "Jeg står opp klokka sju hver dag.",
    "russian": "Я встаю в семь часов каждый день.",
    "english": "I get up at seven o'clock every day."
  },
  {
    "norwegian": "Hun tar toget til byen.",
    "russian": "Она едет на поезде в город.",
    "english": "She takes the train to the city."
  },
  {
    "norwegian": "Vi liker å spille fotball etter skolen.",
    "russian": "Нам нравится играть в футбол после школы.",
    "english": "We like to play football after school."
  },
  {
    "norwegian": "Han har en bror og en søster.",
    "russian": "У него есть брат и сестра.",
    "english": "He has a brother and a sister."
  },
  {
    "norwegian": "Jeg drikker te med sitron.",
    "russian": "Я пью чай с лимоном.",
    "english": "I drink tea with lemon."
  },
  {
    "norwegian": "De bor i en leilighet i sentrum.",
    "russian": "Они живут в квартире в центре города.",
    "english": "They live in an apartment in the city center."
  },
  {
    "norwegian": "Hun lager en salat til lunsj.",
    "russian": "Она готовит салат на обед.",
    "english": "She makes a salad for lunch."
  },
  {
    "norwegian": "Jeg må kjøpe nye sko i dag.",
    "russian": "Мне нужно купить новые туфли сегодня.",
    "english": "I need to buy new shoes today."
  },
  {
    "norwegian": "Vi leser en spennende bok sammen.",
    "russian": "Мы вместе читаем увлекательную книгу.",
    "english": "We are reading an exciting book together."
  },
  {
    "norwegian": "Han liker å tegne bilder av dyr.",
    "russian": "Ему нравится рисовать картинки с животными.",
    "english": "He likes to draw pictures of animals."
    },
   {
    "norwegian": "Jeg går til butikken for å kjøpe brød.",
    "russian": "Я иду в магазин, чтобы купить хлеб.",
    "english": "I am going to the store to buy bread."
  },
  {
    "norwegian": "De svømmer i sjøen om sommeren.",
    "russian": "Они плавают в море летом.",
    "english": "They swim in the sea during the summer."
  },
  {
    "norwegian": "Vi spiser epler fra treet i hagen.",
    "russian": "Мы едим яблоки с дерева в саду.",
    "english": "We eat apples from the tree in the garden."
  },
  {
    "norwegian": "Hun vasker klær på mandager.",
    "russian": "Она стирает одежду по понедельникам.",
    "english": "She washes clothes on Mondays."
  },
  {
    "norwegian": "Jeg ser en film på kino i kveld.",
    "russian": "Я смотрю фильм в кинотеатре сегодня вечером.",
    "english": "I am watching a movie at the cinema tonight."
  },
  {
    "norwegian": "De leker i snøen om vinteren.",
    "russian": "Они играют в снегу зимой.",
    "english": "They play in the snow during winter."
  },
  {
    "norwegian": "Vi lærer nye ord på norsk hver dag.",
    "russian": "Мы учим новые слова на норвежском каждый день.",
    "english": "We learn new words in Norwegian every day."
  },
  {
    "norwegian": "Hun kjøper en rød kjole til festen.",
    "russian": "Она покупает красное платье для вечеринки.",
    "english": "She buys a red dress for the party."
  },
  {
    "norwegian": "Jeg hører på radio om morgenen.",
    "russian": "Я слушаю радио по утрам.",
    "english": "I listen to the radio in the morning."
  },
  {
    "norwegian": "De spiser middag ute på terrassen.",
    "russian": "Они ужинают на террасе.",
    "english": "They eat dinner outside on the terrace."
    },
   {
    "norwegian": "Han går en tur langs elva.",
    "russian": "Он гуляет вдоль реки.",
    "english": "He takes a walk along the river."
  },
  {
    "norwegian": "Vi kjøper billetter til toget.",
    "russian": "Мы покупаем билеты на поезд.",
    "english": "We are buying tickets for the train."
  },
  {
    "norwegian": "Hun drikker kaffe på kafeen.",
    "russian": "Она пьёт кофе в кафе.",
    "english": "She drinks coffee at the café."
  },
  {
    "norwegian": "Jeg sender et postkort til en venn.",
    "russian": "Я отправляю открытку другу.",
    "english": "I am sending a postcard to a friend."
  },
  {
    "norwegian": "De spiller kort på hytta.",
    "russian": "Они играют в карты на даче.",
    "english": "They are playing cards at the cabin."
  },
  {
    "norwegian": "Vi feirer bursdagen hennes i dag.",
    "russian": "Мы отмечаем её день рождения сегодня.",
    "english": "We are celebrating her birthday today."
  },
  {
    "norwegian": "Jeg må ta en buss til sentrum.",
    "russian": "Мне нужно сесть на автобус до центра.",
    "english": "I need to take a bus to the city center."
  },
  {
    "norwegian": "Hun liker å male bilder om kvelden.",
    "russian": "Ей нравится рисовать картины вечером.",
    "english": "She likes to paint pictures in the evening."
  },
  {
    "norwegian": "De ser stjerner på himmelen om natten.",
    "russian": "Они смотрят на звёзды на небе ночью.",
    "english": "They look at the stars in the sky at night."
  },
  {
    "norwegian": "Jeg spiser en sandwich med ost.",
    "russian": "Я ем бутерброд с сыром.",
    "english": "I am eating a sandwich with cheese."
    },
   {
    "norwegian": "Han vanner blomstene i hagen.",
    "russian": "Он поливает цветы в саду.",
    "english": "He waters the flowers in the garden."
  },
  {
    "norwegian": "Vi baker brød i helgen.",
    "russian": "Мы печём хлеб на выходных.",
    "english": "We bake bread on the weekend."
  },
  {
    "norwegian": "Hun går på biblioteket for å låne en bok.",
    "russian": "Она идёт в библиотеку, чтобы взять книгу.",
    "english": "She goes to the library to borrow a book."
  },
  {
    "norwegian": "Jeg slapper av hjemme etter jobben.",
    "russian": "Я отдыхаю дома после работы.",
    "english": "I relax at home after work."
  },
  {
    "norwegian": "De spiller piano sammen om kvelden.",
    "russian": "Они играют на пианино вместе вечером.",
    "english": "They play the piano together in the evening."
  },
  {
    "norwegian": "Vi besøker museet i byen.",
    "russian": "Мы посещаем музей в городе.",
    "english": "We visit the museum in the city."
  },
  {
    "norwegian": "Han kjøper en ny klokke på butikken.",
    "russian": "Он покупает новые часы в магазине.",
    "english": "He buys a new watch at the store."
  },
  {
    "norwegian": "Jeg skriver en e-post til sjefen min.",
    "russian": "Я пишу электронное письмо своему начальнику.",
    "english": "I am writing an email to my boss."
  },
  {
    "norwegian": "Hun går på tur i fjellet om sommeren.",
    "russian": "Она ходит в поход в горы летом.",
    "english": "She goes hiking in the mountains during the summer."
  },
  {
    "norwegian": "De ser en regnbue etter regnet.",
    "russian": "Они видят радугу после дождя.",
    "english": "They see a rainbow after the rain."
    },
  {
    "norwegian": "Jeg spiser en banan til frokost.",
    "russian": "Я ем банан на завтрак.",
    "english": "I eat a banana for breakfast."
  },
  {
    "norwegian": "Vi hører på fuglene som synger i skogen.",
    "russian": "Мы слушаем птиц, которые поют в лесу.",
    "english": "We listen to the birds singing in the forest."
  },
  {
    "norwegian": "Hun kjøper melk og brød på vei hjem.",
    "russian": "Она покупает молоко и хлеб по пути домой.",
    "english": "She buys milk and bread on her way home."
  },
  {
    "norwegian": "De sitter ved bordet og snakker sammen.",
    "russian": "Они сидят за столом и разговаривают друг с другом.",
    "english": "They sit at the table and talk together."
  },
  {
    "norwegian": "Han sover på sofaen i stua.",
    "russian": "Он спит на диване в гостиной.",
    "english": "He is sleeping on the sofa in the living room."
  },
  {
    "norwegian": "Jeg tar et bilde av fjellet.",
    "russian": "Я фотографирую гору.",
    "english": "I take a picture of the mountain."
  },
  {
    "norwegian": "Vi lager pannekaker til barna.",
    "russian": "Мы готовим блины для детей.",
    "english": "We are making pancakes for the kids."
  },
  {
    "norwegian": "Hun leser et eventyr for sønnen sin.",
    "russian": "Она читает сказку своему сыну.",
    "english": "She is reading a fairy tale to her son."
  },
  {
    "norwegian": "De ser på båtene i havna.",
    "russian": "Они смотрят на лодки в гавани.",
    "english": "They are looking at the boats in the harbor."
  },
  {
    "norwegian": "Jeg går til legen fordi jeg er syk.",
    "russian": "Я иду к врачу, потому что я болен.",
    "english": "I am going to the doctor because I am sick."
  }
  
  
 
];