/** @format */

const Koa = require('koa')
const cors = require('./cors') //跨域处理
const router = require('./router')
const app = new Koa()

const PORT = 3000

app.use(cors)

app.use(async (ctx, next) => {
	console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
	await next()
})

app.use(router.routes())

console.log(`Http Server is running at http://localhost:3000`)
app.listen(PORT)
