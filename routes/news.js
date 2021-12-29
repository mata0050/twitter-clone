const express = require('express');
const router = express.Router();
const https = require('https');

// @route    GET /latest
// @desc     Get all news
// @access   Public
router.get('/latest', async (req, res) => {
  https
    .get(
      'https://newsdata.io/api/1/news?apikey=pub_31853e3b0044a4c6e0d545251d226cc0c9e2&country=ca,us',
      (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          res.json(JSON.parse(data));
        });
      }
    )
    .on('error', (err) => {
      console.log('Error: ' + err.message);
    });
});

module.exports = router;
