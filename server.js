var express = require('express')
var path = require('path')
var compression = require('compression')
var logger = require('morgan')

var app = express()

app.use(compression())
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public','index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Server running at localhost:' + PORT)
})

