<template>
         <v-navigation-drawer width="240" app absolute right class="primary">
            <v-toolbar>
            <v-toolbar-title>
                <span> G Lohith kumar</span>
                <span class="font-weight-light">  CJ</span>
            </v-toolbar-title>
            </v-toolbar>
            <v-divider></v-divider>

            <v-list dense>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-tile-action>
                    <v-icon class="white--text">{{ link.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
            </v-list>

        </v-navigation-drawer>
         
</template>

<script>
export default {
    data () {
      return {
        links: [
        { icon: 'dashboard', text: 'home', route: '/' },
        { icon: 'folder', text: 'Projects', route: '/projects' },
        { icon: 'person', text: 'skills', route: '/skills' },
        { icon: 'person', text: 'education', route: '/education' },
        { icon: 'person', text: 'contact', route: '/contact' },
       ],
        right: null
      }
    } 
}
</script>
