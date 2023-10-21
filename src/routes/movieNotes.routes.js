const { Router } = require('express')

const MovieController = require('../controllers/MovieController')

const movieRoutes = Router()

function myMiddleware(request, response, next) {
  console.log('você passou pelo Middleware')
  next()
}

const movieController = new MovieController()

movieRoutes.post('/:user_id', myMiddleware, movieController.create)

movieRoutes.get('/:id', myMiddleware, movieController.show)

movieRoutes.get('/', myMiddleware, movieController.index)

movieRoutes.delete('/:id', myMiddleware, movieController.delete)

module.exports = movieRoutes
