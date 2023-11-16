const knex = require('../database/knex')

class UserAvatarController {
  async update(request, response) {
    const user_id = request.user.id
    const avatarFilename = request.file.filename
  }
}
module.exports = UserAvatarController
