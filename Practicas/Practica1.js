// Capturar un numero y retornar un dia de la semana
const numero = prompt("Captura un numero"); 

const diaSemanal = (numero) => {

    if (numero == 1) {
        console.log("Lunes pa");
    }
    else if (numero == 2) {
        console.log("Martes siu");
    }
    else if (numero == 3) {
        console.log("Miercoles de frescura");
    }
    else if (numero == 4) {
        console.log("Jueves casi viernes");
    }
    else if (numero == 5) {
        console.log("Viernes de desmadre");
    }
    else if (numero == 6) {
        console.log("Sabadoooo!!");
    }
    else if (numero == 7) {
        console.log("Domingo de Cristo nuestro señor");
    }
    else {
        console.log("Ese dia no existe");
    }
}

diaSemanal(numero);