const express = require('express');
const router = express.Router();

const mentorsCntrl = require('../controllers/mentors');

router.use('/', (req, res) => {
  mentorsCntrl
    .getMockDataFromFile()
    .then(data => res.json(data))
    .catch(err => {
      res.status(500);
      res.end('Smth went wrong');
    });
});

module.exports = router;
