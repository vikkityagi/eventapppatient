const mongoose = require('mongoose')

const model = mongoose.Schema({
    patient_id: {
        type: String,
        required: true,
        unique: true
    },
    arrival_date_time: {
        type: String,
        required: true
    },
    mode_of_arrival: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    patient_situation: {
        type: String,
        required: true
    },
    patient_name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model("Patient", model)