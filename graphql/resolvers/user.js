const bcrypt = require('bcryptjs');
const User = require('../../models/user');

module.exports = {
	createUser: async args => {
		try {
			const existingUser = await User.findOne({ email: args.userInput.email });
			if (existingUser) {
				throw new Error('user exists already.');
			}
			const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
			const user = new User({
				email: args.userInput.email,
				username: args.userInput.username,
				password: hashedPassword
			});

			const result = await user.save();
			return { ...result._doc, password: null, _id:result.id };
		}catch (err) {
			throw err;
		}
	},

	login: async ({ email, password }) => {
		const user = await User.findOne({email:email});
		if (!user) {
			throw new Error("user not found.");
		}
		const checkPaswd = await bcrypt.compare(password, user.password);
		if (!checkPaswd) {
			throw new Error("passwords does not match");
		}
		return {...user._doc}
	}
};