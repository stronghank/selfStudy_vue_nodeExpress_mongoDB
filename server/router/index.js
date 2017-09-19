const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('Hello World! This is express!')
})

module.exports = router