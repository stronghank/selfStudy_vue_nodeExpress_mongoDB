const express = require('express');
const app = express();
const index = require('./router/index')
const movie = require('./router/movie')
const mongoose = require('mongoose')
const config = require('../config/db')
const bodyParser = require('body-parser')

mongoose.connect(config.mongodb)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', index)
app.use('/api', movie)

app.listen(3000,() => {
	console.log('server listening on port 3000.');
})


module.exports = app 