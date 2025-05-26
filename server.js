const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./authRoutes');
const propertyRoutes = require('./propertyRoutes');
const messageRoutes = require('./messageRoutes');
const enquiryRoutes = require('./enquiryRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api', authRoutes);
app.use('/api', propertyRoutes);
app.use('/api', messageRoutes);
app.use('/api', enquiryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
