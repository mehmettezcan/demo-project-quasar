<template>
  <div class="column q-ma-md">
    <q-card
      class="text-white"
      style="width: 275px; background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="coin-name q-pb-md">
          {{ crypto.name }} ({{ crypto.symbol }})
        </div>
        <div class="row">
          <div class="text-bold">
            Total supply:
          </div>
          <div >
            {{ crypto.total_supply }}
          </div>
        </div>
        <div class="row">
          <div class="text-bold">
            CMC Rank:
          </div>
          <div >
            {{ crypto.cmc_rank }}
          </div>
        </div>
        <div class="row">
          <div class="text-bold">
            Current Price:
          </div>
          <div >
            {{ crypto.quote.USD.price }} $
          </div>
        </div>
        <div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat no-caps @click="handleCoinDetail">Detail</q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['crypto'],
  methods: {
    ...mapActions({
      fetchCryptoDetail: 'crypto/fetchCryptoDetail'
    }),
    async handleCoinDetail(){
      await this.fetchCryptoDetail(this.crypto.id).then((e) => {
        this.$router.push('/detail')
      })
    }
  }

}
</script>
<style scoped>
.coin-name{
  font-size: 20px;
}
</style>
