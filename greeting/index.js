// code always search for index.js file to refer modules check app_prac7
// we asked to look greeting, code will look for index.js
var english = require('./english');
var spanish = require('./spanish');
// using multiple modules
module.exports = {
    english: english,
    spanish: spanish
};