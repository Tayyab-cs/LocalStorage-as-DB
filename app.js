const express = require('express')
const app = express()

const controller = require('./controller/controller.js')

app.use(express.json())

app.post('/create', controller.create)
app.get('/getAll', controller.getAll)
app.patch('/update', controller.update)
app.delete('/delete', controller.del)

app.listen('3001', () => {
  console.log('Server is running on port 3001')
})
