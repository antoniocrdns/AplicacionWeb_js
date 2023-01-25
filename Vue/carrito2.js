Vue.createApp({
    data(){
        return{
            productos: [
                {
                    producto: '',
                    precio: '',
                    cantidad: ''
                }
            ]
        }
    },
    methods: {
        agregar(){
            const producto = {
                producto: this.producto,
                precio: this.precio,
                cantidad: this.cantidad
            }
            this.productos.push(producto);
        }
    },
}).mount('#app')