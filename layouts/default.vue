<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Header />
        <nuxt />
        <Footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/global/Header.vue'
import Footer from '~/components/global/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
