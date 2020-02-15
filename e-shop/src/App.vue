<template>
  <v-app>
   

        <v-content transition="slide-x-transition">
             
      <router-view></router-view>
            
        <!--    <home-foot1></home-foot1>
            -->
    </v-content>
    <home-foot></home-foot>
  </v-app>
</template>

<script>
import HomeFoot from './components/HomeFoot';
//import HomeFoot1 from './components/HomeFoot1';

export default {
  name: 'App',

  components: {
    HomeFoot,
  //  HomeFoot1
  },

  data: () => ({
    //
  }),
};
</script>
