var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
const Task = require('../models/Task')
/**
 * Ajout de tache
 */
router.post('/', async (req, res, next) => {
    const task = new Task({
        name: req.body.title,
        isFinish: false
    })
   
    try{
        const savedTask = await task.save()
        res.json(savedTask)
    }catch(err){
        res.json({message:err})
    }
})

module.exports = router