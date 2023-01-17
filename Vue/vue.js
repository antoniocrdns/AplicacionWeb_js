Vue.createApp({
    data(){
        return{
            /*nombre: 'Antonio',
            edad: '20'*/
            contador: 0
        }
    },
    methods: {
        incrementar(){
            this.contador ++;
        },
        decrementar(){
            if(this.contador > 0){
                this.contador --;
            }
            else {
                alert("No puede seguir decrementando");
            }
        }
    },
}).mount('#app'); // lo que este dentro del id sera afectado
