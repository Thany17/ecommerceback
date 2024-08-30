const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const modelUser = require('../models/usuariosModel')

const registrarUser = asyncHandler(async (req,res)=>{

    const { userName, userEmail, userPassword } =  req.body

    if(!userName || !userEmail || !userPassword){
        return res.status(400).json({
            message: "Faltan datos por ingresar. Verifica la los campos"
        })
    }

    //Verificar si el usuario existe
    const existeUsuario = await modelUser.findOne({ userEmail })

    if(existeUsuario){
        res.status(400)
        throw new Error("El usuario ya existe")
    }
    else{

        //HASH PASWORD
        const salt = await bcrypt.genSalt(10)
        const hasedPassword = await bcrypt.hash(userPassword, salt)

       const user = await modelUser.create({
            userName,
            userEmail,
            userPassword: hasedPassword
        }) 

        if(user){
           res.status(201).json({
                _id: user.id,
                userName: user.userName,
                userEmail: user.userEmail
            }) 
        }
        else{
            res.status(400)
            throw new Error('No se pudiero guardar los datos')
        }
    }
})

const loginUser = asyncHandler(async (req,res) =>{

})

const dataUser = asyncHandler(async (req,res) => {
    const usuarios = await modelUser.find()
    res.status(200).json(usuarios)
})
/*const updateUsuarios = asyncHandler(async (req,res)=>{
    const user = await modelUser.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('Usuario no encontrado')
    }

    const userUpdated = await modelUser.findByIdAndUpdate(req.params.id, req.body,{ new: true})

    res.status(200).json(userUpdated)
})

const deleteUsuarios = asyncHandler(async (req,res)=>{
    const user = await modelUser.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('Usuario no encontrado')
    }

    await user.deleteOne()

    res.status(200).json({id: req.params.id})
})*/

module.exports = {
registrarUser,
loginUser,
dataUser
}