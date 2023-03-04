const Koa = require('koa')
const app = new Koa()
const static = require('koa-static') //托管静态资源
const cors = require('koa2-cors')
const {PORT} = require('./config')
const router = require('./router')
const { koaBody } = require('koa-body');
const bouncer = require("koa-bouncer");
const jwt = require('koa-jwt');
const json = require("koa-json");
const errors = require("./core/http-exception");
const catchError = require("./middlewares/exception");
global.errs = errors;
app.use(catchError);
app
  .use(koaBody({ multipart: true }))
  .use(bouncer.middleware())
  .use(json())
  .use(cors())
  .use(static(__dirname + '/public'))
app.use(router.routes())
app.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT);
})
