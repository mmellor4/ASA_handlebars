var express = require('express');

var app = express();

var PORT = 1337;

var handlebars = require('express-handlebars').create({
	defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express(__dirname + '/public'));
app.use(express.static('public/gallery'));
app.use(express.static('public/img'));
app.use(express.static('public/eboard'));
app.use(express.static('public/data'));
app.use(express.static('public/js'));

app.get('/', function(request, response){
	response.render('index');
});

app.get('/index', function(request, response){
	response.render('index');
});

app.get('/about', function(request, response){
	response.render('about');
});

app.get('/photos', function(request, response){
	response.render('photos');
});

app.get('/past', function(request, response){
	response.render('past');
});

app.get('/upcoming', function(request, response){
	response.render('upcoming');
});

app.get('/brickleys', function(request, response){
	response.render('brickleys');
});

app.get('/craftday', function(request, response){
	response.render('craftday');
});

app.get('/farmersdaughter', function(request, response){
	response.render('farmersdaughter');
});

app.get('/halloween', function(request, response){
	response.render('halloween');
});

app.get('/musicalchairs', function(request, response){
	response.render('musicalchairs');
});

app.get('/savethebay', function(request, response){
	response.render('savethebay');
});

app.get('/scaryacers', function(request, response){
	response.render('scaryacers');
});

app.get('/winterformal', function(request, response){
	response.render('winterformal');
});

app.use(function(request, response){
	response.status(404);
	response.render('404', {title: "Page not found"});
});

app.use(function(request, response){
	response.status(500);
	response.render('500', {title: "Server Error"});
});

app.listen(PORT, function(){
	console.log('Express started on http://localhost:' + PORT + ' press cntrl+c to quit');
})




