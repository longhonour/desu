const userRouter = require('koa-router')()

userRouter.get('/contact', (ctx, next) => {
    ctx.render('contact/contact.html', {
        title: '联系我们'
    })
})

module.exports = userRouter
