const fs = require('fs')
const path = require('path')
const uploadConfig = require('../configs/upload')

class DiskStorage {
  static ERROR_INVALID_EXTENSION = 'Extensão de arquivo não permitida'
  static ERROR_DELETE_FILE = 'Erro ao excluir o arquivo'
  isValidExtension(file) {
    // Adicione as extensões permitidas na configuração
    const allowedExtensions = uploadConfig.allowedExtensions || [
      '.png',
      '.jpg',
      '.jpeg'
    ]

    const extname = path.extname(file).toLowerCase()
    console.log('Extensão do arquivo:', extname)
    return allowedExtensions.includes(extname)
  }

  async saveFile(file) {
    if (!this.isValidExtension(file)) {
      throw new Error(DiskStorage.ERROR_INVALID_EXTENSION)
    }

    const sourcePath = path.resolve(uploadConfig.TMP_FOLDER, file)
    const destinationPath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)

    await fs.promises.rename(sourcePath, destinationPath)
    console.log(`Arquivo salvo em: ${destinationPath}`)

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
      console.error('Erro ao excluir o arquivo:', error)
      // Lançar o erro ou lidar de alguma outra maneira, dependendo dos requisitos
    }
  }
}

module.exports = DiskStorage
