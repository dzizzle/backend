// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// GLOBAL VARIABLES 
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gifts';
const giftController = require('./controllers/gifts.js')

// CORS STUFF
const whitelist = ['http://localhost:3010', 'https://floating-caverns-88204.herokuapp.com'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
}

// DATABASE
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
db.on('open', () => {
    console.log('Mongo is connected for Sharon, Sheila, and Dana!')
});

// MIDDLEWARE 
app.use(cors())
app.use(express.json());
app.use('/gifts', giftController)


// LISTENER
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


