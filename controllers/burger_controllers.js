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



module.exports = router;