const express = require('express');
const Restaurant = require('../models/Restaurant.model');
const router = express.Router();

router.get("/restaurants", (req, res, next) => {

  Restaurant
    .find()
    .then(restaurants => res.json(restaurants))
    .catch(err => console.log(err))
});

module.exports = router;
