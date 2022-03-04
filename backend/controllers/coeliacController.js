const asyncHandler = require('express-async-handler');

const Coeliac = require('../models/coeliacModel');
const User = require('../models/userModel');

// @desc    Get coeliacs
// @route   GET /api/coeliacs
// @access  Private
const getCoeliacs = asyncHandler(async (req, res) => {
  const coeliacs = await Coeliac.find({ user: req.user.id });
  res.status(200).json(coeliacs);
});

// @desc    Set coeliacs
// @route   POST /api/coeliacs
// @access  Private
const setCoeliac = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const coeliac = await Coeliac.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(coeliac);
});

// @desc    Update coeliac
// @route   PUT /api/coeliacs/:id
// @access  Private
const updateCoeliac = asyncHandler(async (req, res) => {
  const coeliac = await Coeliac.findById(req.params.id);
  if (!coeliac) {
    res.status(400);
    throw new Error('Coeliac not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user matches the coeliac user
  if (coeliac.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  const updatedCoeliac = await Coeliac.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedCoeliac);
});

// @desc    delete coeliac
// @route   DELETE /api/coeliacs/:id
// @access  Private
const deleteCoeliac = asyncHandler(async (req, res) => {
  const coeliac = await Coeliac.findById(req.params.id);
  if (!coeliac) {
    res.status(400);
    throw new Error('Coeliac not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('user not found');
  }

  // Make sure the logged in user matches the coeliac user
  if (coeliac.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  await coeliac.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCoeliacs,
  setCoeliac,
  updateCoeliac,
  deleteCoeliac,
};
