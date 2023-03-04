const Router = require('@koa/router')
const router = new Router()
const about = require('./about')

router.use(about.routes())
about.allowedMethods()



module.exports = router