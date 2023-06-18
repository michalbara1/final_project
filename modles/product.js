const mongoose= require('mongoose');
const Schema= mongoose. Schema;

const schemei= new mongoose.Schema({
    image:{
        type:'string',
        required:true
    },
    title:{
        type:'string',
        required:true
    }
})
module.exports= mongoose.model('Product',product);
exports.Product = Product;