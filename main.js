const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Healthy endpoint'
  })
})

app.listen(PORT, () => {
  console.log(`Listening to port *:${PORT}. Press ctrl + c to cancel.`)
})
