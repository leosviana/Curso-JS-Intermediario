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
                <div class="item-icone">
                    <i class="mdi mdi-circle-outline"></i>
                </div>
                <div class="item-nome">
                    ${valorInput} 
                </div>
                <div class="item-botao">
                    <button onclick="deletar()" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
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
    if(event.keyCode === 13){
        event.preventDefault(); //Evitar qualquer outra ação do ENTER no contexto
        btnAdd.click(); //Clicar no botão "Adicionar"
    }
})