const contactRouter = require('koa-router')()

contactRouter.get('/contact', (ctx, next) => {
    ctx.render('contact/contact.html', {
        title: '联系我们'
    })
})

module.exports = contactRouter
