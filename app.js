const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

var routes = require("./routes/foods.js");

app.use(routes);

app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

app.use('/foods', (req, res) => res.render('foods', { layout: 'landing' }));

app.get('/add', (req, res) => res.render('add', { layout: 'landing' }));



app.get('/signup', (req, res) => res.render('signup', { layout: 'landing' }));

const PORT = process.env.PORT || 3000;


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, console.log(`Server started on port ${PORT}`));  
});

