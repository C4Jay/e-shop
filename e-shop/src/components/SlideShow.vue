<template>
    <v-container>
        <v-layout row>
       <v-carousel>
    <v-carousel-item
    height = "900"

      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.ctfassets.net/od02wyo8cgm5/7mTdUD5q46Jx0chugL43eG/e1542db77edfaa6bc229c3b1e2e1dc7b/cloud_2-fw19-navy_white-m-g1.png',
          },
          {
            src: 'https://cdn.bike24.net/i/p/2/0/242702_00_d.jpg',
          },
          {
            src: 'https://images.ctfassets.net/od02wyo8cgm5/49u9fM3Wn6HyeIX6DLL5qy/e34d195152cd859a90477d7e32de45fb/cloud_2-fw19-all_black-m-g4.png',
          },
          {
            src: 'https://cache.mrporter.com/variants/images/5179529850017624/in/w2000_q80.jpg',
          },
        ],
      }
    },
  }
</script>