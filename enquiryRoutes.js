const express = require('express');
const router = express.Router();

router.post('/enquiry', async (req, res) => {
  const { name, dob, address } = req.body;
  try {
    // Implement saving in a DB or handle the enquiry data appropriately
    console.log(`Enquiry Received: ${name}, ${dob}, ${address}`);
    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to handle enquiry' });
  }
});

module.exports = router;