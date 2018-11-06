var connection = require("../config/connection.js");



var selectAll = function(cb) {
    var query = "SELECT * FROM burgers;";
    connection.query(query, cb);
};

var insertOne = function(burgerName, cb) {
    var query = "INSERT INTO burgers (burger_name, devoured) VALUES ('??', false);";
    connection.query(query, [burgerName], cb);
};

var updateOne = function(burgerId, cb) {
    var query = "UPDATE burgers SET devoured = true WHERE id = '??';";
    connection.query(query, [burgerId], cb);
}



module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
}