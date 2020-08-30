<template>
  <header>
    <!-- Top bar -->
    <v-row class="H-30 F-14 font-weight-regular" no-gutters>
      <v-col
        class="transform-right primary d-flex flex-column justify-center txt_pr_2--text px-3 py-0"
      >
        <div
          class="invert-transform-right d-flex flex-row justify-center"
        >
          <span
            class="d-flex flex-column justify-center text-capitalize F-14 font-weight-regular ml-1"
          >
            Call Us: (800) 060-0730
          </span>
          <v-btn
            text
            class="primary txt_pr_2--text txt_nd_2_hover text-capitalize F-14 font-weight-regular H-30 px-1"
          >
            <span>About Us</span>
          </v-btn>

          <v-btn
            text
            class="primary txt_pr_2--text txt_nd_2_hover text-capitalize F-14 font-weight-regular H-30 px-1"
          >
            <span>Contacts</span>
          </v-btn>

          <v-btn
            text
            class="primary txt_pr_2--text txt_nd_2_hover text-capitalize F-14 font-weight-regular H-30 px-1"
          >
            <span>Track Order</span>
          </v-btn>
        </div>
      </v-col>
      <v-col
        class="px-0 py-0 F-11 text-uppercase txt_nl_2--text W-310 font-weight-medium d-flex flex-column justify-center text-center"
      >
        AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES
      </v-col>
      <v-col
        class="transform-left secondary txt_nd_2--text d-flex flex-column justify-center px-3 py-0"
      >
        <div
          class="invert-transform-left d-flex flex-row justify-center"
        >
          <span
            class="d-flex flex-column justify-center text-capitalize F-14 font-weight-regular"
          >
            Compare:
          </span>
          <span
            class="txt_nd_1--text d-flex flex-column justify-center text-capitalize F-14 font-weight-regular px-1"
          >
            5
          </span>
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
        </div>
      </v-col>
    </v-row>
    <!-- Menu & Logo -->
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
  },
  methods: {
    switchCurrency(CurrencyCode) {
      this.currentCurrency = CurrencyCode
      console.log(CurrencyCode)
    },
  },
}
</script>
<style lang="scss" scoped>
.v-btn.txt_nd_2_hover:hover {
  color: white !important;
}
</style>
