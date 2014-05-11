var express = require('express'),
  http = require('http'),
  path = require('path'),
  ejs = require('ejs');
  
var app = express();

// all environments
app.engine('html', ejs.renderFile);
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/*', function(req, res){
    res.render('index.html');
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
