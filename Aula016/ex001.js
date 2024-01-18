
//ATIVA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO ESPECIFICADO
function start(){
    document.getElementById("contagem").innerHTML = "Começou a contar";
    setTimeout(function(){
        document.getElementById("contagem").innerHTML = "Executou o setTimout";
        document.body.style.backgroundColor = "yellow";
    }, 5000);
}