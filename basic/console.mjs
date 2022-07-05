import {Console} from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout : file,
    stderr : file
});

log.info("hello");
log.error("hello");