var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            // console.log("burger res", res)
            cb(res);
        });
    },
};
module.exports = burger;