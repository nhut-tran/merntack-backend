const express = require('express');
const countriesController = require('../controller/countriesController')

const router = express.Router();

//get all countries
router.get('/', countriesController.getAllCountries);

//get country
router.get('/:id', countriesController.getCountryById);

//create country
router.post('/', countriesController.createCountry);

//delete country
router.delete('/:id', countriesController.deleteCountry);

//update country
router.put('/:id', countriesController.updateCountry);

module.exports = router;