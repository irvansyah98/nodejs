import util from 'util';

const firstName = "iervan";
const lastName = "firdiansyah";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format(`Hello %s %s`, firstName, lastName));

const json = {
    firstName : "iervan",
    lastName : "firdiansyah"
};

console.info(`Person : ${JSON.stringify(json)}`);
console.info(util.format(`Person %j`,json));