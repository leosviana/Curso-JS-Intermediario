//MANIPULAÇÃO DE DATAS EM JAVASCRIPT

//DATA/HORA ATUAL:
let data = new Date(); //Executando a função do JavaScript para trazer a data/hora atual
console.log(data); //Exibido: Tue Jan 23 2024 17:04:48 GMT-0300 (Horário Padrão de Brasília)

//ANO ATUAL:
let ano = data.getFullYear(); //Executando a função do JavaScript para trazer o ano com 4 digitos
console.log(ano); //Exibido: 2024

//MÊS ATUAL - DE 0 ATÉ 11 SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth(); //Executando a função do JavaScript para trazer o mês atual
console.log(mes); //Exibido: 0 

//MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Feveiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"] //Matriz de meses
let mesEscrito = mesesDoAno[data.getMonth()];
    //[0]      [1]      [2]    [3]    [4]   [5]    [6]    [7]     [8]       [9]      [10]      [11]
    //Janeiro, Feveiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro
console.log(mesEscrito); //Exibido: Janeiro

//PEGAR DIA DO MÊS
let diaMes = data.getDate();
console.log(diaMes); //Exibido: 23


