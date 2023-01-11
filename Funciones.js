// Crear una funcion para  calcular la edad
const edad = prompt("Cual es tu edad"); 

const calcularEdad = (edad) => {

    if (edad >= 18 && edad <= 100) {
        console.log("Pasale papu al desmadre ya estas bien ruco");
    }
    else if (edad > 100) {
        console.log("Ya deberias estar muerto");
    }
    else if (edad <= 0) {
        console.log("Eso no existe");
    }
    else {
        console.log("No prro tas muy chavo");
    }
}

calcularEdad(edad);