<template>
  <header class="Z-10">
    <!-- Top bar -->
    <v-row class="H-30 F-14 font-weight-regular" no-gutters>
      <v-col
        class="d-flex flex-row justify-center primary txt_pr_2--text px-0 py-0"
      >
        <span
          class="d-flex flex-column justify-center text-capitalize F-14 font-weight-regular ml-1"
        >
          Call Us: (800) 060-0730
        </span>
        <v-btn
          v-for="(Item, i) in TopNavbar"
          :key="i"
          :to="Item.link"
          text
          class="primary txt_pr_2--text txt_nd_2_hover text-capitalize F-14 font-weight-regular H-30 px-1"
        >
          <span>{{ Item.name }}</span>
        </v-btn>
      </v-col>
      <v-col
        class="W-310 transform-top-right-after after_white d-flex flex-column justify-center px-0 py-0"
      >
        <span
          class="Z-10 px-0 py-0 F-11 text-uppercase txt_nl_2--text font-weight-medium text-center"
          >AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES</span
        >
      </v-col>
      <v-col
        class="d-flex flex-row justify-center transform-top-left before_secondary txt_nd_2--text px-0 py-0"
      >
        <v-btn
          text
          class="secondary txt_nd_2--text txt_nd_2_hover text-capitalize F-14 font-weight-regular H-30 px-1"
        >
          Compare:
          <span
            class="txt_nd_1--text d-flex flex-column justify-center text-capitalize F-14 font-weight-regular px-1"
          >
            5
          </span>
        </v-btn>
        <v-menu
          bottom
          origin="center top"
          offset-y
          close-on-content-click
          close-on-click
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              class="secondary txt_nd_2--text txt_nd_2_hover text-capitalize F-14 font-weight-regular H-30 px-1"
              v-bind="attrs"
              v-on="on"
            >
              Currency:
              <span
                class="txt_nd_1--text txt_nd_2_hover text-uppercase"
              >
                {{ currentCurrency }}
              </span>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="Currency in availableCurrencies"
              :key="Currency.code"
              @click="switchCurrency(Currency.code)"
            >
              <v-list-item-title>
                <v-icon>{{ Currency.icon }}</v-icon>
                {{ Currency.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <span class="d-flex flex-column justify-center"> </span>
        <v-menu
          bottom
          origin="center top"
          offset-y
          close-on-content-click
          close-on-click
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="secondary txt_nd_2--text txt_nd_2_hover text-capitalize F-14 font-weight-regular H-30 px-1"
              text
              v-bind="attrs"
              v-on="on"
            >
              Language:
              <span
                class="txt_nd_1--text txt_nd_2_hover text-uppercase"
              >
                {{ $i18n.locale }}
              </span>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              <v-list-item-title>
                {{ locale.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <!-- Menu & Logo -->
    <v-row class="white H-80" no-gutters> <v-col> </v-col> </v-row>
    <!-- search bar -->
    <v-row class="H-44 P-24 py-0">
      <v-col></v-col>
      <v-col
        class="Z-10 white W-80 transform-top-left-root pr-4 pl-1 py-1 search-bar-border-left"
      >
        <v-btn icon tile class="Z-10 W-72 white">
          <v-icon right class="ml-3 invert-transform-top-left-root"
            >mdi-car-outline</v-icon
          >
        </v-btn>
      </v-col>
      <v-col class="white W-350 px-0 py-0">
        <div class="search-bar-border-top"></div>
        <form class="pa-0 pt-1 header_search_form">
          <v-text-field
            required
            placeholder="Enter Keyword or Part Number"
            hide-details="auto"
            class="pa-0 ma-0 centered-input Z-0"
            filled
            dense
            single-line
          >
          </v-text-field>
        </form>
      </v-col>
      <v-col
        class="white transform-top-right-root W-80 px-1 py-1 search-bar-border-right"
      >
        <v-btn icon tile class="Z-10 W-72">
          <v-icon left class="invert-transform-top-right-root"
            >mdi-account-search</v-icon
          >
        </v-btn>
      </v-col>
      <v-col></v-col>
    </v-row>
  </header>
</template>

<script>
export default {
  data: () => ({
    currentCurrency: 'EURO',
    Currencies: [
      {
        code: 'EURO',
        name: 'Euro',
        icon: 'mdi-currency-eur',
        symbol: '€',
      },
      {
        code: 'USD',
        name: 'US Dollar',
        icon: 'mdi-currency-usd',
        symbol: '$',
      },
      {
        code: 'DZD',
        name: 'Algerian Dinar',
        icon: 'DZD',
        symbol: 'DZD',
      },
    ],
    TopNavbarItems: [
      {
        name: 'About us',
        link: 'about',
      },
      {
        name: 'Contacts',
        link: 'contacts',
      },
      {
        name: 'Track Order',
        link: 'track-order',
      },
    ],
  }),
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(
        (i) => i.code !== this.$i18n.locale,
      )
    },
    availableCurrencies() {
      return this.Currencies.filter(
        (i) => i.code !== this.currentCurrency,
      )
    },
    TopNavbar() {
      return this.TopNavbarItems
    },
  },
  methods: {
    switchCurrency(CurrencyCode) {
      this.currentCurrency = CurrencyCode
      console.log(CurrencyCode)
    },
  },
}
</script>
<style lang="scss">
.v-btn.txt_nd_2_hover:hover {
  color: white !important;
}

.v-text-field > .v-input__control,
.v-text-field > .v-input__control > .v-input__slot,
.v-text-field--filled.v-input--dense.v-text-field--single-line
  > .v-input__control
  > .v-input__slot {
  height: 36px !important;
  min-height: 36px;
}

.v-text-field > .v-input__control > .v-input__slot::before {
  border-color: inherit !important;
  border-style: none !important;
  border-width: thin 0 0 0 !important;
}

.v-text-field
  > .v-input__control
  > .v-input__slot
  > .v-text-field__slot
  input {
  text-align: center !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
  z-index: 0;
}
.search-bar-border-left::after,
.search-bar-border-right::before {
  border-right: 3px solid #ebebeb !important;
  content: ' ';
  min-height: 40px !important;
  margin-left: 2px;
  font-size: 21px;
}
.search-bar-border-right::before {
  margin-left: 0;
  margin-right: 2px;
}

.search-bar-border-top {
  max-height: 2px !important;
  min-height: 2px !important;
  border-bottom: 2px solid #ebebeb !important;
  content: ' ';
}
</style>
