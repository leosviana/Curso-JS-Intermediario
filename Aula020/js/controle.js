let contador = 0; //Contagem das tarefas iniciando com 0
let input = document.getElementById('inputTarefa'); //Campo de inserção de texto
let btnAdd = document.getElementById('btn-add'); //Botão adicionar
let main = document.getElementById('areaLista'); //Area de listagem das tarefas

function addTarefa(){ 
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;
    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput !== "") && (valorInput !== null) && (valorInput != undefined)){
        ++contador; //Indice de contagem de cada tarefa
        let novoItem = //Adicionando novo item
            `<div id="${contador}" class="item">
                <div id="icone_${contador}" onclick="marcarTarefa(${contador})" class="item-icone">
                    <i class="mdi mdi-circle-outline"></i>
                </div>
                <div onclick="marcarTarefa(${contador})" class="item-nome">
                    ${valorInput} 
                </div>
                <div class="item-botao">
                    <button onclick="deletar(${contador})" class="delete">
                        <i class="mdi mdi-delete"></i>Deletar
                    </button>
                </div>
            </div>`

        //ADICIONAR OUTRO ITEM NO MAIN
        main.innerHTML += novoItem; //Mantem os itens na lista e adiciona um novo

        //LIMPAR OS CAMPOS
        input.value = "";  //Zerar campo
        input.focus(); //Focar no campo de input
    }
}

//EVENTO PARA TECLAR O ENTER
input.addEventListener("keyup", function(event){
    //SE TECLOU ENTER(TECLA 13)
    if(event.keyCode === 13){ //Se teclar o ENTER
        event.preventDefault(); //Evitar qualquer outra ação do ENTER no contexto
        btnAdd.click(); //Clicar no botão "Adicionar"
    }
})

//FUNÇÃO DELETAR TAREFA
function deletar(id){
    var tarefa = document.getElementById(id); //Capturando o campo de índice da tarefa
    tarefa.remove(); //Remove elemento do HTML
}

//FUNÇÃO MARCAR TAREFA
function marcarTarefa(id){
    var item = document.getElementById(id); //Capturando o campo de índice da tarefa
    var classe = item.getAttribute('class'); //Capturando o atributo "class", que é o nome da classe

    if (classe == "item"){ //Se o nome da classe for "item"
        item.classList.add('clicado'); //Adiciona a descrição "clicado" na classe
        var icone = document.getElementById('icone_' + id); //Indice do item da lista
        icone.classList.remove('mdi-circle-outline'); //Remove o circulo vazio
        icone.classList.add('mdi-check-circle'); //Adiciona o circulo marcado
        item.parentNode.appendChild(item); //parentNode (Area do main) - Adicionando item filho ao final do main
    }else{
        item.classList.remove('clicado'); //Adiciona a descrição "clicado" na classe
        var icone = document.getElementById('icone_' + id); //Indice do item da lista
        icone.classList.remove('mdi-check-circle'); //Remove o circulo vazio
        icone.classList.add('mdi-circle-outline'); //Adiciona o circulo marcado
    }

}