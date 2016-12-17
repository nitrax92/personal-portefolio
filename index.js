/**
 * Created by Mello on 17.12.2016.
 */

console.log("Hello, there..");

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

var cool = require('cool-ascii-faces');
app.get('/', function(request, response){
   response.send(cool());
});


app.listen(app.get('port'), function(){
   console.log('Node app is running on port', app.get('port'));
});