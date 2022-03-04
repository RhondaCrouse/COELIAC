const express = require('express');
const router = express.Router();
const {
  getCoeliacs,
  setCoeliac,
  updateCoeliac,
  deleteCoeliac,
} = require('../controllers/coeliacController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getCoeliacs).post(protect, setCoeliac);
router.route('/:id').delete(protect, deleteCoeliac).put(protect, updateCoeliac);

module.exports = router;
