const { Carts, Products } = require('../models');

const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user?.id; 

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not found' });
    }

    // const product = await Products.findByPk(productId);
    // if (!product) {
    //   return res.status(404).json({ error: 'Product not found' });
    // }

    const cartItem = await Carts.create({ userId, productId });

    res.status(201).json(cartItem);

  } catch (error) {
    console.error('Real Error:', error); // 🔥 print full error in console
    res.status(500).json({ error: error.message });
  }
};



module.exports = { addToCart };
