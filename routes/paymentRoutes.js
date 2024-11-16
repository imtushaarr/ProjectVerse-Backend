const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();
const Project = require('../models/projectModel'); // Import your project model

const razorpay = new Razorpay({
  key_id: 'ENTER_YOUR_KEY_ID',
  key_secret: 'ENTER_YOUR_KEY_SECRET',
});

router.post('/:projectId', async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findById(projectId); // Fetch project from DB
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const amount = project.price * 100; // Convert to paise
    const currency = 'INR';

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: `order_rcptid_${projectId}`,
      notes: {
        project_name: project.name,
      },
    });

    res.json({
      success: true,
      orderId: order.id,
      amount,
      currency,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: 'Error creating payment order' });
  }
});

module.exports = router;
