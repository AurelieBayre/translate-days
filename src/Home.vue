<template>
  <p>
    Nous sommes: {{ getDay() }}
    <button @click="translateEnglish">Translate</button>
    <button @click="translateDeutsch">Übersetzen</button>
  </p>
</template>

<script>
export default {
  data: function() {
    return {
      dayNum: 0,
      isFrench: true,
      isEnglish: false,
      isDeutsch: false,
    };
  },
  methods: {
    translateEnglish() {
      if (!this.isEnglish){
        this.isEnglish = true
        this.isDeutsh = false
        this.isFrench = false
      }else {
        this.isEnglish = false
        this.isFrench = true
      }
    },
    translateDeutsch() {
      if (!this.isDeutsch){
        this.isDeutsch = true
        this.isEnglish = false
        this.isFrench = false
      }else {
        this.isDeutsch = false
        this.isFrench= true
      }
    },
    getDay() {
      const date = new Date()
      const dayNum = date.getDay()
      this.dayNum = dayNum
      switch(this.dayNum){
        case 0:
           this.day = this.isFrench? 'dimanche' : this.isEnglish? 'Sunday' : 'Sonntag'
          return this.day
        case 1:
          this.day = this.isFrench? 'lundi' : this.isEnglish? 'Monday' : 'Montag'
          return this.day
        case 2:
          this.day = this.isFrench? 'mardi' : this.isEnglish? 'Tuesday' : 'Dienstag'
          return this.day
        case 3:
          this.day = this.isFrench? 'mercredi' : this.isEnglish? 'Wednesday' : 'Mittwoch'
          return this.day
        case 4:
            this.day = this.isFrench? 'jeudi' : this.isEnglish? 'Thursday' : 'Donnerstag'
          return this.day
        case 5:
          this.day = this.isFrench? 'vendredi' : this.isEnglish? 'Friday' : 'Freitag'
          return this.day
        case 6:
          this.day = this.isFrench? 'samedi' : this.isEnglish? 'Saturday' : 'Samstag'
          return this.day
      }
    }
  }
};
</script>

