<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 class="text-center display-3 font-weight-thin mb-3">
                Items
            </v-flex>
        </v-layout>

        <v-container v-if="items[0]">
            <v-flex xs12>
            <v-card color="green">
           <v-layout v-for="item in items" :key="item.id" class="mb-2">
            <v-flex xs12>

                <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? 10 : 1" :color="hover ? '#f0e859' : white">
                    <v-container fluid>
                    <v-layout row>
                        <v-flex xs12 sm5 class="ml-1">
                            <v-img height="298" :src="item.img">
                            </v-img>

                        </v-flex>
                        <v-spacer>
                        </v-spacer>
                        <v-flex xs10 sm7 md6>
                            <v-card-title primary-title>
                                <v-flex xs12>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                <h3> {{item.item}} </h3>
                                    </v-flex>
                                </v-layout> 
                               <v-layout row>
                                    <v-flex xs12 class="purple--text">
                              <h3> Rs {{item.price}}  
                              </h3>
                                    </v-flex>
                               </v-layout>
                                </v-flex>
                                 
                               
                            </v-card-title>
                            <v-card-text class="text">
                                
                                <v-flex xs12>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                <h3> {{item.description}} </h3>
                                    </v-flex>
                                </v-layout> 
                               <v-layout row>
                                    <v-flex xs12 class="blue-grey--text">
                              <h3> {{item.quantity}} left  
                              </h3>
                                    </v-flex>
                               </v-layout>
                                </v-flex>
                                   </v-card-text>

                            <v-card-actions class="btn">
                                <v-btn :to="'/itemview/' + item.id">  
                                View 
                                </v-btn>

                            </v-card-actions>

                        </v-flex>
                    </v-layout>
                    
                    </v-container>

                </v-card>
                </v-hover>
            </v-flex>

        </v-layout>
            </v-card>
            </v-flex>
        </v-container>
    </v-container>
</template>


<script>
export default {
    computed : {
        items () {
            return this.$store.getters.stocks
        }
    }
}
</script>
