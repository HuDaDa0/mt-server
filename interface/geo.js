const Router = require('koa-router')
const geoip = require('geoip-lite');

const Menu = require('../dbs/models/menu')
const Province = require('../dbs/models/province')
const City = require('../dbs/models/City')

const axios = require('./utils/axios')
const allProvince = require('../interface/utils/province.json')

const router = new Router({
  prefix: '/geo'
})


router.get('/getPosition', async (ctx) => {
  // const { ip } = ctx.request
  // const geo = geoip.lookup(ip);
  // ctx.body = {
  //   data: geo
  // }
  const position = await axios.get(`https://pv.sohu.com/cityjson?ie=utf-8`);
  if (position) {
  // 2.把里面的数据进行过滤，例如得到广东省广州市
    const proCity = JSON.parse(position.data.split("=")[1].split(";")[0]).cname
    const reg = /.+?(省|市|自治区|自治州|县|区)/g
    // 3.利用正则表达式匹配定位信息，得到一个返回身份和城市的数组
    const [province, city] = proCity.match(reg)
    ctx.body = { 
      province, 
      city 
    }
  } else {
    ctx.body = {
      province: "",
      city: ""
    }
  }
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
