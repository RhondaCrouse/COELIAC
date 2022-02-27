const asyncHandler = require('express-async-handler');
const { globalAgent } = require('http');

const Coeliac = require('../models/coeliacModel');

// @desc    Get coeliacs
// @route   GET /api/coeliacs
// @access  Private
const getCoeliacs = asyncHandler(async (req, res) => {
  const coeliacs = await Coeliac.find();
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
  });
  res.status(200).json(coeliac);
});

// @desc    Update coeliac
// @route   PUT /api/coeliacs/:id
// @access  Private
const updateCoeliac = asyncHandler(async (req, res) => {
  const coeliac = await Coeliac.findById(req.params.id)
  if (!coeliac) {
    res.status(400)
    throw new Error('Coeliac not found')
  }
  const updatedCoeliac = await Coeliac.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedCoeliac);
});

// @desc    delete coeliac
// @route   DELETE /api/coeliacs/:id
// @access  Private
const deleteCoeliac = asyncHandler(async (req, res) => {
  const coeliac = await Coeliac.findById(req.params.id,) 
  if (!coeliac) {
    res.status(400)
    throw new Error('Coeliac not found')
  }
  await coeliac.remove()
  res.status(200).json({id: req.params.id});
});

module.exports = {
  getCoeliacs,
  setCoeliac,
  updateCoeliac,
  deleteCoeliac,
};
