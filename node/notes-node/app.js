console.log("start");
//nodejs.org/api
const fs = require('fs');
const os = require('os');

fs.appendFile('./test.txt', "appended text", function(err) {
    if (err) {
        console.log(err);
    }

});

var uid = os.userInfo().username;
console.log(uid);
fs.appendFileSync('./test.txt', "\nappended text2 " + uid);
fs.appendFileSync('./test.txt', `\nappended text2 ${uid}`);