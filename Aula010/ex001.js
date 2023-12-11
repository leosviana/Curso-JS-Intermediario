/*EVENTOS
Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.
Existem muitos eventos. Vejam os mais utilizados:

#MOUSES - CLIQUES:
    onclick -> Disparado quando recebe um clique.
    ondblclick -> Disparado quando clique duplo.

#MOUSE - MOVIMENTO:
    onmouseover -> Disparado quando o mouse está sobre.
    onmouseout -> Disparado quando o mouse está para fora do elemento.
    onmousemove -> Disparado quando o mouse é movido no elemento.
    onmousedown -> Disparado quando o clique no botão foi pressionado.
    onmouseup -> Disparado quando o clique no botão é liberado

#INPUT:
onfocus -> Disparado quando o elemento recebe o foco. Válido para input
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.


onkeydown -> Disparado quando um tecla é pressionada.
onkeypress -> Disparado quando um tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando uma página terminou de ser carregada. Body.
onresize -> Disparado quando há um redirecionamento da janela
*/

function eventoClick(){ //onclick -> Disparado quando recebe um clique. 
    alert("Acionou um evento de 1 clique. Será alterado a cor do fundo para amarelo."); //Exibe uma mensagem
    document.body.style.backgroundColor = "yellow"; //Altera a cor do fundo para amarelo
}

function eventoDblClick(){ //ondblclick -> Disparado quando clique duplo.
    alert("Acionou um evento de 2 cliques");
}

function viraVermelho(){ //onmouseover -> Disparado quando o mouse está sobre.
    let div = document.getElementById("teste2");
    div.style.backgroundColor = "red";
}

function viraAzul(){ //onmouseout -> Disparado quando o mouse está para fora do elemento.
    let div = document.getElementById("teste2");
    div.style.backgroundColor = "blue";
}

function adicionaTexto(){ //onmousemove -> Disparado quando o mouse é movido no elemento.
    let p = document.getElementById("texto");
    p.append('O mouse moveu<br>');
}

function cliqueNoBotao(){ //onmousedown -> Disparado quando o clique no botão foi pressionado.
    alert("Você clicou no botão");
}

function cliqueNoBotaoESolte(){ //onmouseup -> Disparado quando o clique no botão é liberado. Somente dentro do botão.
    alert("Você clicou no botão, segurou e soltou o clique");
}