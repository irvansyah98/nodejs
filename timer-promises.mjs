import timers from "timers/promises";

console.info(new Date());
const name = await timers.setTimeout(5000,"iervan");
console.info(new Date());

console.info(name);