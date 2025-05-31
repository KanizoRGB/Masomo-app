const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

// Middle ware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
//Url for cloud MongoDB Atlas 'mongodb+srv://<db_username>:<db_password>@cluster0.aknj2.mongodb.net/contactform?retryWrites=true&w=majority'
// For local MongoDB use 'mongodb://localhost:27017/contactform'
mongoose.connect('mongodb+srv://tarajimasomo:ywLgC0MI3KD6yGy6@cluster0.aknj2.mongodb.net/contactform', {
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


//Define a schema for users
const userSchema = new mongoose.Schema({
  username: String,
  email: {type: String, unique: true},
  password: String,
  
});

// Create a model for the users
const User = mongoose.model('User', userSchema);

//Create a Schema for courses
const courseSchema = new mongoose.Schema({
  country: String,
  title: String,
  level: String,
  fees: Number,
});
// Create a model for the courses
const Course = mongoose.model('Course', courseSchema);

//Route to handle user registration
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    try {
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user' });
    }
  });

  app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    else if (!await bcrypt.compare(password, user.password)) {
      res.status(400).json(message = 'Invalid credentials');
    }
    else {
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', user: { username: user.username, email: user.email } });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  } 
});

// Middleware to protect routes
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.id;
    next();
  });
};




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

//Define a route to get all form submissions
app.get('/api/contacts',authenticate, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 }); // Sort by date in descending order
    // You can also limit the number of contacts returned if needed
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

//Define a route to enter courses
app.post('/api/courses', async (req, res) => {
  const { country, title, level, fees } = req.body;

  // Create a new course entry
  const newCourse = new Course({
    country,
    title,
    level,
    fees
  });

  try {
    await newCourse.save();
    res.status(200).json({ message: 'Course added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding course' });
  }
});


//Define a route to get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find().sort({ country: 1 }); // Sort by country in ascending order
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
