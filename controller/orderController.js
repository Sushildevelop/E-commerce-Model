const {Orders}=require('../models')

const createOrder=async(req,res)=>{
    try {
        const userId=req.user.id
        const {cart_id,total_amount,order_date,shipping_address}=req.body

        const createor=await Orders.create({
            userId, cart_id,total_amount,shipping_address
        })

        if(!createor){
            return res.status(501).json("Order is not created")
        }
        return res.status(200).json(createor)

        

    } catch (error) {
        return  res.status(400).json({error:error.message})
        
    }
}


const placeOrder=async(req,res)=>{
    const userId=req.user.id;
    const {cart_id}=req.body
    const placeor=await Orders.findOne({
        where:{id:cart_id,userId}
    })
    if(!placeor){
        return res.status(501).json("Order is not created")
    }
    const total_amount=400
    const shipping_address="C-block Noida sector 66"

    const createOr=await Orders.create({
        cart_id:cart_id,
        userId:userId,
        total_amount,
        shipping_address
    })
    return res.status(200).json(createOr)
}
module.exports={createOrder,placeOrder}

