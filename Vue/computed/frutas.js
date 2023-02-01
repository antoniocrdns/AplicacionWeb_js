Vue.createApp({
    data(){
        return{
            fruta: ''
        }
    },
    computed:{
        selectorFrutas(){
            if(this.fruta == "manzana"){
                return '../../images/manzana.jpg';
            }
            else if(this.fruta == "coco"){
                return '../../images/coco.jpg';
            }
            else if(this.fruta == "platano"){
                return '../../images/platano.gif';
            }

        }
    }
}).mount("#app")