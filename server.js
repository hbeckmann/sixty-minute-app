var express = require('express');
var app = express();
var Firebase = require('firebase');
var ref = new Firebase('https://sixtyminapp.firebaseio.com/messages');
var bodyParser = require('body-parser');


app.use(express.static('source'));
app.use(express.static('node_modules/angular'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));

app.get('/messages', function(req, res) {
  ref.once("value", function(snapshot){
    var messages = snapshot.val();
    res.send(messages);
  })

});

app.post('/messages', function(req, res) {
  console.log(req.body.message);
  ref.push({'message': req.body.message});
  res.send('success!');
});

app.listen(8000);
console.log('Server started on 8000');
