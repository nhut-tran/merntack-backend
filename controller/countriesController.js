const country = require('../model/countryModel');
const mongoose = require('mongoose');

const getAllCountries = async (req, res) => {
    try {
        const allCountries = await country.find().select('-__v').sort({ name: 1 });
        return res.status(201).json(allCountries);
    } catch (e) {
        return res.status(400).json({ error: "Bad request" })
    }
}

const getCountryById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ errr: "country not exist" });
        }
        const allCountries = await country.findById(id).select('-__v');
        res.status(201).json(allCountries);
    } catch (e) {
        res.status(500).json({ error: "Something went wrong" })
    }
}

const createCountry = async (req, res) => {
    try {
        const { name, continent, area, population, capital } = req.body;
        const result = await country.create({ name, continent, area, population, capital });
        return res.status(201).json(result);


    } catch (e) {

        res.status(400).json({ error: e.message })
    }
}

const deleteCountry = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ errr: "country not exist" });
        }
        const deleteCountry = await country.findOneAndDelete({ _id: id }).select('-__v')
        res.status(200).json(deleteCountry);
    } catch (e) {
        res.status(500).json({ error: "Something went wrong" })
    }
}
const updateCountry = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ errr: "country not exist" });
        }
        const upDateCountry = await country.findOneAndUpdate({ _id: id }, { ...req.body }).select('-__v')
        res.status(200).json(upDateCountry);
    } catch (e) {

        res.status(500).json({ error: "Something went wrong" })
    }
}


module.exports = {
    getAllCountries,
    getCountryById,
    createCountry,
    deleteCountry,
    updateCountry
}


