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
    insertOne: function(burgerName, cb) {
        orm.insertOne(burgerName, function(err, res) {
            // if (err) {
            //     throw err;
            // }
            cb(res);
        })
    },
    updateOne: function(burgerId, cb) {
        orm.updateOne(burgerId, cb, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    }
}

module.exports = burger;