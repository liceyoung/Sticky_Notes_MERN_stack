const express = require('express')
const app =express ()
const path = require ('path')
const PORT = process.env.PORT || 3500
//set what port we are running in the server-> place PORT in .env enviroment -> run in locally at port 3500

app.use('/', express.static(path.join(__dirname, '/public')))
// dirname is global variable that node.js understand -> look inside to current folder that we are in by "/public"

app.use('/', require('./routes/root'))

app.all('*',(req,res)=> {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: "LOL, I am sorry hehe"})
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`))



