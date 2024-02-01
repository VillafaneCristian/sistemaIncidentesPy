const dependencies = require ('./dependencies/dependencies.js');
const operators = require ('./operators/operators.js');
const users = require ('./users/users.js');
const incidents = require ('./incidents/incidents.js');

const db = {
    dependencies,
    operators,
    users,
    incidents
};

module.exports = db;