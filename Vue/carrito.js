Vue.createApp({
    data(){
        return{
            producto: '',
            carrito: [
                /* 'tomato',
                'mota',
                'cepolla' */
            ]
        }
    },
    methods:{
        agregar(){
            this.carrito.push(this.producto);
            this.producto="";
        }
    }
}).mount('#app')