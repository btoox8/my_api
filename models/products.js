const mongoose = require('mongoose');

const productsModel = mongoose.Schema({
    title:String,
    dec:String,
    color:String,

    // if I want add conditions
    // title:{type:String,required:t
    // }

});

// export
// model('name of collection', our model deal with that collection)
module.exports = mongoose.model('products',productsModel);


