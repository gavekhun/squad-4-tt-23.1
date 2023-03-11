const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Evaluate = sequelize.define('Evaluate', {
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});


module.exports = Evaluate;