const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/api/favorite', (req, res) => {
  const fav = req.body;
  const queryText = `
    INSERT INTO favorite (title, url, giphy_id)
    values($1, $2, $3)
  `
  const values = [fav.title, fav.images.fixed_height.url, fav.id]
  pool.query(queryText, values)
      .then(response => {
        res.sendStatus(200)
      }).catch(err => {
        console.log('Error on POST FAVORITE: ', err);
        res.sendStatus(500)       
      })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
