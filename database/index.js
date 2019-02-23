const Sequelize = require ('sequelize');

const db = new Sequelize('reviews', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Reviews = db.define('reviews', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  rating: Sequelize.INTEGER,
  recommend: Sequelize.BOOLEAN,
  size: Sequelize.INTEGER,
  width: Sequelize.INTEGER,
  comfort: Sequelize.INTEGER,
  quality: Sequelize.INTEGER,
  opinion: Sequelize.STRING(90),
  review: Sequelize.STRING(16383),
  nickname: Sequelize.STRING(20),
  email: Sequelize.STRING(320)
})

//;

module.exports.db = db
module.exports.Reviews = Reviews