<template>
  <header>
    <v-row align-content="center">
      <v-col class="primary txt_pr_2--text text-caption px-0 py-0">
        About Us Contacts Track Order
      </v-col>
      <v-col
        cols="3"
        class="px-0 py-0 text-uppercase text-caption txt_nl_2--text"
      >
        AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES
      </v-col>
      <v-col class="txt_nd_2--text text-caption px-0 py-0">
        <div class="header-topbar-end-bg">
          Compare: 5 Currency: USD Language:
        </div>
      </v-col>
    </v-row>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-topbar-end-bg {
  background: #333;
  &::before {
    border-bottom-left-radius: 2.5px !important;
    transform: skewX(30deg) !important;
    transform-origin: top left !important;
  }
}
</style>
