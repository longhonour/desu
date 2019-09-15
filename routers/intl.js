const userRouter = require('koa-router')()

userRouter.get('/intl-business', (ctx, next) => {
    ctx.render('intl/intl.html', {
        title: '国际物流物流业务'
    })
})

module.exports = userRouter
