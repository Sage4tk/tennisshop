const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    itemType: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        min: 0,
        required: true
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Post', postSchema);