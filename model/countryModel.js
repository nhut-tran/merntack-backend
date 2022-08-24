const mongoose = require('mongoose');

const CountryShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: [true, "continent is required"]
    },
    population: {
        type: Number,
        required: [true, "population is required"]
    },
    capital: {
        type: String,
        required: [true, "capital is required"]
    },
    area: {
        type: Number,
        required: [true, "area is required"]
    }
})


module.exports = mongoose.model("country", CountryShema);