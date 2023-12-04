const { Router } = require('express')

const usersRouter = require('./users.routes')
const movieRouter = require('./movieNotes.routes')
const tagsRouter = require('./movieTags.routes')
const sessionsRouter = require('./sessions.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/movie', movieRouter)
routes.use('/tags', tagsRouter)
routes.use('/sessions', sessionsRouter)

module.exports = routes
