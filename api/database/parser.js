const yargs = require("yargs")

yargs.version("1.1.0")

const seedData = () => {
// TODO : create json file with seed data to insert in DB
}


// node ./database/parser.js reset
yargs.command({
    command: "reset",
    describe: "reset database to default values",
    handler() {
        console.log("TODO : create json file with seed data to insert in DB")
    }
})


yargs.parse()