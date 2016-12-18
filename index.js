/**
 * Created by Mello on 17.12.2016.
 */

// Express init. framework
var express = require('express');

// Express setup
var app = express();

app.set('port', (process.env.PORT || 5000));

// Where root (server) is located. Needed when including stylesheets and scripts in jade files (template language)
app.use(express.static(__dirname + '/public'));

// Fullpage.js localization.
app.use('/static', express.static(__dirname + '/node_modules/fullpage.js/dist'));




app.set('views', __dirname + '/views');
// Template engine
app.set('view engine', 'jade');

// Index route
app.get('/', function(req, res, next){
   res.render('index', {
      title: "The Front Page",
      name: "Martin Engen"
   });
});

var cool = require('cool-ascii-faces');
app.get('/smile', function(request, response){
   response.send(cool());
});


app.listen(app.get('port'), function(){
   console.log('Node app is running on port', app.get('port'));
});