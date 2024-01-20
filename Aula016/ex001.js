
//setTimeout - ATIVA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO ESPECIFICADO
function start(){
    document.getElementById("contagem").innerHTML = "Começou a contar";
    contagem = setTimeout(function(){
        document.getElementById("contagem").innerHTML = "Executou o setTimout";
        document.body.style.backgroundColor = "yellow";
    }, 5000);
}

//clearTimeout - PAUSA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO ESPECIFICADO
function stop(){
    clearTimeout(contagem);   
    document.getElementById("contagem").innerHTML = "Parou a contagem";
    document.body.style.backgroundColor = "Blue";
}

//setInterval - EXECUTA REPETIDAMENTE DE A CORDO COM INTERVALO DE TEMPO INFORMADO
function start2(){ 
    setInterval(function() {
        var cronometro = document.getElementById("contagem").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("contagem").innerHTML = soma;
}, 1000);
}

//clearInterval - PAUSA A FUNÇÃO DE INTERVALO
function stop2(){ 
    clearInterval(contagem);
    document.getElementById("contagem").innerHTML = "Parou a contagem";
    document.body.style.backgroundColor = "PURPLE";
}