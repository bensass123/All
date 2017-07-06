// module.exports = function(sequelize, DataTypes) {
  // var Post = sequelize.define("Post", {
  //   title: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       len: [1]
  //     }
  //   },
  //   body: {
  //     type: DataTypes.TEXT,
  //     allowNull: false,
  //     len: [1]
  //   },
  //   category: {
  //     type: DataTypes.STRING,
  //     defaultValue: "Personal"
  //   }
  // });
//   return Post;
// };

var Sequelize = require('sequelize');

var sequelize = new Sequelize('mysql://b300dcefc71db4:f48b4048@us-cdbr-iron-east-03.cleardb.net/heroku_4be58ea4b61667c?reconnect=true');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


var Quote = sequelize.define("Quote", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

