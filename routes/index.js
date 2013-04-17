module.exports.set = function(app) {
	app.get('/', function(req,res,next){
		res.render('index', { 
			title : 'Emerald Code',
			description: 'custom eCommerce for Netsuite and Hubsoft'
		});
	});
};