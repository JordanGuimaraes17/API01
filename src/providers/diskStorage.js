const fs = require('fs')
const path = require('path')
const uploadConfig = require('../configs/upload')

class DiskStorage {
  isValidExtension(file) {
    const allowedExtensions = ['.png', '.jpg', '.jpeg'] // Adicione as extensões permitidas aqui
    const extname = path.extname(file).toLowerCase()
    return allowedExtensions.includes(extname)
  }

  async saveFile(file) {
    if (!this.isValidExtension(file)) {
      throw new Error('Extensão de arquivo não permitida')
    }

    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    )
    return file
  }

  async deleteFile(file) {
    if (!this.isValidExtension(file)) {
      throw new Error('Extensão de arquivo não permitida')
    }

    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }
    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorage
