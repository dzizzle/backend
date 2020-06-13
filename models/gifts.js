const {Schema, model} = require('mongoose')

const giftSchema = new Schema({
    recipient: {type: String, required: true},
    gift: {type: String, required: true},
    date: String,
    occasion: String
})

const Gift = model('gift', giftSchema);
module.exports = Gift;