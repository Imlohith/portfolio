<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm12 md12>
                <v-card flat class="mb-3 green" height="60">
                     <v-card-title class="white--text subheading">
                         Projects
                     </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-space-around>
            <v-flex xs12 sm6 md3 v-for="data in data" :key="data.title">
             <v-card>
                    <v-container
                        fluid
                        grid-list-lg
                    >
                        <v-layout row wrap>
                        <v-flex xs12>
                            <v-card color="blue-grey darken-2" class="white--text" height="230">
                            <v-card-title primary-title>
                                <div>
                                <div class="headline">{{ data.title }}</div>
                                <span>{{ data.description }}</span>
                                </div>
                            </v-card-title>
                            <v-card-actions fixed>
                                <v-btn dark>Github</v-btn>
                            </v-card-actions>
                            </v-card>
                        </v-flex>
                        </v-layout>
                    </v-container>
           </v-card>
         </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
           data: [
               { title: 'VUE-SHOP', description: 'awesome project anyways haha', },
               { title: 'MOLICULAR ENERGY', description: 'awesome project anyways haha', },
               { title: 'FACEBOOK APIS', description: 'awesome project anyways haha', },
           ]
        }
    }
}
</script>
