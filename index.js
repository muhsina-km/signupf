const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// In-memory storage for user data (replace with a database in a real-world scenario)
const users = [];

// Endpoint for handling user sign-up
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation - ensure all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Check if the username or email is already in use
  if (users.some(user => user.username === username || user.email === email)) {
    return res.status(400).json({ error: 'Username or email already in use.' });
  }

  // Store user data (replace with database insertion)
  users.push({ username, email, password });

  // Respond with success message
  res.status(201).json({ message: 'User successfully signed up.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
