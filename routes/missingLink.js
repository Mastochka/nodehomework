const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(404);
  res.send('Несуществующий адрес');
})
module.exports = router;