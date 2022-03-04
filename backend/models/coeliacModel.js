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
      required: [true, 'Please fill in the text'],
    },
  },
  {
    timestamps: true,
  }
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
  //     username: { type: String, required: [true, 'Please input some text'] },
  //   },
);

module.exports = mongoose.model('Coeliac', coeliacSchema);
