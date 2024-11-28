const sentences = [
      { "norwegian": "Hvis det regner blir vi hjemme.", "russian": "Если пойдет дождь, мы останемся дома.", "english": "If it rains, we will stay home." },
  { "norwegian": "Han sa at han var trøtt.", "russian": "Он сказал, что устал.", "english": "He said that he was tired." },
  { "norwegian": "Vet du om butikken er åpen?", "russian": "Ты знаешь, открыт ли магазин?", "english": "Do you know if the shop is open?" },
  { "norwegian": "Jenta som løp i parken er søsteren min.", "russian": "Девочка, которая бегала в парке, моя сестра.", "english": "The girl who was running in the park is my sister." },
  { "norwegian": "Vi ble hjemme, så vi så filmen sammen.", "russian": "Мы остались дома, поэтому посмотрели фильм вместе.", "english": "We stayed home, so we watched the movie together." },
  { "norwegian": "Han kom ikke fordi han var syk.", "russian": "Он не пришел, потому что был болен.", "english": "He didn’t come because he was sick." },
  { "norwegian": "Hvis du vil kan vi gå nå.", "russian": "Если хочешь, мы можем пойти сейчас.", "english": "If you want, we can go now." },
  { "norwegian": "Jeg vet at han har mye arbeid.", "russian": "Я знаю, что у него много работы.", "english": "I know that he has a lot of work." },
  { "norwegian": "Kan du si meg om toget er i rute?", "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?", "english": "Can you tell me if the train is on time?" },
  { "norwegian": "Huset som vi så i går var veldig fint.", "russian": "Дом, который мы видели вчера, был очень красивым.", "english": "The house which we saw yesterday was very nice." },
  { "norwegian": "Han var trøtt, så han la seg tidlig.", "russian": "Он устал, поэтому лег спать рано.", "english": "He was tired, so he went to bed early." },
  { "norwegian": "De ble hjemme fordi det regnet.", "russian": "Они остались дома, потому что шел дождь.", "english": "They stayed home because it was raining." },
  { "norwegian": "Hvis vi har tid kan vi besøke museet.", "russian": "Если у нас будет время, мы можем посетить музей.", "english": "If we have time, we can visit the museum." },
  { "norwegian": "Jeg hørte at du skal på ferie snart.", "russian": "Я слышал, что ты скоро едешь в отпуск.", "english": "I heard that you are going on vacation soon." },
  { "norwegian": "Vet du om han allerede har spist?", "russian": "Ты знаешь, ел ли он уже?", "english": "Do you know if he has already eaten?" },
  { "norwegian": "Boken som ligger på bordet er min.", "russian": "Книга, которая лежит на столе, моя.", "english": "The book which is on the table is mine." },
  { "norwegian": "Det er kaldt ute, så vi trenger varme klær.", "russian": "На улице холодно, поэтому нам нужна теплая одежда.", "english": "It is cold outside, so we need warm clothes." },
  { "norwegian": "Han kom sent fordi bussen var forsinket.", "russian": "Он пришел поздно, потому что автобус задержался.", "english": "He arrived late because the bus was delayed." },
  { "norwegian": "Hvis du ikke kan komme gi meg beskjed.", "russian": "Если ты не сможешь прийти, дай мне знать.", "english": "If you can’t come, let me know." },
  { "norwegian": "Jeg tror at vi trenger mer tid.", "russian": "Я думаю, что нам нужно больше времени.", "english": "I think that we need more time." },
  { "norwegian": "Har du spurt om hun vil være med oss?", "russian": "Ты спросил, пойдет ли она с нами?", "english": "Did you ask if she wants to join us?" },
  { "norwegian": "Gutten som sykler der borte er broren min.", "russian": "Мальчик, который едет на велосипеде вон там, мой брат.", "english": "The boy who is cycling over there is my brother." },
  { "norwegian": "Det begynte å regne, så vi dro hjem.", "russian": "Начался дождь, поэтому мы поехали домой.", "english": "It started raining, so we went home." },
{ "norwegian": "Hun ble sint fordi ingen hørte på henne.", "russian": "Она разозлилась, потому что никто ее не слушал.", "english": "She got angry because no one listened to her." },
  { "norwegian": "Hvis du studerer hardt vil du lykkes.", "russian": "Если ты будешь усердно учиться, ты добьешься успеха.", "english": "If you study hard, you will succeed." },
  { "norwegian": "Jeg vet at de har kjøpt en ny bil.", "russian": "Я знаю, что они купили новую машину.", "english": "I know that they bought a new car." },
  { "norwegian": "Om du trenger hjelp bare si fra.", "russian": "Если тебе нужна помощь, просто скажи.", "english": "If you need help, just let me know." },
  { "norwegian": "Læreren som underviser i matematikk er veldig streng.", "russian": "Учитель, который преподает математику, очень строгий.", "english": "The teacher who teaches math is very strict." },
  { "norwegian": "Hun var glad, så hun smilte hele dagen.", "russian": "Она была счастлива, поэтому улыбалась весь день.", "english": "She was happy, so she smiled all day." },
  { "norwegian": "Vi spiste ute fordi vi ikke hadde tid til å lage mat.", "russian": "Мы поели вне дома, потому что у нас не было времени готовить.", "english": "We ate out because we didn't have time to cook." },
{ "norwegian": "Hvis du vil lese boka kan du låne den.", "russian": "Если ты хочешь прочитать книгу, ты можешь её одолжить.", "english": "If you want to read the book, you can borrow it." },
  { "norwegian": "Vi gikk til parken, og vi spilte fotball.", "russian": "Мы пошли в парк, и мы играли в футбол.", "english": "We went to the park, and we played football." },
  { "norwegian": "Han sa at han ikke hadde tid.", "russian": "Он сказал, что у него не было времени.", "english": "He said that he didn’t have time." },
  { "norwegian": "Vet du om det er varmt ute?", "russian": "Ты знаешь, тепло ли на улице?", "english": "Do you know if it is warm outside?" },
  { "norwegian": "Kvinnen som står ved døra er min lærer.", "russian": "Женщина, которая стоит у двери, мой учитель.", "english": "The woman who is standing by the door is my teacher." },
  { "norwegian": "Vi ble hjemme, for det var for sent å gå ut.", "russian": "Мы остались дома, потому что было слишком поздно выходить.", "english": "We stayed home, for it was too late to go out." },
  { "norwegian": "Han kom sent fordi han måtte jobbe overtid.", "russian": "Он пришел поздно, потому что ему пришлось работать сверхурочно.", "english": "He arrived late because he had to work overtime." },
  { "norwegian": "Hvis du hjelper meg kan vi bli ferdige raskere.", "russian": "Если ты поможешь мне, мы закончим быстрее.", "english": "If you help me, we can finish faster." },
  { "norwegian": "Jeg vet at hun bor i byen.", "russian": "Я знаю, что она живёт в городе.", "english": "I know that she lives in the city." },
  { "norwegian": "Kan du si meg om hun kommer i morgen?", "russian": "Ты можешь сказать мне, придёт ли она завтра?", "english": "Can you tell me if she is coming tomorrow?" },
  { "norwegian": "Barna som leker i hagen er veldig glade.", "russian": "Дети, которые играют в саду, очень счастливы.", "english": "The children who are playing in the garden are very happy." },
  { "norwegian": "Han gikk til butikken, men den var stengt.", "russian": "Он пошел в магазин, но он был закрыт.", "english": "He went to the shop, but it was closed." },
  { "norwegian": "Hun var lei seg fordi hun mistet telefonen.", "russian": "Она была расстроена, потому что потеряла телефон.", "english": "She was upset because she lost her phone." },
  { "norwegian": "Hvis vi reiser tidlig kan vi unngå trafikken.", "russian": "Если мы выедем рано, мы избежим пробок.", "english": "If we leave early, we can avoid the traffic." },
  { "norwegian": "Jeg håper at du kan bli med på festen.", "russian": "Я надеюсь, что ты сможешь пойти на вечеринку.", "english": "I hope that you can join the party." },
  { "norwegian": "Vet du om vi har møte i dag?", "russian": "Ты знаешь, у нас сегодня встреча?", "english": "Do you know if we have a meeting today?" },
  { "norwegian": "Mannen som reparerte bilen er mekaniker.", "russian": "Мужчина, который починил машину, механик.", "english": "The man who repaired the car is a mechanic." },
  { "norwegian": "Vi dro til fjells, så vi fikk en fantastisk utsikt.", "russian": "Мы поднялись в горы, поэтому у нас был потрясающий вид.", "english": "We went to the mountains, so we got a fantastic view." },
  { "norwegian": "De ble hjemme fordi det var for mye snø.", "russian": "Они остались дома, потому что было слишком много снега.", "english": "They stayed home because there was too much snow." },
  { "norwegian": "Hvis du vil kan jeg hjelpe deg med leksene.", "russian": "Если хочешь, я могу помочь тебе с уроками.", "english": "If you want, I can help you with your homework." },
    { "norwegian": "Jeg tror at vi må kjøpe mer melk.", "russian": "Я думаю, что нам нужно купить больше молока.", "english": "I think that we need to buy more milk." },
  { "norwegian": "Har du spurt om hun vil komme til middag?", "russian": "Ты спросил, придёт ли она на ужин?", "english": "Did you ask if she will come for dinner?" },
  { "norwegian": "Gutten som leser boka er min bror.", "russian": "Мальчик, который читает книгу, мой брат.", "english": "The boy who is reading the book is my brother." },
  { "norwegian": "Det regnet hele dagen, så vi ble inne.", "russian": "Целый день шёл дождь, поэтому мы остались дома.", "english": "It rained all day, so we stayed inside." },
  { "norwegian": "Hun ble glad fordi hun bestod eksamen.", "russian": "Она была рада, потому что сдала экзамен.", "english": "She was happy because she passed the exam." },
  { "norwegian": "Hvis du har tid kan vi gå på kafé.", "russian": "Если у тебя есть время, мы можем сходить в кафе.", "english": "If you have time, we can go to the café." },
  { "norwegian": "Jeg vet at han liker å trene.", "russian": "Я знаю, что ему нравится тренироваться.", "english": "I know that he likes to work out." },
  { "norwegian": "Om du ser noe rart, si fra til meg.", "russian": "Если ты заметишь что-то странное, скажи мне.", "english": "If you see something strange, tell me." },
  { "norwegian": "Læreren som underviser i fysikk er veldig kunnskapsrik.", "russian": "Учитель, который преподаёт физику, очень знающий.", "english": "The teacher who teaches physics is very knowledgeable." },
    { "norwegian": "Vi hadde en lang dag, så vi la oss tidlig.", "russian": "У нас был долгий день, поэтому мы легли спать рано.", "english": "We had a long day, so we went to bed early." },
   { "norwegian": "Hvis du vil dra til stranden kan vi gjøre det i morgen.", "russian": "Если ты хочешь поехать на пляж, мы можем сделать это завтра.", "english": "If you want to go to the beach, we can do it tomorrow." },
  { "norwegian": "Vi laget middag, og vi inviterte vennene våre.", "russian": "Мы приготовили ужин и пригласили наших друзей.", "english": "We made dinner, and we invited our friends." },
  { "norwegian": "Han sa at han skulle ringe senere.", "russian": "Он сказал, что позвонит позже.", "english": "He said that he would call later." },
  { "norwegian": "Vet du om bussen stopper her?", "russian": "Ты знаешь, останавливается ли здесь автобус?", "english": "Do you know if the bus stops here?" },
  { "norwegian": "Hunden som løper i hagen tilhører naboen.", "russian": "Собака, которая бегает в саду, принадлежит соседу.", "english": "The dog that is running in the garden belongs to the neighbor." },
  { "norwegian": "Vi gikk til butikken, for vi trengte melk.", "russian": "Мы пошли в магазин, потому что нам нужно было молоко.", "english": "We went to the store, for we needed milk." },
  { "norwegian": "Hun kom sent fordi hun glemte tiden.", "russian": "Она пришла поздно, потому что забыла время.", "english": "She arrived late because she lost track of time." },
  { "norwegian": "Hvis du studerer mer kan du få bedre karakterer.", "russian": "Если ты будешь больше учиться, ты получишь лучшие оценки.", "english": "If you study more, you can get better grades." },
  { "norwegian": "Jeg vet at han jobber i en bank.", "russian": "Я знаю, что он работает в банке.", "english": "I know that he works in a bank." },
  { "norwegian": "Kan du fortelle meg om det er noe nytt?", "russian": "Ты можешь рассказать мне, есть ли что-то новое?", "english": "Can you tell me if there is anything new?" },
  { "norwegian": "Jenta som sitter på benken er kusinen min.", "russian": "Девочка, которая сидит на скамейке, моя двоюродная сестра.", "english": "The girl sitting on the bench is my cousin." },
  { "norwegian": "Han kjøpte en ny jakke, men den var for liten.", "russian": "Он купил новую куртку, но она оказалась слишком маленькой.", "english": "He bought a new jacket, but it was too small." },
  { "norwegian": "Vi dro hjem fordi vi var trøtte.", "russian": "Мы поехали домой, потому что были уставшими.", "english": "We went home because we were tired." },
  { "norwegian": "Hvis vi starter tidlig kan vi bli ferdige før lunsj.", "russian": "Если мы начнем рано, мы закончим до обеда.", "english": "If we start early, we can finish before lunch." },
  { "norwegian": "Jeg tror at det vil regne senere.", "russian": "Я думаю, что позже пойдет дождь.", "english": "I think that it will rain later." },
  { "norwegian": "Vet du om han kommer på møtet?", "russian": "Ты знаешь, придёт ли он на встречу?", "english": "Do you know if he is coming to the meeting?" },
  { "norwegian": "Kvinnen som jobber på sykehuset er veldig vennlig.", "russian": "Женщина, которая работает в больнице, очень дружелюбная.", "english": "The woman who works at the hospital is very friendly." },
  { "norwegian": "Vi gikk til fjorden, så vi kunne fiske.", "russian": "Мы пошли к фьорду, чтобы порыбачить.", "english": "We went to the fjord, so we could fish." },
  { "norwegian": "De dro til byen fordi de måtte handle mat.", "russian": "Они поехали в город, потому что им нужно было купить еду.", "english": "They went to the city because they needed to buy groceries." },
  { "norwegian": "Hvis du er ferdig med oppgavene kan du slappe av.", "russian": "Если ты закончил задания, можешь отдохнуть.", "english": "If you are done with the tasks, you can relax." },
    { "norwegian": "Jeg vet at han liker å se på film.", "russian": "Я знаю, что он любит смотреть фильмы.", "english": "I know that he likes to watch movies." },
  { "norwegian": "Om du ser et problem må du si fra til læreren.", "russian": "Если ты заметишь проблему, скажи учителю.", "english": "If you see a problem, you must tell the teacher." },
  { "norwegian": "Barna som spiller basketball er veldig gode.", "russian": "Дети, которые играют в баскетбол, очень хорошие игроки.", "english": "The children playing basketball are very good." },
  { "norwegian": "Det var mørkt, så vi tente lys.", "russian": "Было темно, поэтому мы зажгли свечи.", "english": "It was dark, so we lit candles." },
  { "norwegian": "Hun lo fordi hun hørte en morsom vits.", "russian": "Она смеялась, потому что услышала смешную шутку.", "english": "She laughed because she heard a funny joke." },
  { "norwegian": "Hvis du følger med kan du lære mye.", "russian": "Если будешь внимательно слушать, можешь многому научиться.", "english": "If you pay attention, you can learn a lot." },
  { "norwegian": "Jeg vet at hun er veldig flink til å lage mat.", "russian": "Я знаю, что она очень хорошо готовит.", "english": "I know that she is very good at cooking." },
  { "norwegian": "Har du spurt om han vil bli med på kino?", "russian": "Ты спросил, хочет ли он пойти в кино?", "english": "Did you ask if he wants to go to the cinema?" },
  { "norwegian": "Mannen som bor i nabohuset er veldig hyggelig.", "russian": "Мужчина, который живёт в соседнем доме, очень приятный.", "english": "The man who lives next door is very nice." },
    { "norwegian": "Vi var sultne, så vi bestilte pizza.", "russian": "Мы были голодны, поэтому заказали пиццу.", "english": "We were hungry, so we ordered pizza." },
   { "norwegian": "Hvis vi får tid, kan vi gå en tur i skogen.", "russian": "Если у нас будет время, мы можем прогуляться в лесу.", "english": "If we have time, we can go for a walk in the forest." },
  { "norwegian": "Han kjøpte nye sko, for han hadde slitt ut de gamle.", "russian": "Он купил новые ботинки, потому что старые износились.", "english": "He bought new shoes, for his old ones were worn out." },
  { "norwegian": "Jeg sa at jeg ville hjelpe deg med oppgaven.", "russian": "Я сказал, что помогу тебе с заданием.", "english": "I said that I would help you with the task." },
  { "norwegian": "Vet du om de planlegger å komme i kveld?", "russian": "Ты знаешь, планируют ли они прийти сегодня вечером?", "english": "Do you know if they plan to come tonight?" },
  { "norwegian": "Katten som ligger på sofaen elsker å sove der.", "russian": "Кот, который лежит на диване, любит спать там.", "english": "The cat lying on the sofa loves to sleep there." },
  { "norwegian": "Vi tok en pause, for vi var slitne.", "russian": "Мы сделали перерыв, потому что устали.", "english": "We took a break, for we were tired." },
  { "norwegian": "Hun ble hjemme fordi hun følte seg dårlig.", "russian": "Она осталась дома, потому что плохо себя чувствовала.", "english": "She stayed home because she felt unwell." },
  { "norwegian": "Hvis du trener regelmessig, vil du føle deg bedre.", "russian": "Если ты будешь регулярно тренироваться, ты почувствуешь себя лучше.", "english": "If you exercise regularly, you will feel better." },
  { "norwegian": "Jeg vet at han liker å gå på fjellturer.", "russian": "Я знаю, что ему нравится ходить в горные походы.", "english": "I know that he likes hiking in the mountains." },
  { "norwegian": "Kan du si meg om posten er kommet?", "russian": "Ты можешь сказать мне, пришла ли почта?", "english": "Can you tell me if the mail has arrived?" },
  { "norwegian": "Bilen som står utenfor huset vårt tilhører naboen.", "russian": "Машина, которая стоит у нашего дома, принадлежит соседу.", "english": "The car parked outside our house belongs to the neighbor." },
  { "norwegian": "De spiste middag, men de var fortsatt sultne.", "russian": "Они поужинали, но всё ещё были голодны.", "english": "They had dinner, but they were still hungry." },
  { "norwegian": "Vi dro tidlig fordi vi ikke ville komme for sent.", "russian": "Мы ушли рано, потому что не хотели опоздать.", "english": "We left early because we didn’t want to be late." },
  { "norwegian": "Hvis du spør pent, kan du få hjelp.", "russian": "Если ты вежливо попросишь, тебе помогут.", "english": "If you ask nicely, you can get help." },
  { "norwegian": "Jeg tror at de allerede har løst problemet.", "russian": "Я думаю, что они уже решили проблему.", "english": "I think that they have already solved the problem." },
  { "norwegian": "Vet du om biblioteket har åpent i dag?", "russian": "Ты знаешь, работает ли библиотека сегодня?", "english": "Do you know if the library is open today?" },
  { "norwegian": "Jenta som leker med ballen, er søsteren min.", "russian": "Девочка, которая играет с мячом, моя сестра.", "english": "The girl playing with the ball is my sister." },
  { "norwegian": "Vi dro til parken, så vi kunne nyte solen.", "russian": "Мы пошли в парк, чтобы насладиться солнцем.", "english": "We went to the park so we could enjoy the sun." },
  { "norwegian": "Han kom for sent fordi han forsov seg.", "russian": "Он опоздал, потому что проспал.", "english": "He was late because he overslept." },
  { "norwegian": "Hvis du lager kaffe, kan jeg finne kjeks.", "russian": "Если ты сваришь кофе, я найду печенье.", "english": "If you make coffee, I can find some cookies." },
    { "norwegian": "Jeg vet at hun elsker å danse.", "russian": "Я знаю, что она любит танцевать.", "english": "I know that she loves to dance." },
  { "norwegian": "Om du ikke finner boka, kan vi låne en annen.", "russian": "Если ты не найдёшь книгу, мы можем взять другую.", "english": "If you can’t find the book, we can borrow another one." },
  { "norwegian": "Læreren som underviser i norsk er veldig hjelpsom.", "russian": "Учитель, который преподаёт норвежский, очень отзывчивый.", "english": "The teacher who teaches Norwegian is very helpful." },
  { "norwegian": "Det ble mørkt, så vi gikk inn.", "russian": "Стемнело, поэтому мы зашли внутрь.", "english": "It got dark, so we went inside." },
  { "norwegian": "Hun lo fordi hun fikk en morsom melding.", "russian": "Она смеялась, потому что получила смешное сообщение.", "english": "She laughed because she received a funny message." },
  { "norwegian": "Hvis du sparer penger, kan du kjøpe det du vil.", "russian": "Если ты будешь откладывать деньги, сможешь купить то, что хочешь.", "english": "If you save money, you can buy what you want." },
  { "norwegian": "Jeg vet at han har reist til utlandet.", "russian": "Я знаю, что он уехал за границу.", "english": "I know that he has gone abroad." },
  { "norwegian": "Har du spurt om de trenger hjelp?", "russian": "Ты спросил, нужна ли им помощь?", "english": "Did you ask if they need help?" },
  { "norwegian": "Gutten som spiller gitar er veldig talentfull.", "russian": "Мальчик, который играет на гитаре, очень талантлив.", "english": "The boy playing the guitar is very talented." },
    { "norwegian": "Vi hadde det travelt, så vi tok en taxi.", "russian": "Мы спешили, поэтому взяли такси.", "english": "We were in a hurry, so we took a taxi." },
    { "norwegian": "Hvis du ringer meg senere, kan vi avtale noe.", "russian": "Если ты позвонишь мне позже, мы можем что-то договорить.", "english": "If you call me later, we can arrange something." },
  { "norwegian": "Hun kjøpte en ny jakke, for den gamle var ødelagt.", "russian": "Она купила новую куртку, потому что старая была испорчена.", "english": "She bought a new jacket because the old one was ruined." },
  { "norwegian": "Jeg sa at jeg ikke hadde tid til å møte dem.", "russian": "Я сказал, что у меня нет времени встретиться с ними.", "english": "I said that I didn’t have time to meet them." },
  { "norwegian": "Vet du om vi kan parkere her?", "russian": "Ты знаешь, можно ли нам припарковаться здесь?", "english": "Do you know if we can park here?" },
  { "norwegian": "Hunden som løper på plenen, tilhører naboen.", "russian": "Собака, которая бегает по лужайке, принадлежит соседу.", "english": "The dog running on the lawn belongs to the neighbor." },
  { "norwegian": "De bestemte seg for å bli hjemme, for det begynte å regne.", "russian": "Они решили остаться дома, потому что начался дождь.", "english": "They decided to stay home because it started raining." },
  { "norwegian": "Vi måtte avlyse turen fordi været var dårlig.", "russian": "Нам пришлось отменить поездку, потому что погода была плохая.", "english": "We had to cancel the trip because the weather was bad." },
  { "norwegian": "Hvis du vil, kan vi spise middag ute.", "russian": "Если хочешь, мы можем поужинать вне дома.", "english": "If you want, we can have dinner out." },
  { "norwegian": "Jeg tror at hun ikke har forstått spørsmålet.", "russian": "Я думаю, что она не поняла вопрос.", "english": "I think that she didn’t understand the question." },
  { "norwegian": "Kan du sjekke om det er ledige billetter?", "russian": "Ты можешь проверить, есть ли свободные билеты?", "english": "Can you check if there are any available tickets?" },
  { "norwegian": "Planten som står ved vinduet, trenger mer vann.", "russian": "Растение, которое стоит у окна, нуждается в воде.", "english": "The plant by the window needs more water." },
  { "norwegian": "De dro til stranden, men været ble overskyet.", "russian": "Они поехали на пляж, но погода стала пасмурной.", "english": "They went to the beach, but the weather turned cloudy." },
  { "norwegian": "Vi måtte vente fordi toget var forsinket.", "russian": "Нам пришлось ждать, потому что поезд задержался.", "english": "We had to wait because the train was delayed." },
  { "norwegian": "Hvis du vil lære mer, kan du lese denne boken.", "russian": "Если хочешь узнать больше, ты можешь прочитать эту книгу.", "english": "If you want to learn more, you can read this book." },
  { "norwegian": "Jeg vet at de har invitert mange gjester.", "russian": "Я знаю, что они пригласили много гостей.", "english": "I know that they have invited many guests." },
  { "norwegian": "Vet du om han kommer i morgen?", "russian": "Ты знаешь, придёт ли он завтра?", "english": "Do you know if he is coming tomorrow?" },
  { "norwegian": "Bordet som står i stua, er gammelt men vakkert.", "russian": "Стол, который стоит в гостиной, старый, но красивый.", "english": "The table in the living room is old but beautiful." },
  { "norwegian": "Det begynte å regne, så vi måtte finne ly.", "russian": "Начался дождь, поэтому нам пришлось найти укрытие.", "english": "It started raining, so we had to find shelter." },
  { "norwegian": "Hun lo fordi filmen var veldig morsom.", "russian": "Она смеялась, потому что фильм был очень смешным.", "english": "She laughed because the movie was very funny." },
    { "norwegian": "Hvis vi drar nå, kan vi rekke toget.", "russian": "Если мы выйдем сейчас, мы успеем на поезд.", "english": "If we leave now, we can catch the train." },
  { "norwegian": "Jeg vet at han ikke liker å stå opp tidlig.", "russian": "Я знаю, что он не любит вставать рано.", "english": "I know that he doesn’t like getting up early." },
  { "norwegian": "Om det blir for varmt, kan vi åpne vinduet.", "russian": "Если станет слишком жарко, мы можем открыть окно.", "english": "If it gets too hot, we can open the window." },
  { "norwegian": "Læreren som snakker med elevene, er ny på skolen.", "russian": "Учитель, который разговаривает с учениками, новый в школе.", "english": "The teacher talking to the students is new at the school." },
  { "norwegian": "Det var kaldt ute, så vi tok på oss varme klær.", "russian": "На улице было холодно, поэтому мы надели теплую одежду.", "english": "It was cold outside, so we put on warm clothes." },
  { "norwegian": "Han smilte fordi han vant konkurransen.", "russian": "Он улыбался, потому что выиграл соревнование.", "english": "He smiled because he won the competition." },
  { "norwegian": "Hvis du trenger hjelp, kan du spørre meg.", "russian": "Если тебе нужна помощь, ты можешь спросить меня.", "english": "If you need help, you can ask me." },
  { "norwegian": "Jeg vet at han liker å reise til nye steder.", "russian": "Я знаю, что он любит путешествовать в новые места.", "english": "I know that he likes traveling to new places." },
  { "norwegian": "Har du spurt om det er mulig å endre datoen?", "russian": "Ты спросил, возможно ли изменить дату?", "english": "Did you ask if it is possible to change the date?" },
  { "norwegian": "Gutten som maler veggen, hjelper foreldrene sine.", "russian": "Мальчик, который красит стену, помогает своим родителям.", "english": "The boy painting the wall is helping his parents." },
    { "norwegian": "Vi kom sent, for vi måtte vente på bussen.", "russian": "Мы пришли поздно, потому что нам пришлось ждать автобус.", "english": "We arrived late, for we had to wait for the bus." },
   { "norwegian": "Hvis du skriver meldingen nå, får du svar raskere.", "russian": "Если ты напишешь сообщение сейчас, ты получишь ответ быстрее.", "english": "If you write the message now, you will get a faster reply." },
  { "norwegian": "Vi gikk til butikken, men den var allerede stengt.", "russian": "Мы пошли в магазин, но он уже был закрыт.", "english": "We went to the store, but it was already closed." },
  { "norwegian": "Jeg sa at vi trenger mer tid til å gjøre ferdig prosjektet.", "russian": "Я сказал, что нам нужно больше времени, чтобы завершить проект.", "english": "I said that we need more time to finish the project." },
  { "norwegian": "Vet du om han har sendt e-posten allerede?", "russian": "Ты знаешь, отправил ли он уже электронное письмо?", "english": "Do you know if he has already sent the email?" },
  { "norwegian": "Katten som sover på sofaen, er veldig søt.", "russian": "Кошка, которая спит на диване, очень милая.", "english": "The cat sleeping on the couch is very cute." },
  { "norwegian": "De dro på fjellet, for de elsker å gå på tur.", "russian": "Они отправились в горы, потому что любят гулять.", "english": "They went to the mountains because they love hiking." },
  { "norwegian": "Vi måtte gå tidlig fordi vi hadde en avtale.", "russian": "Нам пришлось уйти рано, потому что у нас была встреча.", "english": "We had to leave early because we had an appointment." },
  { "norwegian": "Hvis du lager kaffe, kan jeg ordne frokosten.", "russian": "Если ты сделаешь кофе, я приготовлю завтрак.", "english": "If you make coffee, I can prepare breakfast." },
  { "norwegian": "Jeg tror at hun har mistet nøklene sine.", "russian": "Я думаю, что она потеряла свои ключи.", "english": "I think that she has lost her keys." },
  { "norwegian": "Kan du finne ut om de fortsatt er hjemme?", "russian": "Ты можешь выяснить, дома ли они ещё?", "english": "Can you find out if they are still home?" },
  { "norwegian": "Boken som jeg lånte av deg, er veldig interessant.", "russian": "Книга, которую я одолжил у тебя, очень интересная.", "english": "The book I borrowed from you is very interesting." },
  { "norwegian": "De ble overrasket, men de sa ingenting.", "russian": "Они удивились, но ничего не сказали.", "english": "They were surprised, but they said nothing." },
  { "norwegian": "Vi måtte vente lenge fordi køen var veldig lang.", "russian": "Нам пришлось долго ждать, потому что очередь была очень длинной.", "english": "We had to wait a long time because the line was very long." },
  { "norwegian": "Hvis du blir med oss, kan vi ha det gøy sammen.", "russian": "Если ты пойдёшь с нами, мы сможем весело провести время вместе.", "english": "If you join us, we can have fun together." },
  { "norwegian": "Jeg vet at de planlegger en stor fest til helgen.", "russian": "Я знаю, что они планируют большую вечеринку на выходных.", "english": "I know that they are planning a big party this weekend." },
  { "norwegian": "Vet du om butikken åpner tidligere på søndager?", "russian": "Ты знаешь, открывается ли магазин раньше по воскресеньям?", "english": "Do you know if the store opens earlier on Sundays?" },
  { "norwegian": "Mannen som snakker med sjefen, er ny i bedriften.", "russian": "Мужчина, который разговаривает с начальником, новый в компании.", "english": "The man talking to the boss is new to the company." },
  { "norwegian": "Det regnet mye, så vi bestemte oss for å bli inne.", "russian": "Шел сильный дождь, поэтому мы решили остаться дома.", "english": "It rained a lot, so we decided to stay indoors." },
  { "norwegian": "Hun ble glad fordi hun fikk gode nyheter.", "russian": "Она обрадовалась, потому что получила хорошие новости.", "english": "She was happy because she received good news." },
    { "norwegian": "Hvis vi starter nå, kan vi bli ferdige før middag.", "russian": "Если мы начнём сейчас, мы можем закончить до обеда.", "english": "If we start now, we can finish before lunch." },
  { "norwegian": "Jeg vet at han ikke liker å snakke foran mange folk.", "russian": "Я знаю, что он не любит говорить перед большим количеством людей.", "english": "I know that he doesn’t like speaking in front of many people." },
  { "norwegian": "Om det blir for mye, kan vi ta en pause.", "russian": "Если это станет слишком трудно, мы можем сделать перерыв.", "english": "If it gets too much, we can take a break." },
  { "norwegian": "Kvinnen som hjelper barna, jobber som frivillig.", "russian": "Женщина, которая помогает детям, работает волонтёром.", "english": "The woman helping the children works as a volunteer." },
  { "norwegian": "Det ble sent, så vi bestemte oss for å dra hjem.", "russian": "Стало поздно, поэтому мы решили поехать домой.", "english": "It got late, so we decided to go home." },
  { "norwegian": "Han lo fordi vitsen var veldig morsom.", "russian": "Он смеялся, потому что шутка была очень смешной.", "english": "He laughed because the joke was very funny." },
  { "norwegian": "Hvis du vil høre musikk, kan jeg slå på radioen.", "russian": "Если ты хочешь послушать музыку, я могу включить радио.", "english": "If you want to listen to music, I can turn on the radio." },
  { "norwegian": "Jeg tror at de kommer tilbake i morgen.", "russian": "Я думаю, что они вернутся завтра.", "english": "I think that they will come back tomorrow." },
  { "norwegian": "Har du spurt om vi kan få en kopi av rapporten?", "russian": "Ты спросил, можем ли мы получить копию отчета?", "english": "Did you ask if we can get a copy of the report?" },
  { "norwegian": "Gutten som bærer koffertene, er veldig sterk.", "russian": "Мальчик, который несёт чемоданы, очень сильный.", "english": "The boy carrying the suitcases is very strong." },
    { "norwegian": "De spiste middag, men de var fortsatt sultne.", "russian": "Они поужинали, но всё равно остались голодными.", "english": "They had dinner, but they were still hungry." },
   { "norwegian": "Hvis du øver hver dag, vil du bli flinkere.", "russian": "Если ты будешь тренироваться каждый день, ты станешь лучше.", "english": "If you practice every day, you will get better." },
  { "norwegian": "Vi dro til stranden, men været var ikke så bra.", "russian": "Мы отправились на пляж, но погода была не очень хорошей.", "english": "We went to the beach, but the weather wasn’t great." },
  { "norwegian": "Jeg hørte at de har flyttet til en ny by.", "russian": "Я слышал, что они переехали в новый город.", "english": "I heard that they have moved to a new city." },
  { "norwegian": "Vet du om vi har nok penger til å kjøpe det?", "russian": "Ты знаешь, хватит ли у нас денег, чтобы купить это?", "english": "Do you know if we have enough money to buy it?" },
  { "norwegian": "Blomsten som står på bordet, er en gave fra henne.", "russian": "Цветок, который стоит на столе, — это подарок от неё.", "english": "The flower on the table is a gift from her." },
  { "norwegian": "Jeg ville lese mer, men jeg var for trøtt.", "russian": "Я хотел почитать ещё, но был слишком усталым.", "english": "I wanted to read more, but I was too tired." },
  { "norwegian": "Hun lo fordi historien var veldig morsom.", "russian": "Она смеялась, потому что история была очень смешной.", "english": "She laughed because the story was very funny." },
  { "norwegian": "Hvis vi finner adressen, kan vi sende invitasjonen i dag.", "russian": "Если мы найдём адрес, мы сможем отправить приглашение сегодня.", "english": "If we find the address, we can send the invitation today." },
  { "norwegian": "Jeg tror at de har solgt huset sitt.", "russian": "Я думаю, что они продали свой дом.", "english": "I think that they have sold their house." },
  { "norwegian": "Kan du fortelle meg om han kommer til møtet?", "russian": "Ты можешь сказать мне, придёт ли он на встречу?", "english": "Can you tell me if he will come to the meeting?" },
  { "norwegian": "Filmen som vi så i går, var veldig spennende.", "russian": "Фильм, который мы смотрели вчера, был очень захватывающим.", "english": "The movie we watched yesterday was very exciting." },
  { "norwegian": "Vi ville dra på ferie, men vi hadde ikke tid.", "russian": "Мы хотели поехать в отпуск, но у нас не было времени.", "english": "We wanted to go on vacation, but we didn’t have time." },
  { "norwegian": "Hun ble hjemme fordi hun følte seg dårlig.", "russian": "Она осталась дома, потому что плохо себя чувствовала.", "english": "She stayed home because she felt unwell." },
  { "norwegian": "Hvis du ser en feil, må du si fra.", "russian": "Если ты увидишь ошибку, ты должен сообщить.", "english": "If you see a mistake, you must let me know." },
  { "norwegian": "Jeg vet at de planlegger å besøke oss snart.", "russian": "Я знаю, что они планируют навестить нас скоро.", "english": "I know that they are planning to visit us soon." },
  { "norwegian": "Har du hørt om de har fått en ny jobb?", "russian": "Ты слышал, получили ли они новую работу?", "english": "Have you heard if they got a new job?" },
  { "norwegian": "Bilen som står utenfor, er hans nye bil.", "russian": "Машина, которая стоит снаружи, — это его новая машина.", "english": "The car parked outside is his new car." },
  { "norwegian": "Det begynte å snø, så vi måtte gå inn.", "russian": "Начал идти снег, поэтому нам пришлось зайти внутрь.", "english": "It started snowing, so we had to go inside." },
  { "norwegian": "Han var trist fordi han mistet telefonen sin.", "russian": "Он был грустным, потому что потерял свой телефон.", "english": "He was sad because he lost his phone." },
    { "norwegian": "Hvis du har tid, kan du hjelpe meg med oppgaven?", "russian": "Если у тебя есть время, ты можешь помочь мне с заданием?", "english": "If you have time, can you help me with the task?" },
  { "norwegian": "Jeg tror at hun har sendt invitasjonen allerede.", "russian": "Я думаю, что она уже отправила приглашение.", "english": "I think that she has already sent the invitation." },
  { "norwegian": "Om du finner ut noe, si fra til meg.", "russian": "Если ты что-то узнаешь, сообщи мне.", "english": "If you find out anything, let me know." },
  { "norwegian": "Hunden som bjeffer utenfor, tilhører naboen.", "russian": "Собака, которая лает снаружи, принадлежит соседу.", "english": "The dog barking outside belongs to the neighbor." },
  { "norwegian": "Vi ønsket å dra tidlig, men det regnet hele dagen.", "russian": "Мы хотели уехать рано, но весь день шёл дождь.", "english": "We wanted to leave early, but it rained all day." },
  { "norwegian": "Han var sint fordi de glemte å ringe ham.", "russian": "Он был зол, потому что они забыли ему позвонить.", "english": "He was angry because they forgot to call him." },
  { "norwegian": "Hvis vi tar denne veien, kan vi komme fram raskere.", "russian": "Если мы пойдём этим путём, мы доберёмся быстрее.", "english": "If we take this route, we can get there faster." },
  { "norwegian": "Jeg vet at de jobber med en ny plan.", "russian": "Я знаю, что они работают над новым планом.", "english": "I know that they are working on a new plan." },
  { "norwegian": "Har du sjekket om restauranten er åpen?", "russian": "Ты проверил, открыт ли ресторан?", "english": "Have you checked if the restaurant is open?" },
  { "norwegian": "Kaken som står på bordet, er hjemmelaget.", "russian": "Торт, который стоит на столе, — домашний.", "english": "The cake on the table is homemade." },
  { "norwegian": "De ville dra på kino, men filmen var utsolgt.", "russian": "Они хотели пойти в кино, но билеты были распроданы.", "english": "They wanted to go to the cinema, but the movie was sold out." }

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

