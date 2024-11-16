// backend/config/razorpayConfig.js
const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: 'ENTER_YOUR_KEYID', // Replace with your Razorpay key
  key_secret: 'ENTER_YOU_KEY_ID', // Replace with your Razorpay secret
});

module.exports = razorpayInstance;
