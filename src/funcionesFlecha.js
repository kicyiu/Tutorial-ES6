const nombres = ["Carlos", "Jesus", "Jose", "Rafael", "Miguel"];

const numero_caracteres = nombres.map((nombre) => `${nombre} tiene ${nombre.length} carateres`);

const numero_caracteres2 = nombres.map((nombre) => {
    return `${nombre} tiene ${nombre.length} carateres`
});

console.log(numero_caracteres);

console.log(numero_caracteres2);
