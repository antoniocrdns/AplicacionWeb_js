Vue.createApp({
    data() {
        return {
            pokemon: null         
        }
    },
    methods: {
        // GET = obtener
        // POST = crear
        // PUT = modificar
        // DELETE = eliminar
        async getPokemon(){
            const numPokemon = Math.floor(Math.random() * 500); // Generar numeros random pero enteros
            // async no funciona sin await
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + numPokemon, { // El api es un objeto
                method: 'GET' 
            });
            const dataPokemon = await response.json();
            this.pokemon = dataPokemon;
        }
    },
}).mount("#app")