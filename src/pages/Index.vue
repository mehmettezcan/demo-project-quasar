<template>
  <q-page class="flex flex-center">
    <div class="text-h4 text-bold full-width q-ma-md q-pl-xl">
      List Top 100 Coin
    </div>
    <div v-for="(e,index) in cryptoList" :key="index">
      <crypto-card :crypto="e"/>
    </div>
  </q-page>
</template>

<script>
import CryptoCard from 'src/components/CryptoCard.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  components: {
    CryptoCard
  },
  mounted(){
    this.fetchCrypto()
  },
  computed: {
    ...mapGetters({
      cryptoList: 'crypto/crypto'
    }),
  },
  methods: {
    ...mapActions({
      fetchCrypto: 'crypto/fetchCrypto'
    }),

  }
}
</script>
