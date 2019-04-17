const express = require('express');
const router = express.Router();
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

console.log("works",db.food);
// Get food list
router.get('/foods', (req, res) => {
  db.food.findAll()
    .then(foods => res.render('foods', {foods})).catch(err => console.log(err))});
    
// Display add food form
router.get('/foods', (req, res) => res.render('add'));

// Add a food
router.post('/foods', (req, res) => {
  let { item, location, price, description, contact_email } = req.body;
    console.log("works");
    // Make lowercase 
    item = item.toLowerCase();

    // Insert into table
    db.food.create({
      item,
      location,
      description,
      price,
      contact_email
    })
      .then(Food => res.redirect('/foods'))
      .catch(err => console.log(err));
});

// Search for foods
// router.get('/', (req, res) => {
//   let { term } = req.query;

  // Make lowercase
  // term = term.toLowerCase();

  // Food.findAll({ where: { item: { [Op.like]: '%' + term + '%' } } })
  //   .then(foods => res.render('foods', { foods }))
  //   .catch(err => console.log(err));
// });

module.exports = router;