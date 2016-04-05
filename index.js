var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    usersCtrl = require('./controllers/UsersCtrl.js'),
    port = 9001,
    mongoUri = 'mongodb://localhost:27017/ntigo';

app.use(cors(), bodyParser.json(), express.static(__dirname + '/public'));

app.post('/api/users', usersCtrl.addUser);
app.get('/api/user', usersCtrl.getUser);
app.get('/api/user/:id', usersCtrl.getUserById);
app.get('/api/users', usersCtrl.getUsers);
app.put('/api/user/:id', usersCtrl.updateUser);


mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ' + mongoUri);
});


app.listen(port, function() {
  console.log('Listening on ' + port);
});
