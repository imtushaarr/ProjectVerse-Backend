// backend/config/razorpayConfig.js
const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: 'rzp_live_afo9xw5T1MT8gE', // Replace with your Razorpay key
  key_secret: 'sXh6989pHPrkTZwQUYz25N61', // Replace with your Razorpay secret
});

module.exports = razorpayInstance;