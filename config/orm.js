var connection = require("../config/connection.js");



var selectAll = function(cb) {
    var query = "SELECT * FROM burgers;";
    connection.query(query, cb);
};

var insertOne = function(tableName, burgerName, cb) {
    var query = "INSERT INTO ?? (burger_name) VALUES (??);";
    connection.query(query, [tableName, burgerName], cb);
};

var updateOne = function(burgerName, cb) {
    var query = "UPDATE burgers SET devoured = true WHERE ??;";
    connection.query(query, [burgerName], cb);
}



module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
}