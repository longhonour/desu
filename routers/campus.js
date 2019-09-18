const campusRouter = require('koa-router')()

campusRouter.get('/campus', (ctx, next) => {
    ctx.render('campus/campus.html', {
        title: '人才招聘'
    })
})

module.exports = campusRouter
