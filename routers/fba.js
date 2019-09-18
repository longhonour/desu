const fbaRouter = require('koa-router')()

fbaRouter.get('/fba-business', (ctx, next) => {
    ctx.render('fba/fba.html', {
        title: 'FBA物流业务'
    })
})

module.exports = fbaRouter
