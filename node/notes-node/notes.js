//console.log('exec notes.js');

var add = (title, body) => {
    console.log('adding %s name %s', body, title);
};
var update = (title, body) => {
    console.log('updating %s name %s', body, title);
};
var getAll = () => {
    console.log('getting All notes ');
    return [];
};
var get = (title) => {
    console.log('getting note %s', title);
};
var remove = (title) => {
    console.log('removing note %s', title);
};
module.exports = {
    add,
    update,
    getAll,
    get,
    remove
};



// module.exports.addNote = function() {

// }
// module.exports.addNote = (title, note) => {
//     const fs = require('fs');
//     const os = require('os');

//     console.log(`\n ${note} added`);
//     fs.appendFileSync('./' + title + '.txt', `\n ${note}`);

//     return note;
// }

// module.exports.sum = (a, b) => {
//     return a + b;
// }