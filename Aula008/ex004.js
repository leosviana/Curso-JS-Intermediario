//FUNÇÃO - CALCULAR TEMPERATURA FAHRENHEIT PARA CELSIUS
function paraCelsius(valorFahrenheit){ //Recebe o valor valorFahrenheit
    return (5/9) * (valorFahrenheit - 32); //Calculo da temperatura em Celsius
}

var x = paraCelsius(77); //Armazena a temperatura 77 na variavel x
alert("A temperatura é de " + x + " graus Celsius!"); //Exibe a mensagem