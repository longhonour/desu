// 引入koa
const Koa = require('koa')
const Routers = require('../routers/index.js')
const nunjucksMiddleware = require('../middlewares/nunjucksMiddleware.js')
const path = require('path')
let logger = require('../util/logger.js')

// //不同类型的 log
// logger.debug('debug-->', 'debug log');
// logger.info('info-->', 'info log');
// logger.warn('warn-->', 'warn log');
// logger.error('error-->', 'error log');
// logger.fatal('fatal-->', 'fatal log');

// 实例化koa对象
let app = new Koa()

// 静态资源
app.use(require('koa-static')(path.resolve('dist')))

// 初始化中间件
app.use(nunjucksMiddleware({
    path: path.resolve(__dirname, '../views')
}))

// 挂载路由
app.use((new Routers(app)).allowedMethods())

// 监听8096端口
app.listen(8096, () => {
    console.log('服务器启动 http://127.0.0.1:8096')
    // 服务启动后的logger
    logger.info('server start');
})