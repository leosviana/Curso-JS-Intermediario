
//EXIBIR CONTAGEM DE 1 Á 10
for (let i=1; i <= 10; i++){
    document.getElementById("campo1").innerHTML += i + ", ";
}

//EXIBIR CONTAGEM DE ANOS CRESCENTE DE 1900 ATÉ 2024 
for(let i=1900; i<=2024; i++){
    document.getElementById("ano-ace").innerHTML += "<option value='"+i+"'>" +i+ "</option>"
}

//EXIBIR CONTAGEM DE ANOS DECRESCENTE DE 1900 ATÉ 2024
for(let i=2024; i>=1900; i--){
    document.getElementById("ano-dec").innerHTML += "<option value ='"+i+"'>" +i+ "</option>"
}

//EXIBIR CONTAGEM DE ANOS DECRESCENTE DE 1900 ATÉ ANO ATUAL AUTOMATICAMENTE
var ano = new Date().getFullYear(); //Captura sempre o ano atual
for(let i=ano; i>=1900; i--){
    document.getElementById("ano-dec-ano-auto").innerHTML += "<option ='"+i+"'>" +i+ "</option>" 
}

//ARRAY DE CARROS COM LAÇO FOR
const carros = ["Gol", "Fusca", "Brasília", "Del rey", "Chevette"];
var tamanho = carros.length; //Armazena todas as informações do ARRAY na variável

for(let i=0; i<tamanho; i++){ //contador dentro do ARRAY
    document.getElementById("carros").innerHTML += carros[i] + " - "; //Exibe os carros do ARRAY
}