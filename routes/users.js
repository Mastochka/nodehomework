const router = require('express').Router();
const fs = require('fs');

module.exports = router;
router.get('/:id', (req, res) => {
  fs.readFile('./data/users.json', { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const users = JSON.parse(data);
    const user = users.find((user) => user._id === req.params.id);
    if (user)
      res.send(user)
    else {
      res.status(404);
      res.send({ error: 'Нет пользователя с таким id' });
      return;
    }
  });
});

router.get('/', (req, res) => {
  fs.readFile('./data/users.json', { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const users = JSON.parse(data);
    res.send(users);
  });
})