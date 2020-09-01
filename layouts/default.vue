<template>
  <v-app dark>
    <AppHeader />
    <v-main class="P-30">
      <v-container fluid p-0>
        <nuxt />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  components: {},
}
</script>
