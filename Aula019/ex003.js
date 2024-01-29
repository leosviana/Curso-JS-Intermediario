
// MANIPULANDO API - VIA CEP
//Acessando um site de forma remota
// https://viacep.com.br/
function buscarCep(){
    let input = document.getElementById("cep").value; //Capturando campo de digitação do cep

    const ajax = new XMLHttpRequest(); //Capturando objeto de requisição
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/'); //Inserindo campo digitação na requisição GET do JSON
    ajax.send(); //Enviando informações JSON
    ajax.onload = function(){ //Carregou as informações do GET do JSON
        //Transformando o texto do JSON em objeto, para manipulá-lo:
        let obj = JSON.parse(this.responseText); 
        //Capturando alguns valores do JSON:
        let logradouro = obj.logradouro; //Declarando variável do logradouro do JSON
        let cidade = obj.localidade; //Declarando variável da cidade do JSON
        let estado = obj.uf; //Declarando variável do estado do JSON

        document.getElementById("texto").innerHTML = "Logradouro: " + logradouro + "<br>Cidade: " + cidade + "<br>Estado: " + estado; //Imprimindo apenas a informação desejada do JSON
    }
}