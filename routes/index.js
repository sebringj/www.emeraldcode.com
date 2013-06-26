module.exports.set = function(app) {
	app.get('/', function(req, res, next){
		res.render('index', { 
			host : req.headers.host,
			title : 'Emerald Code',
			description: 'custom eCommerce for Netsuite, Hubsoft, nopCommerce'
		});
	});
	app.get('/portfolio', function(req, res, next) {
		res.render('portfolio', { 
			title : 'Emerald Code Portfolio',
			description: 'our work from the past 4 years'
		});
	});
	app.get('/services', function(req, res, next) {
		res.render('services', { 
			title : 'Emerald Code Services',
			description: 'a list of Emerald Code services'
		});
	});
	app.get('/pricing', function(req, res, next) {
		res.render('pricing', { 
			title : 'Emerald Code Pricing',
			description: 'a pricing guide / overview'
		});
	});
	app.get('/about-us', function(req, res, next) {
		res.render('about-us', { 
			title : 'Emerald Code About Us',
			description: 'all about the crew'
		});
	});
	app.get('/contact-us', function(req, res, next) {
		res.render('contact-us', { 
			title : 'Emerald Code Contact Us',
			description: 'use our contact form or just call us'
		});
	});
	app.get('/blog', function(req, res, next) {
		res.render('blog', { 
			title : 'Emerald Code Blog',
			description: 'the latest news from Emerald Code'
		});
	});
	app.post('/email', function (req, res) {
		var email = require('../lib/email.js');
		email.send({
		    from: "noreply@emeraldcode.com",
		    to: "jason.sebring@emeraldcode.com",
		    subject: req.body.subject, 
		    html: req.body.html
		}, function(data) {
			res.json(data);
		});
	});
	
	// 404
	app.use(function(req, res, next){
	  res.status(404);

	  // respond with html page
	  if (req.accepts('html')) {
	    res.render('404', {
			title : 'Emerald Code 404',
			description: 'The page you requested could not be found'
		});
	    return;
	  }

	  // respond with json
	  if (req.accepts('json')) {
	    res.send({ error: 'Not found' });
	    return;
	  }

	  // default to plain-text. send()
	  res.type('txt').send('Not found');
	});
};