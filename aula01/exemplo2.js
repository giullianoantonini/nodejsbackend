const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

console.log(argv.nome);
console.log(argv.idade);
console.log(argv.cidade);
