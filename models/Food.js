
module.exports = function(sequelize, DataTypes) {
const Food = sequelize.define('food', {
  item: {
    type:DataTypes.STRING
  },
  location: {
    type:DataTypes.STRING
  },
  description: {
    type:DataTypes.STRING
  },
  price: {
    type:DataTypes.STRING
  },
  contact_email: {
    type:DataTypes.STRING
  }
});
  return Food;

}

