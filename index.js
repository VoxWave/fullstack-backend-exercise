const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

let numbers = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '045-1236543'
  },
  {
    id: 2,
    name: 'Arto Järvinen',
    number: '045-21423123'
  },
  {
    id: 3,
    name: 'Lea Kutvonen',
    number: '040-4323234'
  },
  {
    id: 4,
    name: 'Martti Tienari',
    number: '09-784232'
  },
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(numbers)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const number = numbers.find(number => number.id === id)
  if (number) {
    res.json(number)
  } else {
    res.status(404).end()
  }
})

const generateId = (range) => Math.floor(Math.random()*Math.floor(range))

app.post('/api/persons', (req, res) => {
  const body = req.body
  let error = ''
  if (body.name === undefined) {
    error = 'name missing'
  } else if (body.number === undefined) {
    error = 'number missing'
  } else if (numbers.find(number => number.name === body.name) !== undefined) {
    error = 'person already exists'
  }
  if (error.length) {
    return res.status(400).json({
      error: error
    })
  }
  const number = {
    id: generateId(10000000000),
    name: body.name,
    number: body.number,
  }
  numbers = numbers.concat(number)
  res.json(number)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  numbers = numbers.filter(number => number.id !== id)
  res.status(204).end()
})

app.get('/info', (req, res) => {
  res.send(`<div>Puhelinluettelossa ${numbers.length} henkilön tiedot</div><div>${new Date()}</div>`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})