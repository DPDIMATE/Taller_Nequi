const prompt = require('prompt-sync')();
let opcion;
do { 
    console.log("1. ver estado");
    console.log("2. enviar dinero");
    console.log("3. recargar celular");
    console.log("4. salir");
 
opcion = prompt("Elija una opción: ");
if (opcion === "1") {
    console.log("Su estado de cuenta es: $100000");
}else if (opcion === "2") {
    console.log("Seleccionar enviar dinero ");
}else if (opcion === "3") {
    console.log("Seleccionar recargar");
}else if (opcion === "4") {
    console.log("Saliendo de Nequi...");
}
} while (opcion !== "4");