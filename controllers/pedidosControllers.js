const asyncHandler = require('express-async-handler')
const modelPedidos = require('../models/pedidosModel')

const getPedidos = asyncHandler(async (req,res) => {
    const pedidos = await modelPedidos.find()
    res.status(200).json(productos)
})

const createPedidos = asyncHandler(async (req,res)=>{
    if(!req.body.productName && !req.body.productDescription && !req.body.productPrice && !req.body.productStock){
        return res.status(400).json({
            message: "Favor de ingresar datos"
        })
    }
    const pedidos = await modelProduct.create({
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
        productStock: req.body.productStock
    })
    res.status(201).json(pedidos)
})

const updatePedidos = asyncHandler(async (req,res)=>{
    const product = await modelProduct.findById(req.params.id)

    if(!product){
        res.status(400)
        throw new Error('Producto no encontrado')
    }

    const productUpdated = await modelProduct.findByIdAndUpdate(req.params.id, req.body,{ new: true})

    res.status(200).json(productUpdated)
})

const deletePedidos = asyncHandler(async (req,res)=>{
res.status(200).json({message:`Eliminar la pedido con id: ${req.params.id}`})
})

module.exports = {
getPedidos,
createPedidos,
updatePedidos,
deletePedidos
}