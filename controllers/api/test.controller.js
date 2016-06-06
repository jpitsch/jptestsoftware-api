var express = require('express');
var Test = require('./../../models/test');
var Question = require('./../../models/question');
var router = express.Router();

router.route('/test')
	
	.get(function(req, res) {
		Test.find(function(err, tests) {
			if(err)
				res.send(err);

			res.send(tests);
		});
	})

	.post(function(req, res) {

		var test = new Test(req.body);

		test.save(function(err) {
			
			if(err)
				res.send(err);

			res.json({message: 'Test successfully created.'});
		});
	});

router.route('/test/:id')
	.get(function(req, res) {
		Test.findById(req.params.id, function(err, test) {
			if(err)
				res.send(err);
			res.json(test);
		});
	})

	.delete(function(req, res) {
		
		Test.remove({_id: req.params.id}, function(err, test) {
			if(err)
				res.send(err);

			res.json({message: 'Test successfully removed.'});
		});
		
	});


router.route('/test/:id/question')
	
	.get(function(req, res) {
		Test.findById(req.params.id, function(err, test) {
			if(err) 
				res.send(err);

			res.json(test.questions);
		});
	})

	.put(function(req, res) {
		
		var question = new Question(req.body);
		console.log("Question: " + question);

		Test.findById(req.params.id, function(err, test) {

			if(err)
				res.send(err);

			test.questions.push(question);
			
			test.save(function(err) {
				if(err)
					res.send(err);
				res.json({message: "Question Saved"});
			});
		});
	});


router.route('test/:id/question/:number')
	.get(function(req, res) {
		Test.find({'_id': req.params.id, 'questions.number': req.params.number}, function(err, test) {

			if(err)
				res.send(err);

			res.json(test);
		});
	});

module.exports = router;