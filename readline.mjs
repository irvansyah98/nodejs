import readline from "readline";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa namamu ? ", (name) => {
    console.info(`hello ${name}`);
    input.close();
})