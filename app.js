const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');


// Database
// const db = require('./config/config.json');

// Test DB
// db.authenticate()
//   .then(() => console.log('Database connected...'))
//   .catch(err => console.log('Error: ' + err))

const app = express();

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

var routes = require("./routes/foods.js");

app.use(routes);

// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// Food routes
app.use('/foods', (req, res) => res.render('foods', { layout: 'landing' }));

app.get('/add', (req, res) => res.render('add', { layout: 'landing' }));



// Signup Route
app.get('/signup', (req, res) => res.render('signup', { layout: 'landing' }));

const PORT = process.env.PORT || 3000;


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, console.log(`Server started on port ${PORT}`));  
});

