const asyncHandler = require('express-async-handler')
const modelProduct = require('../models/productosModel')

const getProductos = asyncHandler(async (req,res) => {
    const productos = await modelProduct.find()
    res.status(200).json(productos)
})

const createProductos = asyncHandler(async (req,res)=>{
    if(!req.body.productName && !req.body.productDescription && !req.body.productPrice && !req.body.productStock){
        return res.status(400).json({
            message: "Favor de ingresar datos"
        })
    }
    const product = await modelProduct.create({
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
        productStock: req.body.productStock
    })

    res.status(201).json(product)
})

const updateProductos = asyncHandler(async (req,res)=>{
    const product = await modelProduct.findById(req.params.id)

    if(!product){
        res.status(400)
        throw new Error('Producto no encontrado')
    }

    const productUpdated = await modelProduct.findByIdAndUpdate(req.params.id, req.body,{ new: true})

    res.status(200).json(productUpdated)
})

const deleteProductos = asyncHandler(async (req,res)=>{
    const product = await modelProduct.findById(req.params.id)

    if(!product){
        res.status(400)
        throw new Error('Producto no encontrado')
    }

    await product.deleteOne()

    res.status(200).json({id: req.params.id})
}) 

module.exports = {
    getProductos,
    createProductos,
    updateProductos,
    deleteProductos
}