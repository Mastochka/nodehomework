const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '../data/cards.json');

module.exports = router;
router.get('/', (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Запрашиваемый файл не найден' });
      return;
    }
    const cards = JSON.parse(data);
    res.send(cards);
  });
});
