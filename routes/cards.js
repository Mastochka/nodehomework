const router = require('express').Router();
const fs = require('fs');

module.exports = router;
router.get('/', (req, res) => {
  fs.readFile('./data/cards.json', { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const cards = JSON.parse(data);
    res.send(cards);
  });
})