const mongoose = require('mongoose');

// MongoDB connection URL
const dbUrl = 'mongodb://127.0.0.1:27017/Atg-World';

// Connect to MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });