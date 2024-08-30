const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port =  5001 || process.env.PORT

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/productos', require('./routes/productosRoutes'))
app.use('/api/pedidos', require('./routes/pedidosRoutes'))
app.use('/api/usuarios', require('./routes/usuariosRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en ${port}`))