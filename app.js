const express = require('express');

const app = express();
const path = require('path');

const users = require('./routes/users.js');
const cards = require('./routes/cards.js');
const missingLink = require('./routes/missingLink.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users);
app.use('/cards', cards);
app.use('/*', missingLink);
app.listen(3000, () => {});
