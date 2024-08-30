const mongoose = require('mongoose')

const usuariosSchema = mongoose.Schema({
    userName:{
        type: String,
        required:[true, 'Es necesario ingresar el nombre del usuario que quieres dar de alta']
    },
    userEmail:{
        type: String,
        required:[true, 'Es necesario ingresar el email del usuario'],
        unique: true
    },
    userPassword:{
        type: String,
        required:[true, 'Es necesario ingresar la contraseña del password que quieres dar de alta']
    }
})

module.exports = mongoose.model('Usuario', usuariosSchema)