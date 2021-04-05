import {
  v4
} from 'uuid'
import axios from 'axios'
import moment from 'moment'

export function fetchCrypto (context) {
  axios.defaults.header = 'Access-Control-Allow-Origin: *'
  return new Promise((resolve, reject) => {
    axios.get('/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '6292058c-a857-4299-a1a5-9cae3b15532b'
      }
    }
    ).then((data) => {
      const crypto = data.data.data

      context.commit('updateCrypto', {
        crypto
      })

      resolve(crypto)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function fetchCryptoDetail (context, id) {
  axios.defaults.header = 'Access-Control-Allow-Origin: *'
  return new Promise((resolve, reject) => {
    axios.get('/cryptocurrency/info?id=' + id, {
      headers: {
        'X-CMC_PRO_API_KEY': '6292058c-a857-4299-a1a5-9cae3b15532b'
      }
    }
    ).then((data) => {
      const coin = data.data.data[id]

      context.commit('updateCoin', {
        coin
      })

      resolve(coin)
      return coin
    }).catch((err) => {
      reject(err)
    })
  })
}
