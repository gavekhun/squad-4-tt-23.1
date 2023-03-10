const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("User", {
  moderator: {
    type: DataTypes.BOOLEAN,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  point:{
    type: DataTypes.INTEGER,
  },
  //TODO(Marco): Estudar sobre como declarar o 'salt e hash' no model Usuario

  // salt:{},
  // hash:{},

  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Associations
User.associate = function (models) {
  User.hasMany(models.Cart);
  User.hasMany(models.Evaluate);

  User.belongsToMany(models.Products, {
    through: "Favorites",
    as: "favoring",
    foreignKey: "userproductid",
  });
};

module.exports = User;
