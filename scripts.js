"use strict"
let horas = 0;
let minutos = 0;
let segundos = 0;
let ms = 0;
let cronometro;
let ContadorStart = 0;
let ContadorPause = 0;
function start(){
    ContadorStart += 1;
    if(ContadorStart == 1) {
        cronometro = setInterval(()=>{timer();},10);
        
    }
    else{
        clearInterval(cronometro);
        horas = 0;
        minutos = 0;
        segundos = 0;
        ms = 0;
        document.getElementById("Cronometro").innerText="00:00:00:00";
        ContadorStart = 0;
        
    }
    console.log("Contador Start está:" + ContadorStart)
}
function pause(){
    ContadorPause += 1;
    if(ContadorStart == 1){
        clearInterval(cronometro);
        if(ContadorPause == 1){
            clearInterval(cronometro);
            ContadorPause += 1

        }
        else{
            clearInterval(cronometro);
            cronometro = setInterval(()=>{timer();},10);
            ContadorPause = 0;
        }
        
        console.log("Posso o start está : " + ContadorStart);
    }
    else{
        ContadorPause -= 1;
        console.log("Não Posso o start está : " + ContadorStart);
    }
    // ContadorPause -= 1;
}
function stop(){
    ContadorStart = 0;
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;
    ms = 0;
    document.getElementById("Cronometro").innerText="00:00:00:00";
    
}
function timer(){
    ms++;
    if(ms == 100){
        ms = 0;
        segundos++;
        if(segundos == 59){
            segundos = 0;
            minutos++;
            if( minutos == 59){
                minutos == 0;
                horas++;
            };
        };
    };
    let TEXTE = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos) + ':' + (ms < 10 ? '0' + ms : ms);


    document.getElementById("Cronometro").innerText= TEXTE;
    return TEXTE;
}
