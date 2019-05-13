<template>
  <v-app>
    <Toolbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Data from './components/Data'

export default {
  name: 'App',
  components: {
    Data,
    Toolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
