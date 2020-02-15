<template>
  <v-app>
   

        <v-content transition="slide-x-transition">
             
      <router-view></router-view>
            <home-foot></home-foot>
            
    </v-content>
  </v-app>
</template>

<script>
import HomeFoot from './components/HomeFoot';
export default {
  name: 'App',

  components: {
    HomeFoot
  },

  data: () => ({
    //
  }),
};
</script>
