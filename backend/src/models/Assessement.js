const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');


const Assessement = sequelize.define('Assessement', {
  
  counted: {
    type: DataTypes.TEXT,
    allowNull: true
  } 
});

// Assessement.associate = function(models){
//   Assessement.belongsTo(models.User);
// };


module.exports = Assessement;