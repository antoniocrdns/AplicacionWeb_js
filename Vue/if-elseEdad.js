Vue.createApp({
    data() {
        return {
            edad: true
        }
    },
    methods: {
        capturarEdad() {
            this.edad = prompt("Dame tu edad: ");
            if (this.edad >= 18 && this.edad <= 100) {
                console.log("Pasale papu al desmadre ya estas bien ruco");
            }
            else if (this.edad > 100) {
                console.log("Ya deberias estar muerto");
            }
            else if (this.edad <= 0) {
                console.log("Eso no existe");
            }
            else {
                console.log("No prro tas muy chavo");
            }
        }
    }
}).mount('#app')