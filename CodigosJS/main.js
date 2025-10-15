//Ejercicio 1//
let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
alert("Hola, " + nombre + " " + apellido);

//Ejercicio 2//
let Num1 = prompt("Ingrese un numero:");
let Num2 = prompt("Ingrese otro numero:");

let num1 = parseInt(Num1); 
let num2 = parseInt(Num2); 

let sum = num1 + num2;
let res = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

alert("Suma: " + sum);
alert("Resta: " + res);
alert("Multiplicacion: " + mult);
alert("Division: " + div);

//Ejercicio 3//
const numeroAleatorio = Math.random() * 100;

let Numerofijo = prompt("Ingrese un numero: ");
let numeroFijo = parseInt(Numerofijo); 

const resultado = numeroAleatorio * numeroFijo;

alert("El numero aleatorio es: " + numeroAleatorio);
alert("El resultado de la multiplicacion es: " + resultado);

//Ejercicio 4//
let Base = prompt("Ingrese el numero base:");
let Exponente = prompt("Ingrese el exponente:");

let base = parseInt(Base); 
let exponente = parseInt(Exponente); 

let result = Math.pow(base, exponente);

alert(base + " elevado a " + exponente + " es igual a " + result);

//Ejercicio 5//
let cadena1 = prompt("Ingrese la primera cadena:");
let cadena2 = prompt("Ingrese la segunda cadena:");

let mayuscula = cadena1.toUpperCase();
let minuscula = cadena2.toLowerCase();

alert(" " + mayuscula + " " + minuscula)