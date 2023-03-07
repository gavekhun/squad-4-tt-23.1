const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');


const User = sequelize.define('User', {
  iDUser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
    type: DataTypes.ARRAY(DataTypes.ABSTRACT),
    allowNull: false
  },
});

User.associate = function (models) {
  User.hasMany(models.Cart);
  User.hasMany(models.Assessement);
};


module.exports = User;