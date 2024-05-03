function verificar(){
    let nome = document.getElementById("nome").value; //capturando o valor do campo

    if (nome=="" || nome==null){
        let p = document.getElementById("campo3");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    }else{
        let p = document.getElementById("campo3");
        p.innerHTML = "Parabéns, preenchido certinho!";
        p.style.color = "green";
    }
}