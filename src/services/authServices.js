const User = require("../models/User");

module.exports = {
	async signup(req) {
		const user = await User.create({
			username: req.body.username,
			password: req.body.password,
			email: req.body.password,
		});
		return user;
	},

	// async login(req) {
	// 	const user = await User.findOne({ username: req.body.username }).select(
	// 		"+password"
	// 	);
	// 	console.log(
	// 		await user.isValidPassword(req.body.password, user.password)
	// 	);
	// },
};