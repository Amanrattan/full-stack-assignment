const express = require('express')
const app = express()
const port = 3000

app.post('/signup', function(req, res)  {
    //add logic to decode body
    //body should have user email and password

    //store email & password (asis for now in the) in the users array above (only if the user with gice emil doesnt work)
  res.send('Hello World!')
})


app.post('/login', function(req, res)  {
  res.send('Hello World from route 2')
})


app.get('/question', function(req, res)  {
  res.send('<html><body><h1 style="color:red;">chat</h1></body></html>')
})

app.get('/submission', function(req, res)  {
  res.json({
    name : 'John',
    age: 30
  })
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})