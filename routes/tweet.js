const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

// Model
const Tweet = require('../models/Tweet');

// @route    GET /tweet
// @desc     Get all tweets
// @access   Public
router.get('/', async (req, res) => {
  try {
    const tweet = await Tweet.find();
    res.json(tweet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST /tweet/new
// @desc     Add a new tweet
// @access   Private
router.post(
  '/new',
  auth,
  [check('message', 'Please include a tweet').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { message, userID } = req.body;

    if (message.length > 140) {
      return res.status(400).json({
        errors: [{ msg: 'Your tweet has to be less than 140 characters' }],
      });
    }

    try {
      const tweet = new Tweet({
        message,
        userID,
      });

      await tweet.save();
      res.json(tweet);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    PUT /tweet/comment
// @desc     Add a comment
// @access   Private
router.put(
  '/comment',
  auth,
  [check('comment', 'Please include a tweet').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // userID -> for the user commenting
    const { comment, userID, tweetID } = req.body;

    if (comment.length > 140) {
      return res.status(400).json({
        errors: [{ msg: 'Your tweet has to be less than 140 characters' }],
      });
    }

    try {
      let tweet = await Tweet.findById({ _id: tweetID });
      tweet.comment.push({
        comment,
        userID,
      });
      await tweet.save();
      res.json(tweet);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    PUT /tweet/like
// @desc     Add a like
// @access   Private
router.put('/like', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // userID -> for the user liking
  const { userID, tweetID } = req.body;

  try {
    let tweet = await Tweet.findById({ _id: tweetID });

    const likes = tweet.like;
    const isMatch = await Tweet.findOne({ 'like.userID': userID });

    //allow user to add one like only
    if (isMatch) {
      return res.send('error');
    }

    likes.push({
      userID,
    });
    await tweet.save();
    res.json(tweet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    PUT /tweet/dislike
// @desc     Add a dislike
// @access   Private
router.put('/dislike', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // userID -> for the user liking
  const { userID, tweetID } = req.body;

  try {
    let tweet = await Tweet.findById({ _id: tweetID });
    const isMatch = await Tweet.findOne({ 'like.userID': userID });

    //allow user to add one like only
    if (isMatch) {
      return res.send('error');
    }

    tweet.disLike.push({
      userID,
    });
    await tweet.save();
    res.json(tweet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
