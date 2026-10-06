const movimientos = [
    { tipo: "recarga", valor: 50000 },
    { tipo: "retiro", valor: -20000 },
    { tipo: "ninguno", valor: 0 },
    { tipo: "comercio", valor: -15000 },
    { tipo: "retiro", valor: -30000 },
    { tipo: "comercio", valor: -25000 }
];
for (let i = 0; i < movimientos.length; i++) {

    if (movimientos[i].valor === 0) {
        continue;
    }

    if (movimientos[i].tipo === "comercio") {
        console.log("Pago en comercio encontrado en la posición:", i);
        break;
    }

}