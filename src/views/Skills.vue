<template>
    <v-container>
         <v-layout>
            <v-flex xs12 sm12 md12>
                <v-card flat class="mb-3 green" height="60">
                     <v-card-title class="white--text subheading">
                         Skills
                     </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 sm12 md12>
                 <v-card height="530px" flat>
                        <div class="headline text-xs-center pa-5">
                        Active: {{ bottomNav }}
                        </div>
                        <div v-if="bottomNav === 'education'">
                            <h2>skills : {{ bottomNav }}</h2>
                             <div v-for="education in Education" :key="education.college">
                                 {{ education.college }}
                                 {{ education.percentage }}
                                 {{ education.passedout }}
                             </div>
                        </div>
                        <div v-if="bottomNav === 'skills'">
                             <div v-for="skill in skills" :key="skill.name">
                                          <div class="text-xs-center">
                                           <v-chip>
                                                <v-avatar class="teal">{{ skill.tag }}</v-avatar>
                                                {{ skill.language }}
                                            </v-chip>
                                      </div>
                             </div>
                        </div>
                        <div v-if="bottomNav === 'awards'">
                            <h2>skills : {{ bottomNav }}</h2>
                        </div>
                        <v-bottom-nav
                        :active.sync="bottomNav"
                        :value="true"
                        absolute
                        color="transparent"
                        >
                        <v-btn
                            color="teal"
                            flat
                            value="education"
                        >
                            <span>Education</span>
                            <v-icon>history</v-icon>
                        </v-btn>

                        <v-btn
                            color="teal"
                            flat
                            value="skills"
                        >
                            <span>Skills</span>
                            <v-icon>favorite</v-icon>
                        </v-btn>

                        <v-btn
                            color="teal"
                            flat
                            value="awards"
                        >
                            <span>Awards</span>
                            <v-icon>place</v-icon>
                        </v-btn>
                        </v-bottom-nav>
                    </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'education',
        skills: [
          { language: 'Nodejs', img: '', name: 'Node', tag: 'N' },
          { language: 'Javascript', img: '', name: 'javascript', tag: 'JS' },
          { language: 'Vuejs', img: '', name: 'vuejs', tag: 'V' },
          { language: 'Mongodb', img: '', name: 'Mongodb', tag: 'M' },
          { language: 'Firebase', img: '', name: 'firebase', tag: 'F' },
        ],
        Education: [
           { college: 'Sri venkateswara Govt polytecnic (Tirupati)', percentage: '79.80%', passedout: '2016' },
           { college: 'Sri venkateswara college of engineering(tirupati)', percentage: '65.23%', passedout: '2019' }
        ],
        Achevements: [

        ]
      }
    }
  }
</script>