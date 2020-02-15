<template>
  <v-carousel
  cycle
  interval="3000"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
    /*       {
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
          }, */

           /* {
            src: 'https://i.pinimg.com/originals/88/d6/62/88d662b97f5ff53861ec0227f66fef2a.jpg' },
          {
            src: 'https://images-na.ssl-images-amazon.com/images/I/71PvMf9jIcL._SL1500_.jpg',
          }, */


           
          /* {
            src: 'https://i.pinimg.com/originals/2c/a6/2b/2ca62bf8d403df6eccbcd1b0e7e7981d.jpg'},
           */
          /* { 
            src: 'https://images-na.ssl-images-amazon.com/images/I/61INsTBOzGL._SL1500_.jpg' },
          /* {
            src: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/sf2a0383f460ce6f5/image/i3a172320a75536fc/version/1562094656/image.jpg'
          }, */
          /* {
            src: 'https://i.imgur.com/dGHYnw3.jpg' },
          {
            src: 'https://images.abeautifulmess.com/uploads/2017/06/DIY-Colorful-Geometric-Necklaces-click-through-for-tutorial-_-4.jpg'
          } */ 
          {
            src: 'https://i.imgur.com/d9vbRlj.jpg'
          },
          {
            src: 'https://i.imgur.com/NMKF3oT.jpg'
          },
          {
            src: 'https://i.imgur.com/wVMYJjG.jpg'
          }          
        ],
      }
    },
  }



</script>

<!--
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
</script> -->