module.exports = {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get post() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1497154694@qq.com'
    },
    get pass() {
      // 授权码
      return ''
    }
  },
  get code () {
    return () => {
      return Math.random().toString(16).slice(2, 6).toUpperCase()
    }
  },
  get expire() {
    return () => {
      return new Date().getTime() + 60 * 1000
    }
  }
}




