//FUNÇÕES

//É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída;
//Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo o código;
//Uma função JavaScript é executada quando algo a invoca (chama-a);

function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}
var total = realParaDolar(10, 5.08); //valor do real e cotacao do dolar

alert(total);