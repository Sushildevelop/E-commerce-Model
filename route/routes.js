const express=require('express')
const { createUser, userlogin, getToken } = require('../controller/userController')
const upload = require('../middleware/upload')
const { authorization } = require('../middleware/authToken')
const { createproduct, updateProduct, deleteproduct, getProduct } = require('../controller/productController')
const { addToCart } = require('../controller/cartController')
const { createOrder, placeOrder } = require('../controller/orderController')

const router=express.Router()
// User routes

router.post('/register',upload.single("image"),createUser)

router.post('/login',userlogin)
router.get('/gettoken',authorization,getToken)


// Product
router.post('/createpro',upload.single('image'),authorization,createproduct)
router.put('/update/:id',authorization,updateProduct)
router.delete('/delete/:id',authorization,deleteproduct)
router.get('/getpro',authorization,getProduct)


// Cart
router.post('/createcart',authorization,addToCart)


//Order

router.post('/createOrder',authorization,createOrder)
router.post('/placeorder',authorization,placeOrder)


module.exports={router}