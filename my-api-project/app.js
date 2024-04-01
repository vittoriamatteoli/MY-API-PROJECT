const express = require('express')
const app = express()

const hostname = '127.0.0.1'
const port = 8000
const jsonData = [
  {
    _id: '660984546d4ef9001031dd9e',
    message: 'Is it still working?',
    hearts: 0,
    createdAt: '2024-03-31T15:42:12.595Z',
    __v: 0,
  },
  {
    _id: '660982e66d4ef9001031dd9d',
    message: 'Happiness is a working code',
    hearts: 0,
    createdAt: '2024-03-31T15:36:06.402Z',
    __v: 0,
  },
  {
    _id: '660982b26d4ef9001031dd9c',
    message: 'Happiness is cultivated by a joyful attitude',
    hearts: 0,
    createdAt: '2024-03-31T15:35:14.222Z',
    __v: 0,
  },
  {
    _id: '6609829a6d4ef9001031dd9b',
    message: 'Soy feliz',
    hearts: 0,
    createdAt: '2024-03-31T15:34:50.003Z',
    __v: 0,
  },
  {
    _id: '6609821a6d4ef9001031dd9a',
    message: 'Happy',
    hearts: 0,
    createdAt: '2024-03-31T15:32:42.961Z',
    __v: 0,
  },
]

app.use(express.json())

app.get('/', (req, res) => {
  res.json(jsonData)
})

app.post('/', (req, res) => {
  const postRequestData = req.body
  jsonData.push(postRequestData)
  // res.end()
})
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
