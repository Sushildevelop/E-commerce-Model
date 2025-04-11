const {Cartitems}=require('../models')

const createMapper=async(req,res)=>{
    try {
        const userId=req.user.id
        const {cartId, productId}=req.body

        const createMap=await Cartitems.create({
            userId,cartId,productId
        })

        if(!createMap){
            return res.status(501).json({error:error.message})
        }

        return res.status(200).json(createMap)



    } catch (error) {
        return res.status(400).json({error:error.message})
        
    }
}


module.exports={createMapper}