const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    productName:{
        type: String,
        required:[true, 'Es necesario ingresar el nombre del producto que quieres dar de alta']
    },
    productDescription:{
        type: String,
        required:[true, 'Es necesario ingresar la descripción del producto que quieres dar de alta']
    },
    productPrice:{
        type: mongoose.Types.Decimal128,
        required:[true,'Es necesario ingresar el precio del producto que quieres dar de alta']
    },
    productStock:{
        type: Number,
        required:[true,'Es necesrio ingresar la cantidad disponible en el almacen']
    }
})

module.exports = mongoose.model('Producto', productoSchema)
