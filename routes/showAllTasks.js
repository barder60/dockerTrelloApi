var express = require('express')
var router = express.Router()
const Task = require('../models/Task')
/**
 * Resquest partie
 */
router.get('/', async (req, res, next) => {
    try{
        //const tasks = await Task.find();
        res.send([{
            name:"toto",
            isFinish: true
        }])
      } catch(error){
        res.status(500).send(error)
      }
})

module.exports = router