const fs = require("fs");
let datajson = fs.readFileSync("./task2.json");
let fileParse = JSON.parse(datajson);

function unicUser(stfr) {
  const table = {};
  return stfr.filter(({ name }) => !table[name] && (table[name] = 1));
}

console.log(unicUser(fileParse));
