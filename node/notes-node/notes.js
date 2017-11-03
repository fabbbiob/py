console.log('exec notes.js');
console.log(module);

module.exports.age = 25;
// module.exports.addNote = function() {

// }
module.exports.addNote = (note) => {
    const fs = require('fs');
    const os = require('os');

    console.log(`\n ${note} added`);
    fs.appendFileSync('./test.txt', "\nappended text2 " + note);
    fs.appendFileSync('./test.txt', `\nappended text2 ${note}`);

    return note;
}

module.exports.sum = (a, b) => {
    return a + b;
}