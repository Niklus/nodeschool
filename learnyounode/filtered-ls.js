const fs = require("fs");

fs.readdir(process.argv[2], (err, files) => {
  if (err) return console.error(err);

  const fiiltered = files.filter((file) => {
    return file.endsWith("." + process.argv[3]);
  });

  fiiltered.forEach((file) => {
    console.log(file);
  });
});
