const fs = require('fs');
const os = require('os');

var originalNote = {
    title: "test",
    body: 34345345.3443

};
var originalNoteStr = JSON.stringify(originalNote);
fs.writeFileSync("./notes.json", originalNoteStr);


var txtMEsg = fs.readFileSync("./notes.json");
var readedObj = JSON.parse(txtMEsg);
console.log(readedObj);