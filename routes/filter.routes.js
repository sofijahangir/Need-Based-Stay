const express = require('express');

const {
  genderFilter,
  prefferedForFilter,
  roomTypeFilter,
} = require('../controllers/filter.controller');

const router = express.Router();

router.get('/genderTest', genderFilter);
router.get('/prefferedTest', prefferedForFilter);
router.get('/roomTypeTest', roomTypeFilter);

module.exports = router;
