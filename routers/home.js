// 引包
const homeRouter = require('koa-router')()
let exampleService = require('../service/exampleService.js')
//创建路由规则
homeRouter.get(['/', '/index.html', '/index', '/home.html', '/home'], async (ctx, next) => {
    // // 请求数据
    // let todoList = await exampleService.getTodoList({ name: 'ott' })
    // // 替换原来的静态数据
    // ctx.state.todoList = todoList.data
    ctx.state.todoList = [
        { name: 'test1111', time: '2019-08-17' },
        { name: 'test2222', time: '2019-08-17' },
        { name: 'test3333', time: '2019-08-17' }
    ]

    // 这里的ctx.render方法就是我们通过nunjucksMiddleware中间件添加的
    ctx.render('home/home', {
        title: '首页'
    })
})
// 导出路由备用
module.exports = homeRouter
