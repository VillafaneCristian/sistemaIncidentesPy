const dependencies = require ('./dependencies/dependencies.js');
const operators = require ('./operators/operators.js');
const users = require ('./users/users.js');

const db = {
    dependencies,
    operators,
    users
};

module.exports = db;