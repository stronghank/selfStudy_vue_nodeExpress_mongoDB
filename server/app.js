const express = require('express');
const app = express();
const index = require('./router/index')

app.use('/', index)

app.listen(3000,() => {
	console.log('server listening on port 3000.');
})


module.exports = app