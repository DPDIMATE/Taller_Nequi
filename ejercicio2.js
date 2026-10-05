const prompt = require('prompt-sync')();
const pinCorrecto = "1234";
let intentos = prompt("Ingrese su PIN: ");
while (intentos !== pinCorrecto) {
    console.log("PIN incorrecto. Intente nuevamente.");
    intentos = prompt("Ingrese su PIN: ");
}
console.log("Bienvenida a nequi");
