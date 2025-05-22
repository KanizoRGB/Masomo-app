const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

// Middle ware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define a schema for the contact form
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  // Add a date field to store the submission date
  date: { 
    type: Date, 
    default: Date.now 
    }
  
});


// Create a model for the contact form
const Contact = mongoose.model('Contact', contactSchema);


// Define a route to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a new contact form entry
  const newContact = new Contact({
    name,
    email,
    subject,
    message
  });

  try {
    await newContact.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
