<template>
<!--<v-parallax height="969" src="https://i.imgur.com/M0BwxSq.png">  -->
<v-container class="main">
<v-layout row class="form"> 
    <v-flex xs12 sm6 offset-sm3>
      

         <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 19 : 1" :color="hover ? 'green' : 'pink'" >
            <v-card-text>
                <v-container>  
                    
                    <v-layout row>
                        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Place Order</v-flex>
                    </v-layout>


                    <v-form @submit.prevent="sum">
                        
                        <!-- <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="person"
                                    name="price"
                                    label="price"
                                    id="price"
                                    v-model="price"
                                    
                                    >
                                </v-text-field>
                            </v-flex>
                        </v-layout> -->

                        <v-layout row>
                            <v-flex xs12 offset-sm3 class="text-center">
                                price(01): $42
                            </v-flex>
                        </v-layout>

                        
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select
                                    :items="items"
                                    label="Item"
                                    solo
                                    v-model="item"
                                    ></v-select>
                                </v-col>
                            </v-flex>
                        </v-layout>

                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="mdi-person"
                                    name="buyer"
                                    label="name"
                                    id="buyer"
                                    v-model="buyer"
                                    type="text"
                                    required
                                    >
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        
                        
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select
                                    :items="numbers"
                                    label="number of items"
                                    solo
                                    v-model="number"
                                    ></v-select>
                                </v-col>
                            </v-flex>
                        </v-layout>

                        <v-col cols="12">
                         <v-textarea
                          v-model="address"
                          color="teal"
                         >
                       <template v-slot:label>
                         <div>
                          Address <small>(delivery)</small>
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>

                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select
                                    :items="items1"
                                    label="City"
                                    solo
                                    v-model="city"
                                    ></v-select>
                                </v-col>
                            </v-flex>
                        </v-layout>

                        <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <v-btn color="yellow" type="submit">
                                    Get amount</v-btn>

                            </v-flex>
                        </v-layout>


                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="mdi-person"
                                    name="fullamount"
                                    label="Total"
                                    id="fullamount"
                                    v-model="fullamount"
                                    type="text"
                                    >
                                </v-text-field>
                            </v-flex>
                        </v-layout>

                           <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <v-btn color="yellow" @click="create">
                                    Place Order</v-btn>

                            </v-flex>
                        </v-layout>

                        
                        
                         



                    </v-form>



                </v-container>

            </v-card-text>

        </v-card>
         </v-hover>

    </v-flex>

</v-layout>
</v-container>
<!--</v-parallax>  -->
</template>

<script>

export default {
    name: 'SignIn',

    data: () => ({

        numbers: ['1', '2', '3', '4', '5', '6', '7'],
        items: ['item_1', 'item_2', 'item_3', 'item_4', 'item_5', 'item_6', 'item_7'],
        items1: ['y', 'u', 'i', 'o'],

        sign: {},

        item: '',
        number: '',
        city:'',
        fullamount:'',
        price: '42',
        buyer: '',
        address: ''
    }),

        
    methods : {

//        signin() {
        //    this.$store.dispatch('signin', {email: this.email, password: this.password})

            create() {
                console.log(this.number);
                console.log(this.city);
                console.log(this.fullamount);

                this.$store.dispatch('createneworder', {item:this.item, buyer:this.buyer, quantity:this.number, price:this.price, amount:this.fullamount, address:this.address, city:this.city})
            },

            sum() {
              this.fullamount = (this.number * 42);
              
            }





    }
    

}
</script>

<style scoped>
.form {
    position: relative;
    top: 169px
}

.main {
    min-height: 1200px
}

</style>
