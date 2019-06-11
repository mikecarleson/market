const express = require('express');
const router = express.Router();
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

console.log("works",db.food);
router.get('/foods', (req, res) => {
  db.food.findAll()
    .then(foods => res.render('foods', {foods})).catch(err => console.log(err))});
    
router.get('/foods', (req, res) => res.render('add'));

router.post('/foods', (req, res) => {
  let { item, location, price, description, contact_email } = req.body;
    console.log("works");
    item = item.toLowerCase();

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

module.exports = router;