function diaDaSemana(){
    var dia = new Date().getDay();       
    //dia = 1;

    switch(dia){
        case 0:
            document.getElementById("campo3").innerHTML = "Hoje é Domingo";
            break;
        case 1:
            document.getElementById("campo3").innerHTML = "Hoje é Segunda";
            break;
        case 2:
            document.getElementById("campo3").innerHTML = "Hoje é Terça";
            break;
        case 3:
            document.getElementById("campo3").innerHTML = "Hoje é Quarta";
            break;
        case 4:
            document.getElementById("campo3").innerHTML = "Hoje é Quinta";
            break;
        case 5:
            document.getElementById("campo3").innerHTML = "Hoje é Sexta";
            break;
        case 6:
            document.getElementById("campo3").innerHTML = "Hoje é Sabádo";
            break;
        default:
            document.getElementById("Campo3").innerHTML = "Nenhum dia encontrado";
    }

}