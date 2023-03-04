const Router = require("@koa/router")
const about = new Router()
about.prefix('/api/about')

about.get('/')

module.exports = about