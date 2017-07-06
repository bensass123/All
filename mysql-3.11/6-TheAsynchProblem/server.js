'use strict';
var orm = require("./config/orm.js");
require('console.table');

var callback = (data) => {
	console.log('\r\n\r\n');
	console.table(data);
}

var data = orm.selectWhere(callback, "parties", "party_type", "grown-up");

