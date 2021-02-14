const User = require('../../models/user');
const Items = require('../../models/item');

const items = async itemIds => {
	try {
		const items = await Item.find({_id: {$in: itemIds }});
		return items.map(item =>{
			return transformItem(item);
		});
	} catch (err) {
		throw err;
	}
};

const user = async userId => {
	try {
		const user = await User.findOne(userId);
		return {
			...user._doc,
			_id: user.id,
			sellingItems: items.bind(this, user._doc.createdItems)
		};
	} catch (err) {
		throw err;
	}
};

const singleItem = async itemId => {
	try {
		const item = await Item.findOne(itemId);
		return transformItem(item);
	}
	catch (err) {
		throw err;
	}
}
const transformItem  = item => {
	return {
		...item._doc,
		_id: item.id,
		seller: user.bind(this, item.seller)
	};
};

const transformCart = cart => {
	return {
		...cart._doc,
		_id: cart.id,
		user: user.bind(this, cart._doc.user),
		item: singleItem.bind(this, cart._doc.item)
	};
};

exports.transformItem = transformItem;