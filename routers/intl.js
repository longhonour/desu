const intlRouter = require('koa-router')()

intlRouter.get('/intl-business', (ctx, next) => {
    ctx.render('intl/intl.html', {
        title: '国际物流物流业务'
    })
})

module.exports = intlRouter
