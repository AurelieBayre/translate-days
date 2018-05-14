<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <img class="img-fluid" v-bind:src=item.pic v-bind:alt=item.name>

    </div>
      <div class="col-12 col-md-6">
      <h3>{{ item.name }}</h3>
    <p> {{ item.status }} </p>
    
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      item: {
        name: "Zidane",
        status: "superhero",
        pic: "https://media.gq.com/photos/568be9cd630c329d44e92cbe/3:2/w_880/zidane-real-madrid.jpg"
      }
    }
  }
}
</script>

