function test(){
    return Promise.resolve("test");
}

const test1 = await test();

console.info(test1);