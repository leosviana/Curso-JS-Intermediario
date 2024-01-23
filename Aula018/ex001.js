//MANIPULAÇÃO DE DATAS EM JAVASCRIPT

//DATA/HORA ATUAL:
let data = new Date(); //Executando a função do JavaScript para trazer a data/hora atual
console.log(data); //Exibido: Tue Jan 23 2024 17:04:48 GMT-0300 (Horário Padrão de Brasília)

//ANO ATUAL:
let ano = data.getFullYear(); //Executando a função do JavaScript para trazer o ano com 4 digitos
console.log(ano); //Exibido: 2024

//MÊS ATUAL - DE 0 ATÉ 11, SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth(); //Executando a função do JavaScript para trazer o mês atual
console.log(mes); //Exibido: 0 

//MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Feveiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"] //Matriz de meses
let mesEscrito = mesesDoAno[data.getMonth()];
    //[0]      [1]      [2]    [3]    [4]   [5]    [6]    [7]     [8]       [9]      [10]      [11]
    //Janeiro, Feveiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro
console.log(mesEscrito); //Exibido: Janeiro

//PEGAR DIA DO MÊS:
let diaMes = data.getDate();
console.log(diaMes); //Exibido: 23

//PEGAR DIA DA SEMANA - DE 0 ATÉ 6, SENDO 0 DOMINGO E 6 SÁBADO
let diaSemana = data.getDay();
console.log(diaSemana); //Exibido: 2

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
    //[0]      [1]      [2]    [3]     [4]     [5]    [6]
    //Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado
console.log(diaSemanaEscrito); //Exibido: Terça

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora); //Exibido: 17

//PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos); //Exibido: 54

//PEGAR OS SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos); //Exibido: 39

//PEGAR OS SEGUNDOS - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos); //Exibido: 196

//PEGAR A DATA NO PADRÃO BRASILEIRO
let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR); //Exibido: 23/01/2024, 17:57:35