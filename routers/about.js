const aboutRouter = require('koa-router')()

aboutRouter.get('/about', (ctx, next) => {
    ctx.render('about/about.html', {
        title: '关于德速'
    })
})

module.exports = aboutRouter
