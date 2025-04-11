const { Products } = require("../models");



const createproduct=async(req,res)=>{
    try {
        // const error = validationResult(req)
        const {productname,price,description,stock_quantity,image,userId}=req.body
       
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
        const creatpro=await Products.create({
            productname, description,image:imagePath,stock_quantity,price,
            userId:req.user.id
        })

        if(!creatpro){
            return res.status(400).json({message:"NOT create product"})
        }

        return res.status(200).json(creatpro)


         


    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

const getProduct=async(req,res)=>{
 try {
    const getpro=await Products.findAll(
        {
            where:{userId:req.user.id}
        }
    )
    return res.status(200).json(getpro)
 } catch (error) {
    return res.status(400).json({error:error.message})
 }
}

const updateProduct=async(req,res)=>{
  try {
    const {id}=req.params
    const {productname,description,price, stock_quantity,userId}=req.body
    const updatepro= await Products.findOne({
        where :{id,userId:req.user.id}

    })
    
    updatepro.productname = productname;
    updatepro.description = description;
    await updatepro.save();
    return res.status(200).json(updatepro)

    
  } catch (error) {
    return res.status(400).json({error:error.message})
  }
}


const deleteproduct=async(req,res)=>{
  try {
    const {id}=req.params
    const deletepro=await Products.findOne({
        where:{id,userId:req.user.id}
    })
    await deletepro.destroy()
    res.json("Deleted ")
  } catch (error) {
    return res.status(400).json({error:error.message})
  }
}

module.exports={deleteproduct,updateProduct,createproduct,getProduct}