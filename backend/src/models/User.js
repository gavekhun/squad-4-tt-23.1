const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');


const User = sequelize.define('User', {
  moderator:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  //TODO(Marco): Estudar sobre como declarar o 'salt e hash' no model Usuario
  
  // salt:{},
  // hash:{},
    
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

User.associate = function (models) {
  User.hasMany(models.Cart);
  User.hasMany(models.Assessement);
  User.belongsToMany(models.Products, {
    through: 'Favorites', 
    as: 'favoring',
    // foreignKey: 'productid'
  });
};


module.exports = User;