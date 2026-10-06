const usuarios = [
    {
        nombre: "Diana",
        movimientos: [50000, -20000, 30000]
    },
    {
        nombre: "Carlos",
        movimientos: [100000, -30000, -10000]
    }
];

for (let i = 0; i < usuarios.length; i++) {

    let totalUsuario = 0;

    for (let j = 0; j < usuarios[i].movimientos.length; j++) {

        totalUsuario = totalUsuario + usuarios[i].movimientos[j];

    }

    console.log("Usuario:", usuarios[i].nombre);
    console.log("Total:", totalUsuario);

}