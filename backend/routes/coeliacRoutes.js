const express = require('express');
const router = express.Router();
const {
  getCoeliacs,
  setCoeliac,
  updateCoeliac,
  deleteCoeliac,
} = require('../controllers/coeliacController');

router.route('/').get(getCoeliacs).post(setCoeliac);
router.route('/:id').put(updateCoeliac).delete(deleteCoeliac);

module.exports = router;
