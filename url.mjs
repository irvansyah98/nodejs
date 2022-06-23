import {URL} from 'url';

const test = new URL("https://www.google.com/search?q=test");

console.info(test.toString());
console.info(test.href);
console.info(test.protocol);
console.info(test.host);
console.info(test.pathname);
console.info(test.searchParams);