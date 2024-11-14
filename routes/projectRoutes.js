const express = require('express');
const router = express.Router();
const multer = require('multer');
const Project = require('../models/projectModel'); // Adjust the path if needed

// Setup multer storage configuration
const upload = multer({ dest: 'uploads/' }); // Temporary storage location for uploaded files

// POST route for creating a project (with file upload)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, description, price } = req.body; // Extract other fields from the body
    const image = req.file ? req.file.path : null; // Handle file upload
    
    const newProject = new Project({
      name,
      description,
      price,
      image, // Save the file path in the database
    });

    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (err) {
    res.status(500).json({ message: 'Error creating project', error: err.message });
  }
});

// GET route to fetch all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects', error: err.message });
  }
});

module.exports = router;