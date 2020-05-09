var express = require("express");

var router = express.Router();
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data,
        };
        // console.log("controller", hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("this is the route")
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.false
    ], function (result) {
        // Send back the ID of the new quote
        console.log("this is the result")
        res.json({ id: result.insertId });

    });
});

module.exports = router;