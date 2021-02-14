const Item = require('../../models/item');
const Cart = require('../../models/cart');
const User = require('../../models/user')

module.exports = {
	createCart: async ({ email, itemId}) => {   //because of no authentication cart is created for manually given users(email)
		const user = await User.findOne({email: email});
		if (!user) {
			throw new Error("no user found with given email");
		}
		const selectedItem = await Item.findOne({itemId: itemId});
		const cart = new Cart({
			user = user.id,
			items = items.push(selectedItem)
		});
		const result = await cart.save();
		return transformCart(result);
	},
	viewCart: async({ userId }) => {
		const cart = Cart.findOne({userId: userId});
	if (!cart) {
		throw new Error("Cart is empty.");
	}
	return transformCart(cart);
};