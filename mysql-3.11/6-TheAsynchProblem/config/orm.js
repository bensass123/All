var connection = require("../config/connection.js");
require('console.table');

var orm = {
  selectWhere: function(callback, tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      // console.table(result);
      callback(result);
    });
  }
};

module.exports = orm;
