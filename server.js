const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const PORT = process.env.port || 5000;
const passport = require('passport');
const users = require('./routes/api/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB successfully connected!'))
  .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', users);

app.listen(PORT, () =>
  console.log(`Server up and running at http://localhost:${PORT}`)
);
