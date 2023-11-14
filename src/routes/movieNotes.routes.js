const { Router } = require('express')

const MovieController = require('../controllers/MovieController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const movieRoutes = Router()

const movieController = new MovieController()
movieRoutes.use(ensureAuthenticated)

movieRoutes.post('/', movieController.create)

movieRoutes.get('/:id', movieController.show)

movieRoutes.get('/', movieController.index)

movieRoutes.delete('/:id', movieController.delete)

module.exports = movieRoutes
