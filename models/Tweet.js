const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  comment: [
    {
      userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  like: [
    {
      userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    },
  ],
  disLike: [
    {
      userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('tweet', TweetSchema);
