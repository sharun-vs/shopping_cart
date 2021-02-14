const Item = require('../../models/item');
const { transformItem } = require('./merge');

module.exports = {
	items: async () => {
		try {
			const items = await Item.find();
			return items.map(item => {
				return transformItem(item);
			});
		}catch (err) {
			throw err;
		}
	},
	createItem: async (args, req) => {
		const item = new Item({
			title: args.itemInput.title,
			brand: args.itemInput.brand,
			description: args.itemInput.description,
			price: +args.itemInput.price,
			seller: '60297b0c67748c5fc3831748'  //userId has to be get dyanamically from request

		});
		let createdItem;
		try {
			const result = await item.save();
			createdItem = transformItem(item);
			const seller = await User.findById('60297b0c67748c5fc3831748'); ////userId has to be get dyanamically from request
			console.log(seller)

			if (!seller) {
				throw new Error('user not found.');
			}
			seller.sellingItems.push(item);
			await seller.save

			return createdItem;
			}
			catch (err) {
				throw err;
			}

	}
};