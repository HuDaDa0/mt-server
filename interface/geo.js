const Router = require('koa-router')

const Menu = require('../dbs/models/menu')
const Province = require('../dbs/models/province')
const City = require('../dbs/models/City')

const axios = require('./utils/axios')
const allProvince = require('../interface/utils/province.json')

const router = new Router({
  prefix: '/geo'
})


router.get('/province', async (ctx) => {
  const province = await Province.find()
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        name: item.value[0]
      }
    }),
    data: province
  }
})


router.get('/province/:id', async (ctx) => {
  const city = await Province.findOne({ id: ctx.params.id })
  ctx.body = {
    code: 0,
    city: city.value.map(item => {
      return {
        province: item.province,
        id: item.id,
        name: item.name
      }
    })
  }
})

router.get('/city', async (ctx) => {
  let city = []
  let result = await City.find()
  result.forEach(item => {
    city = city.concat(item.value)
  })
  ctx.body = {
    code: 0,
    city: city.map(item => {
      return {
        province: item.province,
        id: item.id,
        name: item.name === '市辖区' || item.name === '省直辖县级行政区划'
          ? item.province
          : item.name
      }
    })
  }
})

router.get('/hotCity', async (ctx) => {
  let list = [
    '北京市',
    '上海市',
    '广州市',
    '深圳市',
    '天津市',
    '西安市',
    '杭州市',
    '南京市',
    '武汉市',
    '成都市'
  ]
  let result = await City.find()
  let nList = []
  result.forEach(item => {
    nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
  })
  ctx.body = {
    hots: nList
  }
})

router.get('/menu', async (ctx) => {
  const result = await Menu.findOne()
  ctx.body = {
    menu: result.menu
  }
})

// 美团-获取省份的接口
router.get('/m-province', async  (ctx) => {
  const result = await axios.get('https://www.meituan.com/ptapi/getprovincecityinfo/')
  ctx.body = {
    province: result.data
  }
})

// 美团-搜素城市的接口
router.get('/m-search/:city', async (ctx) => {
  const result = await axios.get(`https://apimobile.meituan.com/group/v1/area/search/${ctx.params.city}`)
  ctx.body = {
    city: result.data
  }
})

router.get('/s-province', (ctx) => {
  ctx.body = {
    data: allProvince
  }
})

router.get('/s-city', (ctx) => {
  const province = allProvince.province
  const cities = []
  province.forEach(item => {
    cities.push(...item.cityInfoList)
  })

  ctx.body = {
    city: cities
  }
})

module.exports = router
