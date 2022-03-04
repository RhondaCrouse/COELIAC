const mongoose = require('mongoose');

const coeliacSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  //   {
  //  restaurantName: {
  //       type: String,
  //       required: [true, 'Please input some text'],
  //     },
  //     address: { type: String, required: [true, 'Please input some text'] },
  //     suburb: { type: String, required: [true, 'Please input some text'] },
  //     country: { type: String, required: [true, 'Please input some text'] },
  //     cuisine: { type: String },
  //     priceRange: { type: Number },
  //     review: { type: String, required: [true, 'Please input some text'] },
  //     date: { type: Date, required: [true, 'Please input some text'] },
  //
  //   },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Coeliac', coeliacSchema);
