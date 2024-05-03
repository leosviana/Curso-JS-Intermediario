//MANIPULAÇÃO DE DATAS EM JAVASCRIPT

//DATA/HORA ATUAL:
let data = new Date(); //Executando a função do JavaScript para trazer a data/hora atual
console.log("Data/hora atual: " + data); //Exibido: Tue Jan 23 2024 17:04:48 GMT-0300 (Horário Padrão de Brasília)

//ANO ATUAL:
let ano = data.getFullYear(); //Executando a função do JavaScript para trazer o ano com 4 digitos
console.log("Ano atual: " + ano); //Exibido: 2024

//MÊS ATUAL - DE 0 ATÉ 11, SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth(); //Executando a função do JavaScript para trazer o mês atual
console.log("Mês atual: " + mes); //Exibido: 0 

//MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Feveiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"] //Matriz de meses
let mesEscrito = mesesDoAno[data.getMonth()];
    //[0]      [1]      [2]    [3]    [4]   [5]    [6]    [7]     [8]       [9]      [10]      [11]
    //Janeiro, Feveiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro
console.log("Mês escrito atual: " + mesEscrito); //Exibido: Janeiro

//PEGAR DIA DO MÊS:
let diaMes = data.getDate();
console.log("Dia atual: " + diaMes); //Exibido: 23

//PEGAR DIA DA SEMANA - DE 0 ATÉ 6, SENDO 0 DOMINGO E 6 SÁBADO
let diaSemana = data.getDay();
console.log("Dia da semana: " + diaSemana); //Exibido: 2

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
    //[0]      [1]      [2]    [3]     [4]     [5]    [6]
    //Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado
console.log("Dia da semana escrito: " + diaSemanaEscrito); //Exibido: Terça

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log("Hora: " + hora); //Exibido: 17

//PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log("Minutos: " + minutos); //Exibido: 54

//PEGAR OS SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log("Segundos: " + segundos); //Exibido: 39

//PEGAR OS SEGUNDOS - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log("Milésimos: " + milisegundos); //Exibido: 196

//PEGAR A DATA/HORA NO PADRÃO BRASILEIRO (DIA / MES / ANO / HORA)
let dataHoraBR = data.toLocaleString('pt-BR');
console.log("Dia/Mês/Ano Hora:minuto:segundo: " + dataHoraBR); //Exibido: 23/01/2024, 17:57:35

//PEGAR A DATA NO PADRÃO BRASILEIRO (DIA / MES / ANO)
let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'}); //Exibe a data encurtada
console.log("Dia/Mes/Ano: " + dataBR);

//PEGAR A HORA NO PADRÃO BRASILEIRO (HORA)
let horaBR = data.toLocaleString('pt-BR', {timeStyle: 'short'}); //Exibe a data encurtada
console.log("Hora: " + horaBR);

//PEGAR VALORES SEPARADOS
d = new Date();
diaMes = d.getDate(); //Carrega o dia
mes = d.getMonth() + 1; //Carrega o mês inicial (0) + 1
ano = d.getFullYear(); //Carrega o ano

function addZero(x){
    return x < 10 ? '0' + x : '' + x; 
    //Se o mês(x) for menor que 10, acrescenta 0+mês(x), senão, deixa vazio e exibe só o mês(x)
}
let dataPadraoBR = "Data separada: " + addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

//COMPARAR DATAS - MAIOR OU MENOR
var hoje = new Date();
var vencimento = new Date(2024, 0, 24);

if(hoje > vencimento){
    console.log("Sua conta está vencida");
}else{
    console.log("Ainda não venceu, tudo certo!");
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2024,0,20); //2024/01/01
var diferencaTempo = dataInicial.getTime() - dataFinal.getTime(); //Diferença em milesegundos
var diferencaTempo = Math.ceil(diferencaTempo / (24 * 60  * 60 * 1000)); //Cálculo de milésimos de segundos para dias
    //Math -> Função matemática do JavaScript
    //ceil -> Arredondar valor matemático
    //(hora * minuto * segundo * milésimos)
console.log("Diferença de duas datas: " + diferencaTempo + " dias.");