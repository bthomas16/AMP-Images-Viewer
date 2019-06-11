const express = require('express');
const router = express.Router();
const _mockDb = require('../DatabaseMock/MockDb.js')

const response = require('../ssrDataModels.js')

router.get('/Options', (req, res) => {
  let dbQueryResult = _mockDb.Options

  res.json(dbQueryResult)
})

// GET ImageArray
router.get('/:category', (req, res) => {
  let category = req.params.category.toString();
  let dbQueryResult = _mockDb[category];
  console.log('soup 1', category, dbQueryResult)

  res.json(dbQueryResult)
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { response });
});

module.exports = router;
