const express = require('express');
const router = express.Router();

const mentorsCntrl = require('../controllers/mentors');

router.use('/', (req, res) => {
  mentorsCntrl
    .saveDate()
    .then (() => res.end('saved'))
    .catch(err => {
      res.status(500);
      res.end('Smth went wrong');
    });
});

module.exports = router;
