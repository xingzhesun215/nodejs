var fs = require("fs");

var data = fs.readFileSync("info.txt");

console.log(data.toString());
console.log("程序执行结束!");