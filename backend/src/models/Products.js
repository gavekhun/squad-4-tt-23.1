const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');


const Products = sequelize.define('Products', {
  
  // name: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publishers: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  publicationYear: {
    type: DataTypes.DATE,
    allowNull: false
  },
  price:{
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  image:{
  type: DataTypes.BLOB,
  allowNull: false
}
});

Products.associate = function(models){
  // Products.belongsToMany(models.User, {through: models.Favorites});
  Products.belongsToMany(models.Cart, {through: models.CartProducts});
};

module.exports = Products;