
//OBJETO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001,
    motor: ["1.6", "1.4", "1.0"]
}

//CONVERTENDO OBJETO EM TEXTO:
let texto = JSON.stringify(carro);
document.getElementById("area").innerHTML = texto; //Imprimindo em formato texto
console.log(texto.modelo); //Resultado: Undefined
                           //É exibido essa informação porque não podemos manipular o objeto, pois é um texto

//CONVERTENDO TEXTO EM OBJETO:
let obj = JSON.parse(texto);
console.log(obj.modelo); //Resultado: Uno
                         //Agora que está em formato de objeto, é possível manipulá-lo
console.log(obj.motor[2]); //Carregando a posição 3 da matriz