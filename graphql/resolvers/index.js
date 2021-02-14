const userResolver = require('./user');
const itemResolver = require('./item');

const rootResolver = {
	...userResolver,
	...itemResolver
};

module.exports = rootResolver;
