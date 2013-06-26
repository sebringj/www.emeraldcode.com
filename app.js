var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	engine = require('ejs-locals');

var app = express();
app.use(function(req, res, next) { 
  if(req.headers.host === 'emeraldcode.com') { 
    res.writeHead(303, {'Location': 'http://www.emeraldcode.com'+req.url}) 
    res.end() 
  } 
});
app.configure(function() {
	app.engine('ejs', engine);
	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/views');
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
});

routes.set(app);

app.listen(process.env.EC_PORT || process.env.PORT || 3000);
