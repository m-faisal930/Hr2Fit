const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/User.js');
dotenv.config();

const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  const user = new User({ email, password, role });
  await user.save();
  res.json({ message: 'User created' });
});


// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  if (user.role !== 'admin') {
    return res.status(403).json({ message: 'Not an admin' });
  }
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '4h' }
  );
  res.json({ token });
});

module.exports = router;