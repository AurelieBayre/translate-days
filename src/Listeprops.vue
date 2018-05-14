<template>
  <div class="container">
    <ma-liste v-bind:items="items"></ma-liste>
    <ul>
      <li v-for="item in items" :key="item.index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import Footballeurs from './Footballeurs.vue';

  export default {
    components: {
      'ma-liste' : Footballeurs
    },
      data(){
        return{
          items : [
            {
            index: 0,
            name: "Ronaldo",
            status: "forever young",
            pic: "http://i.f1g.fr/media/figaro/805x453_crop/2017/12/06/XVM0e0f62dc-dab7-11e7-a0b6-84cab3c288b7.jpg"
            },
            {
              index: 1,
              name: "Benzema",
              status: "I don't know",
              pic: "https://i0.wp.com/observalgerie.com/wp-content/uploads/2018/05/2170922-45375850-2560-1440.jpg?fit=1050%2C590&ssl=1"
            },
              {
              index: 2,
              name: "Pires",
              status: "humble hero",
              pic: "http://d3nfwcxd527z59.cloudfront.net/content/uploads/2017/09/11083749/Robert-Pires-Arsenal.jpg"
            }
          ]

        }
      }
    }
</script>

