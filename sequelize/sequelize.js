var Project = sequelize.define('chirps', {
	author: Sequelize.STRING,
	chirp: Sequelize.STRING
});