//Criando a classe “Carro”:
class Carro{
    constructor (valor1, valor2, valor3){ //Parametros de entrada
        this.marca = valor1; //This = Nesse objeto, o atributo “marca” recebe o valor1
        this.modelo = valor2; //This = Nesse objeto, o atributo “modelo” recebe o valor2
        this.ano = valor3; //This = Nesse objeto, o atributo “ano” recebe o valor3
    }
    buzinou(){ //Definindo método/ação da classe
        return this.modelo + " buzinou: Biiiiiii!";
    }
}
//Enviando informações para a classe “Carro” para criar o objeto “Uno”:
const uno = new Carro("Fiat", "Uno", 2001);
    // const → Constante
    // uno → Nome do objeto
    // new → Novo objeto
    // Carro → Classe que será utilizada. Utilizar sempre a letra inicial em maiúsculo
    // (valor1, valor2, valor3) → informações que será repassado para a classe
//Exibindo que o Uno está buzinando:
console.log(uno.buzinou()); //variável.método 

//Exibindo o ano do gol:
const gol = new Carro("Volkswagem", "Gol", 2013);
console.log(gol.ano); 
//Alterando o ano do gol:
gol.ano = 2014; //Alterando variável do objeto
console.log(gol.ano);