const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://127.0.0.1:27017/enthalpy-logbook',
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {if (err) process.exit(1); });