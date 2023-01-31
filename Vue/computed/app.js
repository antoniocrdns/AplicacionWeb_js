Vue.createApp({
    data() {
        return {
            edad: 0
        }
    },
    computed:{
        calculoEdad(){
            if (this.edad >= 18 && this.edad <= 100) {
                return "Pasale papu al desmadre ya estas bien ruco";
            }
            else if (this.edad > 100) {
                return "Ya deberias estar muerto";
            }
            else if (this.edad < 0) {
                return "Eso no existe";
            }
            else if(this.edad == 0){
                return "";
            }
            else {
                return "No prro tas muy chavo";
            }
        }
    }
}).mount("#app")