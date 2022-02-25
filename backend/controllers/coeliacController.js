const asyncHandler = require('express-async-handler');

// @desc    Get coeliacs
// @route   GET /api/coeliacs
// @access  Private
const getCoeliacs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get coeliacs' });
});

// @desc    Set coeliacs
// @route   POST /api/coeliacs
// @access  Private
const setCoeliac = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Set coeliacs' });
});

// @desc    Update coeliac
// @route   PUT /api/coeliacs/:id
// @access  Private
const updateCoeliac = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc    delete coeliac
// @route   DELETE /api/coeliacs/:id
// @access  Private
const deleteCoeliac = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getCoeliacs,
  setCoeliac,
  updateCoeliac,
  deleteCoeliac,
};
