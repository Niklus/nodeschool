const fs = require("fs");

fs.readFile(process.argv[2], (err, contents) => {
  if (err) {
    return console.error(err);
  }
  const length = contents.toString().split("\n").length - 1;
  console.log(length);
});
