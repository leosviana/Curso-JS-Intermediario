
function verificaCor(){
    let cor = document.getElementById("cor").value;

    switch (cor){
        case "azul":
            //Mudar cor de fundo para azul
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            //Muda cor de fundo para vermelho
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            //Muda cor de fundo para amarelo
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            //Valor padrão caso não seja nenhuma das opções acima
            document.body.style.backgroundColor = "white";
            document.getElementById("campo1").innerHTML = "Nenhuma cor disponível para '" + cor + "'";
    }

}

