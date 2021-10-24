
//datos primitivos

var num = 10;
var str = "texto"
var bol = true;
var und = undefined;
var nul = null; 


console.log (num);

num = str

console.log (num);

bol = 10;


// objeto puede ser coleccion de datos primitivos como objetos cada una de las propiedades tiene que tener un par
var obj = {
    numero: 10,
    texto: "Nuevo Texto",

    objHijo: {
          numero2: 20,
          texto2:"Nuevo texto 2",

    }
}

console.log (obj);