<template>
  <v-layout column justify-center align-center>
    <section>
      <v-img
        src="https://red-parts.html.themeforest.scompiler.ru/themes/blue-ltr/images/finder-1903x500.jpg"
        lazy-src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        height="500"
        class="grey"
        gradient="to top right, rgba(38,38,38,.5), rgba(38,38,38,.5)"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </section>
  </v-layout>
</template>

<script>
export default {}
</script>
