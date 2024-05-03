
//setTimeout - ATIVA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO ESPECIFICADO
function start(){ //FUNÇÃO DE CONTAGEM SIMPLES
    document.getElementById("contagem").innerHTML = "Começou a contar"; //Exibe informação
    contagem = setTimeout(function(){  //Armazena o valor resultante da função na variável "contagem"
        document.getElementById("contagem").innerHTML = "Executou o setTimout"; //Exibe informação
        document.body.style.backgroundColor = "yellow"; //Pinta o fundo de amarelo
    }, 5000); //Contar até 5 segundos
}

//clearTimeout - PAUSA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO ESPECIFICADO
function stop(){ //Função de pausar a contagem
    clearTimeout(contagem); //Executa função do JS. Limpa o valor da variável "contagem"
    document.getElementById("contagem").innerHTML = "0"; //Exibe o valor 0 para iniciar a contagem novamente   
    document.body.style.backgroundColor = "Blue"; //Pinta o fundo de azul
}

//setInterval - EXECUTA REPETIDAMENTE DE A CORDO COM INTERVALO DE TEMPO INFORMADO
function start2(){ //FUNÇÃO DE CONTAGEM PROGRESSIVA
    contagem = setInterval(function() { //Armazena o valor resultante da função na variável "contagem"
        var cronometro = document.getElementById("contagem").innerHTML; //Captura o valor do campo texto do HTML
        var soma = parseInt(cronometro) + 1; //Converte o campo texto em numero inteiro e soma + 1
        document.getElementById("contagem").innerHTML = soma; //Exibe o valor atualizado da contagem
}, 1000); //Contar de 1 em 1 segundo
}

//clearInterval - PAUSA A FUNÇÃO DE INTERVALO
function stop2(){ //Função de pausar a contagem
    clearInterval(contagem); //Executa função do JS. Limpa o valor da variável "contagem"
    document.getElementById("contagem").innerHTML = "0"; //Exibe o valor 0 para iniciar a contagem novamente   
}

//setInterval - EXECUTA REPETIDAMENTE DE A CORDO COM INTERVALO DE TEMPO INFORMADO
function start3(){ //FUNÇÃO DE CONTAGEM REGRESSIVA
    document.getElementById("contagem").innerHTML = "100"; //Exibe o valor 100 no campo de contagem 
    contagem = setInterval(function() { //Armazena o valor resultante da função na variável "contagem"        
        var cronometro = document.getElementById("contagem").innerHTML; //Captura o valor do campo texto do HTML
        var subtrair = parseInt(cronometro) - 1; //Converte o campo texto em numero inteiro e subtrai - 1

        if(subtrair === 0){ //Se o valor for igual à 0
            document.getElementById("contagem").innerHTML = "Tempo esgotado"; //Exibe informação
            stop3(); //Executa a função de pausar a contagem
        }else{ //Se não
            document.getElementById("contagem").innerHTML = subtrair; //Exibe o valor atualizado da contagem
        }        
}, 1000); //Contar de 1 em 1 segundo
}

//clearInterval - PAUSA A FUNÇÃO DE INTERVALO
function stop3(){ //Função de pausar a contagem
    clearInterval(contagem); //Executa função do JS. Limpa o valor da variável "contagem"
    document.getElementById("contagem").innerHTML = "0";  //Exibe o valor 0 para iniciar a contagem novamente   
}