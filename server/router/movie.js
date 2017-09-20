const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.get('/movie',(req, res) =>{
	Movie.find({})
	     .sort({update_at: -1})
	     .then(movies => {
	     	res.json(movies)
	     })
	     .catch(err => {
	     	res.json(err)
	     })
})

router.get('/movie/:id', (req, res) => {
	Movie.findById(req.params.id)
	     .then(movie => {
	     	res.json(movie)
	     })
	     .catch(err => {
	     	res.json(err)
	     })
})

router.post('/movie', (req, res) =>{
	Movie.create(req.body, (err, movie) => {
		if(err){
			res.json(err)
		}else{
			res.json(movie)
		}
	})
})

router.put('/movie/:id', (req,res) => {
	Movie.findOneAndUpdate({_id: req.params.id}
		,{$set:{ title: req.body.title,
		  rating: req.body.rating,
		  poster: req.body.poster,
		  introduction: req.body.introduction}
		},{
			new: true
		})
		.then(movie => res.json(movie))
		.catch(err => res.json(err))
})

router.delete('/movie/:id', (req,res)=>{
	Movie.findOneAndRemove({_id: req.params.id})
	     .then(movie => res.send(movie.title + ' deleted'))
	     .catch(err => res.json(err))
})

module.exports = router

