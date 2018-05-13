<template>
  <p>
    Nous sommes: {{ getDay() }}
    <button @click="translate">Translate</button>
  </p>
</template>

<script>
export default {
  data: function() {
    return {
      dayNum: 0,
      isFrench: true
    };
  },
  methods: {
    translate() {
      if (this.isFrench){
        this.isFrench = false
      }else {
        this.isFrench = true
      }
    },
    getDay() {
      const date = new Date()
      const dayNum = date.getDay()
      this.dayNum = dayNum
      switch(this.dayNum){
        case 0:
          this.day = this.isFrench? 'dimanche' : 'sunday'
          return this.day
        case 1:
          this.day = this.isFrench? 'lundi' : 'monday'
          return this.day
        case 2:
          this.day = this.isFrench? 'mardi' : 'tuesday'
          return this.day
        case 3:
          this.day = this.isFrench? 'mercredi' : 'jeudi'
          return this.day
        case 4:
          this.day = this.isFrench? 'jeudi' : 'thursday'
          return this.day
        case 5:
          this.day = this.isFrench? 'vendredi' : 'friday'
          return this.day
        case 6:
          this.day = this.isFrench? 'samedi' : 'saturday'
          return this.day
      }
    }
  }
};
</script>

