var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(err, res) {
            if (err) {
                throw err;
            }
            cb(res)
        })
    },
    insertOne: function(tableName, burgerName, cb) {
        orm.insertOne(tableName, burgerName, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    updateOne: function(burgerName, cb) {
        orm.updateOne(burgerName, cb, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    }
}

module.exports = burger;