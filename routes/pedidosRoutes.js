const express = require('express')
const { getPedidos, createPedidos, updatePedidos,deletePedidos } = require('../controllers/pedidosControllers')
const router = express.Router()

router.route('/').get(getPedidos).post(createPedidos)
router.route('/:id').put(updatePedidos).delete(deletePedidos)

/*
router.get('/',getPedidos)

router.post('/',createPedidos)

router.put('/:id',updatePedidos)

router.delete('/:id',deletePedidos)
*/

module.exports = router