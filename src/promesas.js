const promesa = new Promise((resolve, reject) => {
    //Accion que se ejecutara
    setTimeout(() => {
        const exito = true;
        if(exito) {
            resolve('La operacion tuvo exito');
        }
        else {
            reject('La operacion no tuvo exito');
        }
    }, 4000);
});

promesa.then((mensaje) => {
    alert(mensaje);
}, (mensaje) => {
    alert(mensaje);
});

//otra manera de llamar el error
/* promesa.catch(() => {
    alert('No exitosa');
}); */