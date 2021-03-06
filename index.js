var express = require('express'),
  app = express(),
  port = 3000,
  bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//These two lines allow use to acces the request body that comes in a put/post
//request
app.use(express.static(__dirname + '/views'))
//lets us display  static static pages
app.use(express.static(__dirname + '/public'))
//lets us display  static static pages


app.get('/', function(req,res){
res.sendFile('index.html');
})

app.use('/apis/todos', todoRoutes);
// making use of routes from the ./routes/todos file
// also prefix

app.listen(port, function(){
  console.log("App is running on local host 3000");
})
