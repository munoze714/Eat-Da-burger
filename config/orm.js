var connection = require("../config/connection")

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            // console.log("orm", result);
            cb(result)
        });
    },
}

module.exports = orm;