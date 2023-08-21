const express = require('express')
const router = express.Router ()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res)=> {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router 
// To understand this, read about Regex --> regexone.com
// get request that relates directly back to our HTTP methods 
// express can recognize Regex: matching types patterns 