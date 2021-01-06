const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  let sqlText = `SELECT * from item`;
  pool.query(sqlText)
  .then(result => {res.send(result.rows)})
  .catch(error => {console.log('error retrieving posters', error)})
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  let item = req.body
  console.log('In POST router')
  const sqlText = `INSERT INTO "item" (description, image_url, user_id)
                    VALUES ($1, $2, $3);`;
  pool.query(sqlText, [item.description, item.image_url, item.id])
    .then(result => {
      console.log('POST result', result)
      res.sendStatus(201)
    })
    .catch(err => {
      console.log('ERROR in POST shelf router', err)
      res.sendStatus(500)
    })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // DELETE route code here
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // PUT route code here
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // GET /count route code here
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // GET item route code here
});

module.exports = router;
