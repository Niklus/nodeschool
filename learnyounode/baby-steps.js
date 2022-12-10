let total = 0;

process.argv.forEach((el, i) => {
  if (i > 1) {
    total += Number(el);
  }
});

console.log(total);
