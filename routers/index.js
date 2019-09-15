// 路由集中点
const routers = [
    require('./home.js'),
    require('./fba.js'),
    require('./intl.js'),
    require('./about.js'),
    require('./campus.js'),
    require('./contact.js')
]
// 简单封装 
module.exports = function (app) {
    routers.forEach(router => {
        app.use(router.routes())
    })
    return routers[0]
}
