require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) =>{
    res.send('https://x/pritlmao.com')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login here</h1>')
}) 
app.get('/youtube',(req,res)=>{
    res.send('<h2>pritlmao </h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})