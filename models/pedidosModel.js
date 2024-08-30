const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:[true, 'Es necesario ingresar el nombre del producto que quieres dar de alta'],
        ref: 'User'
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        required:[true, 'Es necesario ingresar la descripción del producto que quieres dar de alta'],
        ref: 'Product'
    },
    productPrice:{
        type: mongoose.Types.Decimal128,
        required:[true,'Es necesario ingresar el precio del producto que quieres dar de alta']
    },
    amount:{
        type: Number,
        required:[true,'Se requiere la cantidad del producto que vas a pedir']
    },
    total:{
        type: mongoose.Types.Decimal128,
        required:[true,'Es necesario calcular el total del pedido']
    }
})

module.exports = mongoose.model('Pedido', pedidoSchema)