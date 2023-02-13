Vue.createApp({
    data() {
        return {
            cursos: [],
            nombre: '',
            descripcion: '',
            creador: '',
            imagen: '',
            precio: 0,
            cantidad: 0,

            total: 0,
            totalFinal: 0
        }
    },
    methods: {
        agregar(){
            const curso = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                creador: this.creador,
                imagen: this.imagen,
                precio: this.precio,
                cantidad: this.cantidad
            }
            this.cursos.push(curso);
            this.total= this.precio * this.cantidad
            this.totalFinal = this.total + this.totalFinal

        }
    },
}).mount('#app')