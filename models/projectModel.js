const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // Stores the image path
    required: false, // Optional if image is not provided
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;