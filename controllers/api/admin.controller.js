var express = require('express');
var User = require('./../../models/user');
var router = express.Router();


router.route('/admin/user')

	.get(function(req, res) {
		User.find(function(err, users) {
			if (err)
				res.send(err);

			res.json(users);
		});
	})

	.post(function(req, res) {

		var user = new User();
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		user.userName = req.body.userName;


		user.save(function(err) {
			console.log('Save....');

			if (err)
				res.send(err);

			res.json({ message: 'User Created.'});
		});
	});

router.route('/admin/user/:userName')
	
	.get(function(req, res) {
		User.findOne({userName: req.params.userName}, function(err, user) {
			if (err)
				res.send(err);
			res.json(user);
		});
	})

	.put(function(req, res) {

	})

	.delete(function(req, res) {

	});

module.exports = router;