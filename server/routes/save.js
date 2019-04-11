const express = require('express');
const router = express.Router();

const cntrl = require('../controllers/mentors');

router.use('/', (req, res) => {
  cntrl
    .saveDate()
    .then (() => res.end('saved'))
    .catch(err => {
      res.status(500);
      res.end('Smth went wrong');
    });
});

module.exports = router;
