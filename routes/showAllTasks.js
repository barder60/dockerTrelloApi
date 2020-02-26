var express = require('express')
var router = express.Router()
const Task = require('../models/Task')
/**
 * Resquest partie
 */
router.get('/', async (req, res, next) => {
    const tasks = await Task.find();
        console.log(tasks)
        res.send(tasks)
    /*try{
        
      } catch(error){
        res.status(500).send(error)
      }*/
})

module.exports = router