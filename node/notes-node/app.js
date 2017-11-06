#!/usr/bin/env node

console.log("start");
//nodejs.org/api
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

console.log('\nYARGS ARGV: ', argv);

if (command == "add") {
    notes.add(argv.title, argv.content);
} else if (command == "update") {
    notes.update(argv.title, argv.content);
} else if (command == "list") {
    notes.getAll();
} else if (command == "read") {
    notes.get(argv.title);
} else if (command == "remove") {
    notes.remove(argv.title);
} else { console.log("unknow") }