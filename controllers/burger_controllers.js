var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        console.log(data);
        var burgerObj = {
            burgers: data
        }
        res.render("index", burgerObj);
    })
})

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name), function(result) {
        res.json({ id: result.insertId })
    }
})

router.put("/api/burgers/:id", function(req, res) {
    var currBurgerId = req.params.id;
    console.log("id: " + currBurgerId);

    burger.updateOne(currBurgerId, function(result) {
        if (result.changedRows === 0) {
            console.log(result);
            return res.status(404).end()
        } else {
            console.log(result);
            return res.status(200).end();
        }
        // console.log(result);
    })
})



module.exports = router;