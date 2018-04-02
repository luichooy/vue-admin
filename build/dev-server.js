'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()

const address = require('../src/data/address');
const barData = require('../src/data/charts/bar');
const lineData = require('../src/data/charts/line');
const pieData = require('../src/data/charts/pie');
const tableData = require('../src/data/tables/tables');
const formData = require('../src/data/form/form');

var apiRoutes = express.Router();

apiRoutes.get('/addressData', function (req, res) {
  res.json({
    errno: 0,
    data: address
  });
});

apiRoutes.get('/getBarData', function (req, res) {
  res.json({
    errno: 0,
    data: barData
  });
});

apiRoutes.get('/getLineData', function (req, res) {
  res.json({
    errno: 0,
    data: lineData
  });
});

apiRoutes.get('/getPieData', function (req, res) {
  res.json({
    errno: 0,
    data: pieData
  });
});

apiRoutes.get('/getTableData', function (req, res) {
  let query = req.query;
  let per_page = query.per_page;
  let cur_page = query.cur_page;
  
  let min = per_page * cur_page - per_page;
  let max = per_page * cur_page;
  
  
  let arr = tableData.slice(min, max);
  res.json({
    errno: 0,
    data: {
      table: arr,
      total: tableData.length
    }
  });
});

apiRoutes.get('/getFormData', function (req, res) {
  res.json({
    errno: 0,
    data: formData
  });
});

app.use('/api', apiRoutes);

const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
