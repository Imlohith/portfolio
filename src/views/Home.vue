<template>
    <v-container class="pt-0">
        <v-parallax height="640"
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">Hello, I'm Lohith kumar CJ</h1>
      <h4 class="subheading">Full stack web developer</h4>
      <v-btn flat dark>
         Explore here
      </v-btn>
    </v-layout>
  </v-parallax>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        image: '@/assets/cover.png',
        card_text: "A self taught software developer mainly writes code for web applications and mobile applications. I’ve always sought out opportunities and challenges that are meaningful to me.",
        one_more : "As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company."
      }
    }
  }
</script>
