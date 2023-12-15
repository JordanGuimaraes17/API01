const fs = require('fs')
const path = require('path')
const uploadConfig = require('../configs/upload')

class DiskStorage {
  isValidExtension(file) {
    const allowedExtensions = ['.png', '.jpg', '.jpeg'] // Adicione as extensões permitidas aqui
    const extname = path.extname(file).toLowerCase()
    console.log('Extensão do arquivo:', extname)
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
      await fs.promises.access(filePath, fs.constants.F_OK)
      await fs.promises.unlink(filePath)
    } catch (error) {
      // Lidar com outros erros, se necessário
      return
    }
  }
}

module.exports = DiskStorage
