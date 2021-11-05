const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
      const queryText = `
      SELECT * FROM "favorites";
      `
      pool.query(queryText)
          .then(response => {
            res.send(response.rows)
          }).catch(err => {
            console.log('Error on GET favorites: ', err);
            res.sendStatus(500);
          })
      })

// add a new favorite
router.post('/', (req, res) => {
  const fav = req.body;
  console.log('fav is: ', fav);
  
  const queryText = `
    INSERT INTO favorites (title, url, giphy_id)
    values($1, $2, $3)
  `
  const url = req.body.images.fixed_height.url;
  const values = [fav.title, url, fav.id]
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
  const idToUpdate = req.params.favId
  const categoryToUpdate = req.body
  const queryText = `
    UPDATE favorites 
    SET "category_id"=$1
    WHERE "giphy_id"=$2;
  `
  const  values = [categoryToUpdate, idToUpdate]
  pool.query(queryText, values)
      .then(response => {
        res.sendStatus(200)
      }).catch(err => {
        console.log('Error on update', err);
        res.sendStatus(500)
      })
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const idToDelete = req.params.id
  const queryText = `
    DELETE FROM favorites
    WHERE giphy_id=$1
  `
  const values = [idToDelete]
  pool.query(queryText, values)
      .then(response => {
        res.sendStatus(200);
      }).catch(err => {
        console.log('Error on delete: ', err);
        res.sendStatus(500)
      })
  });

module.exports = router;
