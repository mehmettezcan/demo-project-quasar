<template>
  <q-page class="row justify-between" style="height: calc(100vh - 50px)">
      <div class="column justify-center col-8 q-pa-md">
        <div class="row text-h6">
          <div class="col-3">
            <q-img
              class="q-pa-lg"
              :src="coin.coin.logo"
              spinner-color="white"
              style="height: 20px; max-width: 20px"
            />
          </div>
          <div class="col-9 column justify-center">
            {{ coin.coin.name }} ({{ coin.coin.symbol }})
            </div>
        </div>
        <div class="q-pt-lg">
          {{ coin.coin.description }}
        </div>
      </div>
      <div class="column justify-center full-height col-4 text-h6">
        <div class="row">
          <div class="text-bold">
            Website:
          </div>
          <q-btn no-caps flat @click="openWebsite">
            {{ coin.coin.urls.website[0] }}
          </q-btn>
        </div>
        <div class="row">
          <div class="text-bold">
            Twitter:
          </div>
          <q-btn no-caps flat @click="openTwitter">
            {{ coin.coin.twitter_username }}
          </q-btn>
        </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters } from 'vuex'
export default {
  name: 'Details',
  computed: {
    ...mapGetters({
      coin: 'crypto/coin'
    })
  },
  methods: {
    openTwitter(){
      openURL(this.coin.coin.urls.twitter[0])
    },
    openWebsite(){
      openURL(this.coin.coin.urls.website[0])
    }
  }
}
</script>
