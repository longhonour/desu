const userRouter = require('koa-router')()

userRouter.get('/campus', (ctx, next) => {
    ctx.render('campus/campus.html', {
        title: '人才招聘'
    })
})

module.exports = userRouter
