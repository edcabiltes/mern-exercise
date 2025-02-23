const express = require('express')

const router = express.Router()

// GET all
router.get('/', (req, res) => {
    res.json({message: 'GET all workouts'})
})

// GET one
router.get('/:id', (req, res) => {
    res.json({message: `GET workout with id ${req.params.id}`})
})

// POST new
router.post('/', (req, res) => {
    res.json({message: 'POST new workout'})
})

// DELETE one
router.delete('/:id', (req, res) => {
    res.json({message: `DELETE workout with id ${req.params.id}`})
})

// PATCH one
router.patch('/:id', (req, res) => {
    res.json({message: `PATCH workout with id ${req.params.id}`})
})

module.exports = router