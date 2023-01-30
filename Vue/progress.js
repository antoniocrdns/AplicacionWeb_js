Vue.createApp({
    data() {
        return {
            rango: 0,
            max: ''
        }
    },
    methods: {
        progreso(){
            this.formatter = value => '${value}'
        }
    },
}).mount("#app")