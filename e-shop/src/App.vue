<template>
  <v-app>

    
  <app-navigation></app-navigation> 
   
      
        <v-content transition="slide-x-transition">
            <router-view></router-view>
            
        </v-content>
        <home-foot></home-foot>
  </v-app>
</template>

<script>
import HomeFoot from './components/HomeFoot';
import AppNavigation from './components/AppNavigation';
//import HomeFoot1 from './components/HomeFoot1';

export default {
  name: 'App',

  components: {
    HomeFoot,
    AppNavigation
  //  HomeFoot1

  },

  data: () => ({
    //
  }),
};
</script>
