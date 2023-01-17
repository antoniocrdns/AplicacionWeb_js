const persona = {
    nombre: 'Antonio',
    edad: '20',
    genero: 'Masculino',
    altura: '1.71',
    colorPelo: 'Amarillo',
    facha: true
}

// Manera antigua de declarar objetos
/*const nombre = persona.nombre;
const edad = persona.edad;
const genero = persona.genero;
const altura = persona.altura;
const colorPelo = persona.colorPelo;
const facha = persona.facha;*/

// Manera nueva en una sola linea
const {nombre, edad, genero, altura, colorPelo, facha} = persona;

console.log(`Hola perro, soy ${nombre} tengo ${edad} y mi genero es ${genero}.
Mido ${altura} cm y mi color de cabello es ${colorPelo}. Facha = ${facha}`)
