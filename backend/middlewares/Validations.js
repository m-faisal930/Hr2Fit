// middleware/validation.js
const { check, validationResult } = require('express-validator');

exports.validateRecruiter = [
  check('companyName').notEmpty().withMessage('Company name is required'),
  check('contactPerson').notEmpty().withMessage('Contact person is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('phone').notEmpty().withMessage('Phone number is required'),
  check('industry').notEmpty().withMessage('Industry is required'),
  check('hiringNeeds').notEmpty().withMessage('Hiring needs are required'),
  check('companySize').notEmpty().withMessage('Company size is required'),
  check('termsAgreed').isBoolean().withMessage('You must agree to terms'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
