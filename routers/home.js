// 引包
const homeRouter = require('koa-router')()
//创建路由规则
homeRouter.get(['/', '/index.html', '/index', '/home.html', '/home'], (ctx, next) => {
    ctx.render('home/home.html', {
        title: '首页'
    })
})
// 导出路由备用
module.exports = homeRouter
