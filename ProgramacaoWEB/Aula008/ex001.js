//FUNÇÕES - SOMA

//É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída;
//Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo o código;
//Uma função JavaScript é executada quando algo a invoca (chama-a);

function soma (valor1, valor2){ //Pode ser inserido valores infinitos
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,23);