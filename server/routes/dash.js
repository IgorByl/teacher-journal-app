const express = require('express');
const router = express.Router();

const cntrl = require('../controllers/studentsData');

router.use('/', (req, res) => {
  cntrl
    .getMockDataFromFile()
    .then(data => res.json(data))
    .catch(err => {
      res.status(500);
      res.end('Smth went wrong');
    });
});

module.exports = router;
