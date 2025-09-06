import CartModel from "../Model/Cart.model.js";   
import ProductModel from "../Model/Products.model.js"; 

// 1. Fetch all cart items for a user
export async function fetchCart(req, res) {
  try {
    const { userId } = req.params;   
    const cartItems = await CartModel.find({ userId }); 
    res.status(200).json(cartItems); 
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart" });
  }
}

// 2. Add product to cart
export async function addtoCart(req, res) {
  try {
    const { productId, quantity, userId } = req.body; 

    
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Create a new cart item
    const cartItem = await CartModel.create({
      productId,
      quantity: quantity ,  
      userId,
    });

    res.status(201).json(cartItem);  
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart"});
  }
}

// 3. Delete an item from cart
export async function deleteItem(req, res) {
  try {
    const { id } = req.params;  

    const deleted = await CartModel.findByIdAndDelete(id); // Delete the document
    if (!deleted) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting item"});
  }
}

// 4. Update quantity in cart
export async function ChangeCart(req, res) {
  try {
    const { id } = req.params;       
    const { quantity } = req.body;   

    const updated = await CartModel.findByIdAndUpdate(id,{ quantity },{ new: true });

    if (!updated) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating cart" });
  }
}
