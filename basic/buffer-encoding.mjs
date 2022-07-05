const buffer = Buffer.from("Iervan Firdiansyah", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("SWVydmFuIEZpcmRpYW5zeWFo","base64");
console.info(bufferBase64.toString("utf8"));