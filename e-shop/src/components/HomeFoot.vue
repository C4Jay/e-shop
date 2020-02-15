<template>
  <!-- Footer -->
 <div class="text-center">
  <div class="foot">
  <mdb-footer class="font-small pt-0">
    <mdb-container>
        <v-row align="center">
      <mdb-row>
        <mdb-col md="12">
          <div class="mb-5 flex-center">
            <a href="https://www.facebook.com"><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a href="https://www.twitter.com"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a href="https://aboutme.google.com/u/0/?referer=gplus"><i class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a href="https://www.linkedin.com/home/?originalSubdomain=lk"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a href="https://www.instagram.com"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a href="https://www.pinterest.com"><i class="fab fa-pinterest fa-lg white-text fa-2x"> </i></a>
          </div>
        </mdb-col>
      </mdb-row>
        </v-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
        <v-layout row>
            <v-flex xs12 class="text-center">
                <v-img height="150" width="150" src="https://i.imgur.com/QRujpM1.png"></v-img>
            </v-flex>
        </v-layout>
        <v-row align="center">
            <v-flex class="text-center">
      <mdb-container fluid>
    
        &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> tref.com </a>
          
      </mdb-container>
            </v-flex>
        </v-row>
    </div>
  </mdb-footer>
  <!-- Footer -->
  </div>
  </div>
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'HomeFoot',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>

<style>
/*@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');*/
.foot {
    background: linear-gradient(to bottom , #21211f,#32332f);

    color: azure;
}
</style>







