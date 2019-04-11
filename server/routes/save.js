const express = require('express');
const router = express.Router();

const cntrl = require('../controllers/studentsData');

router.post('/', (req, res) => {
  console.log(req.body);
  cntrl
    .saveDate(req.body)
    .then (() => res.end('saved'))
    .catch(err => {
      res.status(500);
      res.end('Smth went wrong');
    });
});

module.exports = router;
