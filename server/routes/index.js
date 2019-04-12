const express = require('express');

const router = express.Router();
const dashRouter = require('./dash');
const saveRouter = require('./save');

router.use('/dash', dashRouter);
router.use('/save', saveRouter);

module.exports = router;
