const express = require('express')
const Workout = require('../models/workoutModel')

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
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
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