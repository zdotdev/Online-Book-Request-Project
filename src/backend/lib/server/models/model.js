import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a Title'],
    unique: false
  },
  author: {
    type: String,
    required: [true, 'Please enter an Author'],
    unique: false
  },
  publisher: {
    type: String,
    required: [true, 'Please enter a Publisher'],
    unique: false
  },
  ISBN: {
    type: String,
    required: [true, 'Please enter an ISBS'],
    unique: false
  },
  edition: {
    type: String,
    required: [true, 'Please enter an Edition'],
    unique: false
  },
  description: {
    type: String,
    required: [true, 'Please enter a description'],
    unique: false
  }
})

export default mongoose.model('Book', bookSchema)
