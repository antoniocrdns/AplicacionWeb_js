Vue.createApp({
    data() {
        return {
            rango: 0
        }
    },
    computed: { // es un metodo auto ejecutable
        color(){
            if(this.rango > 0 && this.rango < 41){
                return 'success'
            }
            else if(this.rango >= 41 && this.rango < 81){
                return 'warning'
            }
            else{
                return 'danger'
            }
        }
    }
}).mount("#app")