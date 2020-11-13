const Router = require('koa-router')

const axios = require('./utils/axios')

const router = new Router({
    prefix: '/search'
})

const list = {
    all: [
        {
            commentNumber: 21,
            coverImage: 'https://img.meituan.net/phoenix/5a77729cb4688ed0805c8e539e8419171281718.jpg',
            dpPoiId: '1614451288',
            favCount: 147,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '黎阳老街',
            maxGuestNumber: 2,
            poiId: '1614451288',
            price: 168,
            productId: '10809510',
            rentType: 0,
            starRating: 50,
            title: '回归家的本真'
        },
        {
            commentNumber: 35,
            coverImage: 'https://img.meituan.net/phoenix/628db680240d93c16cffedff0af1030c142337.jpg',
            dpPoiId: '1791040631',
            favCount: 177,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '元一大观',
            maxGuestNumber: 2,
            poiId: '1791040631',
            price: 128,
            productId: '10551192',
            rentType: 0,
            starRating: 50,
            title: '黄山元一大观度假公寓近屯溪老街，黎阳水街'
        },
        {
            commentNumber: 54,
            coverImage: 'https://img.meituan.net/iphoenix/30f849d8172ebd701eeca0bbc456e1f654047.jpg',
            dpPoiId: '131372277',
            favCount: 249,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '屯溪人民广场',
            maxGuestNumber: 2,
            poiId: '194341699',
            price: 358,
            productId: '7426317',
            rentType: 0,
            starRating: 48,
            title: '特色地中海风格距离屯溪老街，黎阳映像仅五分钟车程，交通便利，2.4米超大床 可做饭调料齐全#'
        }
    ],
    part: [
        {
            commentNumber: 85,
            coverImage: 'https://img.meituan.net/phoenix/bef00d4f55aba8d2a75c5675e6378d7b1253031.jpg',
            dpPoiId: '123996517',
            favCount: 864,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '下沙大学城/开发区',
            maxGuestNumber: 2,
            poiId: '186647667',
            price: 145,
            productId: '4423563',
            rentType: 0,
            starRating: 49,
            title: '宗书家/钱塘江 和达城/文泽路 地铁口'
        },
        {
            commentNumber: 9,
            coverImage: 'https://img.meituan.net/phoenix/f72b6586eccabfcb96664605b2ea703a3221769.jpg',
            dpPoiId: '1429051499',
            favCount: 196,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '下沙大学城/开发区',
            maxGuestNumber: 4,
            poiId: '1429051499',
            price: 158,
            productId: '11118654',
            rentType: 0,
            starRating: 48,
            title: '文泽路地铁口西米洋房'
        },
        {
            commentNumber: 101,
            coverImage: 'http://p1.meituan.net/phoenix/c008c3d56c5db9823d2651d7678eafc01153286.jpg',
            dpPoiId: '966177822',
            favCount: 1873,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '黄龙/高新文教区',
            maxGuestNumber: 2,
            poiId: '966177822',
            price: 135,
            productId: '2931532',
            rentType: 0,
            starRating: 49,
            title: '【可鱼】-小留订前咨询短租优惠 步行五分钟达城西银泰 五号线萍水街地铁口 近浙大/西溪/黄龙/运河/ 独卫 温馨 投影仪'
        }
    ],
    spa: [
        {
            commentNumber: 1,
            coverImage: 'https://img.meituan.net/phoenix/297ae9bae7d8b0e28c27e57117f53dce2718768.jpg',
            dpPoiId: '1149267549',
            favCount: 67,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '太仓万达',
            maxGuestNumber: 4,
            poiId: '1149267549',
            price: 199,
            productId: '10640416',
            rentType: 0,
            starRating: 50,
            title: '适合情侣/一家三口入住的太仓市区温馨小屋，近万达广场'
        },
        {
            commentNumber: 6,
            coverImage: 'https://img.meituan.net/phoenix/159364be101945f501c3807c9c9bf09a169285.jpg',
            dpPoiId: '1086325306',
            favCount: 178,
            hostAvatarUrl: null,
            layoutRoom: 3,
            locationArea: '平江路',
            maxGuestNumber: 7,
            poiId: '1086325306',
            price: 400,
            productId: '10514032',
            rentType: 0,
            starRating: 50,
            title: '苏州平江路独栋住宅，苏式传统民居，斜屋顶，粉墙黛瓦，步行可达拙政园，平江路，狮子林'
        },
        {
            commentNumber: 5,
            coverImage: 'http://p0.meituan.net/iphoenix/4e6d2453292f7c8384e92c91eba4952d4158168.jpg',
            dpPoiId: '1623136842',
            favCount: 91,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '富贵园路',
            maxGuestNumber: 2,
            poiId: '1623136842',
            price: 239,
            productId: '8720552',
            rentType: 1,
            starRating: 47,
            title: '【水墨别院】周庄古镇风景区/张厅检票口周庄欢乐世界1086慢生活街区/精选大床房/门口停车位'
        }
    ],
    movie: [
        {
            commentNumber: 86,
            coverImage: 'https://img.meituan.net/phoenix/c89bff223fcfd38ba24a7be3a7909f951167867.jpg',
            dpPoiId: '840211414',
            favCount: 954,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '宁国路工大美食一条街',
            maxGuestNumber: 2,
            poiId: '840211414',
            price: 158,
            productId: '10774085',
            rentType: 0,
            starRating: 50,
            title: '日式清新风'
        },
        {
            commentNumber: 72,
            coverImage: 'https://img.meituan.net/phoenix/7079418dc77025f782063f68dd91deee1705992.jpg',
            dpPoiId: '1088581077',
            favCount: 944,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '滨湖世纪城',
            maxGuestNumber: 2,
            poiId: '1088581077',
            price: 195,
            productId: '8640850',
            rentType: 0,
            starRating: 48,
            title: '合肥万达茂/融创茂/融创乐园/星星点灯浪漫情侣烛光晚餐'
        },
        {
            commentNumber: 139,
            coverImage: 'http://p0.meituan.net/enhancedimage/0ff19db340341ee1313d198886254587971753.jpg',
            dpPoiId: '528250992',
            favCount: 2409,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: ' 双岗财富广场/明发商业广场/四里河',
            maxGuestNumber: 2,
            poiId: '528250992',
            price: 189,
            productId: '11625305',
            rentType: 0,
            starRating: 50,
            title: '尧里/人间/地铁直达//步行街/火车站'
        }
    ],
    travel: [
        {
            commentNumber: 12,
            coverImage: 'https://img.meituan.net/phoenix/63c1a1e8dfa85b3ddf5812863ec453582043728.jpg',
            dpPoiId: '1280414424',
            favCount: 64,
            hostAvatarUrl: null,
            layoutRoom: 2,
            locationArea: '惠山风景区',
            maxGuestNumber: 4,
            poiId: '1280414424',
            price: 189,
            productId: '11657337',
            rentType: 0,
            starRating: 50,
            title: '【牛小蜗】享受漫生活的民宿，精装套房，可做饭'
        },
        {
            commentNumber: 55,
            coverImage: 'https://img.meituan.net/phoenix/66f0ef70c1c6b76d32ed55b8d0bcd6591120816.jpg',
            dpPoiId: '128264313',
            favCount: 353,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '无锡太湖风景区',
            maxGuestNumber: 3,
            poiId: '191080259',
            price: 188,
            productId: '5425012',
            rentType: 0,
            starRating: 48,
            title: '【有舍】-星光广场 北欧风大床房- 暑期大促月租优惠，近江南大学，近三国水浒城、影视城、融创乐园、水世界、海世界、雪世界'
        },
        {
            commentNumber: 43,
            coverImage: 'https://img.meituan.net/phoenix/c1c4e7389543f42bd2f9f6b689bb586684096.jpg',
            dpPoiId: '1533510700',
            favCount: 353,
            hostAvatarUrl: null,
            layoutRoom: 1,
            locationArea: '无锡太湖风景区',
            maxGuestNumber: 4,
            poiId: '1533510700',
            price: 128,
            productId: '9062747',
            rentType: 0,
            starRating: 49,
            title: '投资400亿融创文旅城景观房，睡在床上看到景点，干净、温馨、交通便捷/地铁、高架、湖底隧道、高速路口'
        }
    ]
}
router.get('/top', async (ctx) => {
    const result = await axios.get('https://www.meituan.com/ptapi/suggest', {
        params: {
            keyword: ctx.query.keyword
        }
    })
    ctx.body = {
        data: result.data.data
    }
})

router.get('/minsu', async (ctx) => {
    const { kind } = ctx.query

    ctx.body = {
        productList: list[kind]
    }
})


module.exports = router







