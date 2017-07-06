//this is hit as a model (called thru directory) in the db when you run db.sync
module.exports = function(sequelize, DataTypes) {

var Todo = sequelize.define('Todo', {
	  text: DataTypes.STRING,
	  complete: DataTypes.BOOLEAN
	});
	console.log('todo complete');
	return Todo;
};