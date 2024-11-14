const mongoose = require('mongoose');
const Project = require('./models/projectModel'); // Adjust the path if needed

mongoose.connect('mongodb://localhost:27017/projectverse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  return Project.find(); // Query all projects
}).then(projects => {
  console.log(projects); // Log the fetched projects
}).catch((err) => {
  console.error('Error:', err);
});