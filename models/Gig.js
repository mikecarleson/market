// const Sequelize = require('sequelize');
// const db = require('../config/config.json');
module.exports = function(sequelize, DataTypes) {
const Gig = sequelize.define('gig', {
  title: {
    type:DataTypes.STRING
  },
  technologies: {
    type:DataTypes.STRING
  },
  description: {
    type:DataTypes.STRING
  },
  budget: {
    type:DataTypes.STRING
  },
  contact_email: {
    type:DataTypes.STRING
  }
});
  return Gig;

}

