const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send('hello world')
})


app.listen(69420, () => {
    console.log('Server up on port 69420')
})