import Vue from 'vue'
import axios from 'axios'
import { Notify } from 'quasar'

Vue.prototype.$axios = axios

axios.defaults.baseURL = 'https://pro-api.coinmarketcap.com/v1'
axios.defaults.header = 'X-CMC_PRO_API_KEY: b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'

// var responseMessageCheck = ['Telerik', 'String', 'string', 'Parameter', 'SQL', 'Sql']
axios.interceptors.response.use((response) => {
  if (response.data.Result !== undefined && response.data.Result === false) {
    console.log(response.data)
    // if (!responseMessageCheck.map((val) => {
    //   return response.data.Message.includes(val)
    // }).includes(true)) {
    Notify.create({
      type: 'negative',
      position: 'bottom',
      timeout: 3000,
      message: response.data.Message || 'Bir hatayla karşılaşıldı. Lütfen daha sonra tekrar deneyiniz'
    })
    return Promise.reject(new Error(response.data.Message || 'Bir hatayla karşılaşıldı. Lütfen daha sonra tekrar deneyiniz'))
  } else {
    return response
  }
}, (error) => {
  return Promise.reject(error)
})
