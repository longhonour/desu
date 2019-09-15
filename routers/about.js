const userRouter = require('koa-router')()

userRouter.get('/about', (ctx, next) => {
    ctx.render('about/about.html', {
        title: '关于德速'
    })
})

module.exports = userRouter
