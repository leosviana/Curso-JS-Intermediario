var hora = new Date().getHours();

if(hora < 12){
    var dia = 'Bom dia!';
}else if(hora < 18){
    var dia = 'Boa tarde!';    
}else{
    var dia = 'Boa noite!';
}

document.getElementById("campo2").innerHTML = "Agora são " + hora + ". " + dia;