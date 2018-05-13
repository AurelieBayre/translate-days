<template>
  <p @mouseover="getDay">Nous sommes: {{ day }}
  <button @click="translate">Translate</button>
  </p>
</template>

<script>
export default {
  data: function() {
    return {
      dayNum: 1,
      day: "I dont know...",
      isFrench: true
    };
  },
  methods: {
    getDay() {
      switch(this.dayNum){
        case 0:
          this.day = 'dimanche'
        case 1:
          this.day = 'lundi'
        case 2:
          this.day = 'mardi'
        case 3:
          this.day = 'mercredi'
        case 4:
          this.day = 'jeudi'
        case 5:
          this.day = 'vendredi'
        case 6:
          this.day = 'samedi'
      }
    },
    translate() {
      if (this.isFrench === true) {
        this.isFrench = false
        switch(this.dayNum) {
          case 0:
            this.day = 'sunday'
          case 1:
            this.day = 'monday'
          case 2:
            this.day = 'tuesday'
          case 3:
            this.day = 'wednesday'
          case 4:
            this.day = 'thursday'
          case 5:
            this.day = 'friday'
          case 6:
            this.day = 'saturday'
        }
      } else {
        this.isFrench = true
        switch(this.dayNum) {
          case 0:
          this.day = 'dimanche'
        case 1:
          this.day = 'lundi'
        case 2:
          this.day = 'mardi'
        case 3:
          this.day = 'mercredi'
        case 4:
          this.day = 'jeudi'
        case 5:
          this.day = 'vendredi'
        case 6:
          this.day = 'samedi'
        }
      }
      
    }
  }
};
</script>

