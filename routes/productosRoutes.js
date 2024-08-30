const express = require('express')
const { getProductos, createProductos, updateProductos,deleteProductos } = require('../controllers/productosControllers')
const router = express.Router()

router.get('/',getProductos)

router.post('/',createProductos)

router.put('/:id',updateProductos)

router.delete('/:id',deleteProductos)

module.exports = router