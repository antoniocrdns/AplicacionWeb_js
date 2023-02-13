Vue.createApp({
  data() {
    return {
      amiibos: [
        {
          amiiboSeries: "Super Smash Bros.", 
          character: "Mario", 
          gameSeries: "Super Mario", 
          head: "00000000", 
          image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png", 
          name: "Mario", 
          release: {
            au: "2014-11-29", 
            eu: "2014-11-28", 
            jp: "2014-12-06", 
            na: "2014-11-21"
          }, 
          tail: "00000002", 
          type: "Figure"
        }, 
        {
          amiiboSeries: "Super Mario Bros.", 
          character: "Mario", 
          gameSeries: "Super Mario", 
          head: "00000000", 
          image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png", 
          name: "Mario", 
          release: {
            au: "2015-03-21", 
            eu: "2015-03-20", 
            jp: "2015-03-12", 
            na: "2015-03-20"
          }, 
          tail: "00340102", 
          type: "Figure"
        }, 
        {
          amiiboSeries: "Super Mario Bros.", 
          character: "Mario", 
          gameSeries: "Super Mario", 
          head: "00000000", 
          image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003c0102.png", 
          name: "Mario - Gold Edition", 
          release: {
            au: "2015-06-25", 
            eu: null, 
            jp: "2015-12-17", 
            na: "2015-03-20"
          }, 
          tail: "003c0102", 
          type: "Figure"
        }, 
        {
          amiiboSeries: "Super Mario Bros.", 
          character: "Mario", 
          gameSeries: "Super Mario", 
          head: "00000000", 
          image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003d0102.png", 
          name: "Mario - Silver Edition", 
          release: {
            au: "2015-05-30", 
            eu: null, 
            jp: null, 
            na: "2015-05-29"
          }, 
          tail: "003d0102", 
          type: "Figure"
        }, 
        {
          amiiboSeries: "8-bit Mario", 
          character: "Mario", 
          gameSeries: "Super Mario", 
          head: "00000000", 
          image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-02380602.png", 
          name: "8-Bit Mario Classic Color", 
          release: {
            au: "2015-09-12", 
            eu: "2015-11-09", 
            jp: "2015-09-10", 
            na: "2015-09-11"
          }, 
          tail: "02380602", 
          type: "Figure"
        }
      ]
    }
  },
  methods: {
    /* async obtenerAmiibo(){ // Seguira funcionando la pagina mientras carga
        const response = await fetch("https://amiiboapi.com/api/amiibo", {
            method: 'GET'
        });

        const data = await response.json(); // Pedirle que mande los datos como JSON
        this.amiibos = data.amiibos;
        this.amiibos;
    } */

    obtenerAmiibo() {
      const amiibo = {
        serie: this.amiiboSeries,
        pesonaje: this.character,
        saga: this.gameSeries,
        nombre: this.name
      }
    }
  },
}).mount('#app')