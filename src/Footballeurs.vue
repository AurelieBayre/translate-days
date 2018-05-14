<template>
    <div id="football">
        <ul>
            <li v-for="footballeur in items" :key="footballeur.index">
                <h2>{{ footballeur.name }}</h2>
                <h3>{{ footballeur.status }}</h3>
                <img v-bind:src=footballeur.pic v-bind:alt=footballeur.name>
            </li>
        </ul>

    </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data(){
        return{
        }
    },
  }
</script>
