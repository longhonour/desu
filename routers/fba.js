const userRouter = require('koa-router')()

userRouter.get('/fba-business', (ctx, next) => {
    ctx.render('fba/fba.html', {
        title: 'FBA物流业务'
    })
})

module.exports = userRouter
