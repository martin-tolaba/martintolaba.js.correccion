let nombre
let numero
let apellido

const url = "www.google.com"


nombre = "martin"
numero= "1","3","4","6"
apellido = "tolaba"




console.log(nombre)
console.log(numero)
console.log(apellido)
console.log(url)

let condicion = true

if(condicion){

alert("cumple la condicion")
}
let edad = 17;

if(edad >= 17){

    console.log("eres mayor de edad")
}

let disponiblestock = 15;
let pedidos = 15;

if(pedidos <= disponiblestock){
    console.log("puedes comprar")
}else {
    console.log ("no hay ese en stock")
}

let compra = 300000;

if(compra >= 400000){
    console.log("tiene un 10% de descuento")

 }else if (compra >= 1000000) {
    console.log("tiene un 22% de descuento")
 }else {
    console.log("no tienes beneficios")
 }
let i = 2;

while (i < 5){
    console.log(i)
    i++;
    break;
}
alert("segui sumando")


  function solicitarNombre(){

   let nombreIngresado = prompt("ingrese su nombre")
  alert("el nomrbre ingresado es " + nombreIngresado)  
 }
solicitarNombre();


// me salta error
let resultado5= 0
function sumar(primerNumero,SegundoNumero,tercerNumero,cuartoNumero){
    resultado5 = primerNumero + SegundoNumero;
    console.log(resultado5)
}
sumar(2,8)
sumar(2,2)
//por que esto no funciona???

document.getElementById("añadir al carro").addEventListener ("click", () => {alert("sumaste a tu carrito")})
//por que esto no funciona???


switch (zapatillas) {
    case "nike":
        console.log("es una nike");
        break;
    case "adidas":
        console.log("es una adidas");
        break;
    case "reebok":
        console.log("es una reebok");
        break;
    case "fila":
        console.log("es una fila");
        break;
    default:
        console.log ("no trabajamos con esa marca por el momento");

    }

const iva = x => x * 0.21
let precionike = 500000
let descuento = 50000

let nuevoprecio = resta(
    suma(precionike, iva(precionike)), descuento
)
console.log(nuevoprecio)
//por que esto no funciona??? y me salta error
//array//
const zapatillas = ["adidas","fila", "nike", "reebok"];
const arraynumero1 = ["1","3","4","6"];


console.log(zapatillas)
console.log(arraynumero1)

