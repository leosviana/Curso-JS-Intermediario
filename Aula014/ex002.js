function verificaValor(){
        
    //valor = 0;
    valor = "0";
    //swith é literal. Utiliza-se de comparação o ===
    switch(valor){ //Verifica o tipo da variável
        case "0": //zero em formato de string
            //Exibe a descrição no campo2
            document.getElementById("campo2").innerHTML = "A variável é 0 em formato string";
            break;
        case 0:
            document.getElementById("campo2").innerHTML  = "A variável é 0 em formato numérico";
            break;
    }



}