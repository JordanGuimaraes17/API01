const { Router } = require('express')
const routes = Router()
const usersRoutes = require('./users.routes')
const movieRoutes = require('./movieNotes.routes')
const tagsRoutes = require('./movieTags.routes')
routes.use('/users', usersRoutes)
routes.use('/movie', movieRoutes)
routes.use('/tags', tagsRoutes)
module.exports = routes
