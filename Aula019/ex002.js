
// API - VIA CEP
//Acessando um site de forma remota
// https://viacep.com.br/
const ajax = new XMLHttpRequest(); //Capturando objeto de requisição 
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/'); //Insirindo caminho do JSON
    //GET - Pegar informações
ajax.send(); //Enviar informações

ajax.onload = function(){ //Carregou as informações do GET
    document.getElementById("respostaGET").innerHTML = "Capturado o JSON em formato texto: </br>" + this.responseText;
    let obj = JSON.parse(this.responseText); //Transformando texto em objeto para manipulação
    document.getElementById("respostaGETManipulado").innerHTML = "Capturado apenas o DDD: " + obj.ddd;
}
