const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/test?retryWrites=true`

mongoose.connect(url, {
    useNewUrlParser: true,
})

const personSchema = new mongoose.Schema({
  name: String,
  id: Number,
  number: String,
})

const person = mongoose.model('person', personSchema)

const person = new person({
  name: name,
  id: generatedId(),
  number: number,
})

person.save().then(response => {
  console.log('person saved!')
  mongoose.connection.close()
})

Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })