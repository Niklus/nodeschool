const fs = require("fs");

function listFiles(dir, ext, cb) {
  fs.readdir(dir, (err, files) => {
    if (err) return cb(err);

    const filtered = files.filter((file) => {
      return file.endsWith("." + ext);
    });

    cb(null, filtered);
  });
}

module.exports = listFiles;
