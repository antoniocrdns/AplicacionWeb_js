Vue.createApp({
    data() {
        return {
            pokemons: []     
        }
    },
    methods: {
        // GET = obtener
        // POST = crear
        // PUT = modificar
        // DELETE = eliminar
        async getPokemon(){
            
            for (let i = 1; i <= 151; i++){ 
                // async no funciona sin await
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, { // El api es un objeto
                    method: 'GET' 
                });
                const dataPokemon = await response.json();
                this.pokemons.push(dataPokemon);

            }

        }
    },
}).mount("#app")