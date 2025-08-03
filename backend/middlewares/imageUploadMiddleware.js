const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

// Validate Cloudinary configuration
console.log('Cloudinary configuration check:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? 'Set' : 'Missing',
  api_key: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Missing',
  api_secret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Missing'
});

// Configure Cloudinary SDK
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Create Multer storage engine for images
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'blog-images',
    resource_type: 'image',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    public_id: (req, file) => {
      const name = file.fieldname;
      const suffix = Date.now();
      return `${name}_${suffix}`;
    },
  },
});

// Configure Multer for image uploads with simpler configuration
const upload = multer({
  storage,
  limits: { 
    fileSize: 5 * 1024 * 1024, // 5 MB
    fieldSize: 2 * 1024 * 1024, // 2 MB for other fields
  },
  fileFilter: (req, file, cb) => {
    console.log('File upload attempt:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      fieldname: file.fieldname
    });
    
    // Check file type
    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    const allowedExtensions = /\.(jpg|jpeg|png|gif|webp)$/i;
    
    const isValidMimeType = allowedMimeTypes.includes(file.mimetype);
    const isValidExtension = allowedExtensions.test(path.extname(file.originalname));
    
    console.log('File validation:', {
      isValidMimeType,
      isValidExtension,
      extension: path.extname(file.originalname)
    });
    
    if (isValidMimeType && isValidExtension) {
      return cb(null, true);
    }
    cb(new Error('Only JPG, JPEG, PNG, GIF, and WebP images are allowed'));
  },
});

// Export single image upload middleware with better error handling
const uploadImage = (req, res, next) => {
  console.log('Upload middleware called');
  
  // Check if we have the required environment variables
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('Missing Cloudinary environment variables');
    return res.status(500).json({
      status: 'error',
      message: 'Cloudinary configuration is missing'
    });
  }

  // Use a try-catch wrapper for better error handling
  try {
    upload.single('featuredImage')(req, res, (err) => {
      if (err) {
        console.error('Upload error:', err);
        
        // Handle specific error types
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({
            status: 'error',
            message: 'File size too large. Maximum size is 5MB.'
          });
        }
        
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
          return res.status(400).json({
            status: 'error',
            message: 'Unexpected file field. Please use "featuredImage" field.'
          });
        }
        
        return res.status(400).json({
          status: 'error',
          message: err.message || 'File upload failed'
        });
      }
      
      console.log('Upload middleware completed successfully');
      next();
    });
  } catch (error) {
    console.error('Unexpected error in upload middleware:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error during file upload'
    });
  }
};

module.exports = { uploadImage }; 