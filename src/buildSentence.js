const sentences = [
    {
        "norwegian": "Hvis det regner, blir vi hjemme.",
        "russian": "Если пойдет дождь, мы останемся дома.",
        "english": "If det regner, blir vi hjemme."
    },
    {
        "norwegian": "Han sa at han var trøtt.",
        "russian": "Он сказал, что устал.",
        "english": "Han sa that han var trøtt."
    },
    {
        "norwegian": "Vet du om butikken er åpen?",
        "russian": "Ты знаешь, открыт ли магазин?",
        "english": "Vet du if butikken er åpen?"
    },
    {
        "norwegian": "Jenta, som løp i parken, er søsteren min.",
        "russian": "Девочка, которая бегала в парке, моя сестра.",
        "english": "Jenta, sif løp i parken, er søsteren min."
    },
    {
        "norwegian": "Vi ble hjemme, derfor så vi filmen sammen.",
        "russian": "Мы остались дома, поэтому посмотрели фильм вместе.",
        "english": "Vi ble hjemme, therefore så vi filmen sammen."
    },
    {
        "norwegian": "Han kom ikke fordi han var syk.",
        "russian": "Он не пришел, потому что был болен.",
        "english": "Han kif ikke because han var syk."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    },
    {
        "norwegian": "Hvis du vil, kan vi gå nå.",
        "russian": "Если хочешь, мы можем пойти сейчас.",
        "english": "If du vil, kan vi gå nå."
    },
    {
        "norwegian": "Jeg vet at han har mye arbeid.",
        "russian": "Я знаю, что у него много работы.",
        "english": "Jeg vet that han har mye arbeid."
    },
    {
        "norwegian": "Kan du si meg om toget er i rute?",
        "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
        "english": "Kan du si meg if toget er i rute?"
    },
    {
        "norwegian": "Huset, som vi så i går, var veldig fint.",
        "russian": "Дом, который мы видели вчера, был очень красивым.",
        "english": "Huset, sif vi så i går, var veldig fint."
    },
    {
        "norwegian": "Han var trøtt, derfor la han seg tidlig.",
        "russian": "Он устал, поэтому лег спать рано.",
        "english": "Han var trøtt, therefore la han seg tidlig."
    },
    {
        "norwegian": "De ble hjemme fordi det regnet.",
        "russian": "Они остались дома, потому что шел дождь.",
        "english": "De ble hjemme because det regnet."
    }
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
    const randomExtraWords = getRandomWords(extraWords, 17 - words.length);
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

