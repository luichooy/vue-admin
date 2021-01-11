/** @format */

const Router = require('koa-router')

const address = require('../db/address')
const barData = require('../db/charts/bar')
const lineData = require('../db/charts/line')
const pieData = require('../db/charts/pie')
const tableData = require('../db/tables/tables')
const formData = require('../db/form/form')

const router = new Router({
	prefix: '/api',
})

router.get('/addressData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: address,
	}
})

router.get('/getBarData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: barData,
	}
})

router.get('/getLineData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: lineData,
	}
})

router.get('/getPieData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: pieData,
	}
})

router.get('/getTableData', async (ctx, next) => {
	let query = ctx.query
	let per_page = query.per_page
	let cur_page = query.cur_page

	let min = per_page * cur_page - per_page
	let max = per_page * cur_page

	let arr = tableData.slice(min, max)

	ctx.body = {
		errno: 0,
		data: {
			table: arr,
			total: tableData.length,
		},
	}
})

router.get('/getFormData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: formData,
	}
})

module.exports = router
