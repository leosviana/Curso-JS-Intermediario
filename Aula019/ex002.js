
//Acessando um site de forma remota
const ajax = new XMLHttpRequest(); //Capturando objeto de requisição 
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/'); //Insirindo caminho do JSON
    //GET - Pegar informações
ajax.send(); //Enviar informações

ajax.onload = function{ //Carregou as informações do GET
    document.getElementById("respostaGET").innerHTML = this.responseText;
}
