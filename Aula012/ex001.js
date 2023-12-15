//JAVASCRIPT - MÉTODOS PARA ARRAYS
const pessoa = ["Leandro", "Silveira", "Ramos", "Teixeira", 30, "Professor"]; //ARRAY

pessoa.pop(); //MÉTODO: POP - Remove o ultimo item do array.
pessoa.push("Altura: 1,90"); //MÉTODO: PUSH - Insere um valor ao final do array.
pessoa.shift(); //MÉTODO: SHIFT - Remove o primeiro item do array (Leandro). Os indices são reordenados.
pessoa.unshift("YRSSDFS"); //MÉTODO: UNSHIFT - Insere um valor no inicio do array. Os indices são reordenados.
delete pessoa[2]; //MÉTODO: DELETE - Remove um valor da matriz. O índice continua fixo.
                  //                //0        //1         //2         //3       //4  //5
                  //const pessoa = ["Leandro", "Silveira", undefined, "Teixeira", 30, "Professor"]; 
document.getElementById("teste").innerHTML = pessoa.join(" - "); //MÉTODO: JOIN - Insere uma valor entre o registro.
