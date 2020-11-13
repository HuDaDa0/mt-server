const axios = require('axios')


const instance = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3001}`,
  timeout: 2000
})

instance.defaults.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36'
instance.defaults.headers['Referer'] = 'https://sh.meituan.com/'

module.exports = instance
