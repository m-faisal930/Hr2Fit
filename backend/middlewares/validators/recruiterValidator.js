const { body } = require('express-validator');

exports.validateRecruiterRegistration = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Full name must be between 2-50 characters'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email'),

  body('linkedInProfile')
    .trim()
    .notEmpty()
    .withMessage('LinkedIn profile is required')
    .matches(/https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?/)
    .withMessage('Please enter a valid LinkedIn profile URL'),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .isMobilePhone()
    .withMessage('Please enter a valid phone number'),

  body('yearsOfExperience')
    .notEmpty()
    .withMessage('Years of experience is required')
    .isIn(['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'])
    .withMessage('Invalid years of experience selected'),

  body('preferredTimezone')
    .notEmpty()
    .withMessage('Preferred timezone is required')
    .isIn([
      'EST (Eastern Time)',
      'CST (Central Time)',
      'PST (Pacific Time)',
      'GMT (Greenwich Mean Time)',
      'CET (Central European Time)',
      'IST (Indian Standard Time)',
      'Other',
    ])
    .withMessage('Invalid timezone selected'),

  body('howDidYouHear')
    .notEmpty()
    .withMessage('Source is required')
    .isIn([
      'LinkedIn',
      'Referral',
      'Google Search',
      'Social Media',
      'Job Board',
      'Other',
    ])
    .withMessage('Invalid source selected'),

  body('termsAgreed')
    .custom((value) => value === 'true')
    .withMessage('You must agree to the terms and conditions'),
];
