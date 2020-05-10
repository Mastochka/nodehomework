const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '../data/users.json');

module.exports = router;
router.get('/:id', (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Запрашиваемый файл не найден' });
      return;
    }
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ error: 'Нет пользователя с таким id' });
    }
  });
});

router.get('/', (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Запрашиваемый файл не найден' });
      return;
    }
    const users = JSON.parse(data);
    res.send(users);
  });
});
