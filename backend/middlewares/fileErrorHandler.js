const fileErrorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Handle Multer errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      success: false,
      error: 'File size too large. Maximum 5MB allowed',
    });
  }

  if (err.message === 'Only PDF files are allowed') {
    return res.status(400).json({
      success: false,
      error: 'Only PDF files are allowed',
    });
  }

  // Default error handler
  res.status(500).json({
    success: false,
    error: 'Something went wrong on the server',
  });
};

module.exports = fileErrorHandler;
