<template>
  <v-layout>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</nuxt-link
    >
  </v-layout>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(
        (i) => i.code !== this.$i18n.locale,
      )
    },
  },
}
</script>
