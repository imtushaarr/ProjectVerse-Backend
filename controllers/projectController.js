const Project = require('../models/projectModel');

const createProject = async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.path : null; // Get image path from multer upload

  try {
    const newProject = new Project({ name, description, price, image });
    await newProject.save();
    res.status(201).json({ message: 'Project created', project: newProject });
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
  }
};

module.exports = { createProject };