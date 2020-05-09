var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            // console.log("burger res", res)
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        console.log("we made it to the burger land")
        orm.insertOne("burgers", cols, vals, function (res) {
            // console.log("burger res", res)
            cb(res);
        });
    },
};
module.exports = burger;