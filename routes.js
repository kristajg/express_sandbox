
/*
 * Routes for site
 */

module.exports = function (app) {
	app.get('/', function(req, res){
	  res.render('index', { title: 'Home' });
	});

	app.get('/about', function(req, res){
	  res.render('about', { title: 'About' });
	});
}