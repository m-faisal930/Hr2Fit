const errorHandler = (err, req, res, next) => {
  // Log to console for dev
  console.error(err.stack);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      error: 'Resource not found',
    });
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      error: messages,
    });
  }

  // File upload error
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      success: false,
      error: 'File size too large. Max 5MB allowed',
    });
  }

  if (err.code === 'LIMIT_UNEXPECTED_FILE') {
    return res.status(400).json({
      success: false,
      error: 'Unexpected file field',
    });
  }

  // Default to 500 server error
  res.status(500).json({
    success: false,
    error: 'Server Error',
  });
};

const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    error: 'Not found',
  });
};

module.exports = {
  errorHandler,
  notFound,
};
