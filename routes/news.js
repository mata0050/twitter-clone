const express = require('express');
const router = express.Router();
const https = require('https');

// @route    GET /latest
// @desc     Get all news
// @access   Public
router.get('/latest', async (req, res) => {
  https
    .get(
      'https://newsdata.io/api/1/news?apikey=pub_2945c46c381d92d811903c639caa3223ec62&country=ca,us',
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
