const mongoose = require('mongoose');

// definir le plan de notre schema
const dataSchema = mongoose.Schema({
    name: {type: String, required: true},
    adress: String,
    tel: number
});

// transformer le schema en model

// module.exports = mongoose.model('Data', dataSchema);

