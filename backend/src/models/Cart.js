const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');


const Cart = sequelize.define('Cart', {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  point: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // Nessa situação de pagamento 'fake' melhor que pensei foi o boolean (pagou ou não pagou)
  payment: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

Cart.associate = function(models){
  // Cart.belongsTo(models.User);
  Cart.belongsToMany(models.Products, {through: models.CartProducts});
};


module.exports = Cart;