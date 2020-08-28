const sharp = require('sharp');

const path = require('path');

class Resize {
  constructor(username,folder) {
    this.folder = folder;
    this.username = username;
  }
  async save(buffer) {
    const filename = Resize.filename(this.username);
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(300, 300, { // size image 300x300
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(filepath);
    
    return filename;
  }
  static filename(filename) {
     // random file name
    return `${filename}.png`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`)
  }
}
module.exports = Resize;