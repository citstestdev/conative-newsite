var createError = require('http-errors');
const express = require('express'); 
const path = require('path');
const app = express(); //Line 2
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000; //Line 3


var indexRouter = require('./routes/index');
// view engine setup
app.set('template', path.join(__dirname, 'template'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.use('/', indexRouter);
app.use('/hello', indexRouter);
app.use('/home-show', indexRouter);

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

app.get('/https://jsonplaceholder.typicode.com/posts', (req, res) => { //Line 9
  console.log("ggg",res); //Line 10
});