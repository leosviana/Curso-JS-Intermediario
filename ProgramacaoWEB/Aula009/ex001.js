/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.
Ex.: const carro = {marca: "ford", modelo: "ka", ano: 2015}
Os valores dentro de um objeto são chamados propriedades.
Objetos também podem ter métodos. Um método é uma função colocadas dentro de uma propriedade.
*/

let elemento = "água"; //Variável simples

const carro = { //Por padrão sempre utilizar "const" por ser constante e nunca pode ser mudado.
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function(){alert('Biiiiii')},
    completo: function(){
        return alert("A marca é " + this.marca + " e o modelo é " + this.modelo);
    }
};
console.log(carro.ano); //Exibindo a propriedade no console
console.log(carro["marca"]); //Assim também exibe igual

carro.buzina(); //Chamando a função simples que está dentro do objeto "carro"
carro.completo(); //Chamando a função completa que está dentro do objeto "carro"