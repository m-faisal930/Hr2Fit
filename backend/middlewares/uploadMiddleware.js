// const multer = require('multer');
// const path = require('path');

// // Configure storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../uploads'));
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(
//       null,
//       file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
//     );
//   },
// });

// // Create the multer instance
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5MB
//   },
//   fileFilter: (req, file, cb) => {
//     const filetypes = /pdf|doc|docx/;
//     const mimetype = filetypes.test(file.mimetype);
//     const extname = filetypes.test(
//       path.extname(file.originalname).toLowerCase()
//     );

//     if (mimetype && extname) {
//       return cb(null, true);
//     }
//     cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
//   },
// });

// // Export the configured middleware
// const uploadFiles = upload.fields([
//   { name: 'resume', maxCount: 1 },
//   { name: 'coverLetter', maxCount: 1 },
// ]);

// module.exports = {uploadFiles};

















// src/middleware/uploadFiles.js
const  multer = require('multer')
const { v2: cloudinary } = require('cloudinary');
const  { CloudinaryStorage } = require( 'multer-storage-cloudinary');
const  path = require('path');
const dotenv = require('dotenv');

dotenv.config()

// 1. configure Cloudinary SDK
cloudinary.config({
  cloud_name:   process.env.CLOUDINARY_CLOUD_NAME,
  api_key:      process.env.CLOUDINARY_API_KEY,
  api_secret:   process.env.CLOUDINARY_API_SECRET,
  secure:       true,
})

// 2. make a Multer storage engine for “raw” files
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'resumes',            // optional: your CV folder
    resource_type: 'raw',         // raw = PDFs, DOCs, etc.
    format: async (req, file) => {
      // ensure extension stays the same
      return path.extname(file.originalname).substring(1)
    },
    public_id: (req, file) => {
      // e.g. “resume_1612345678901”
      const name = file.fieldname
      const suffix = Date.now()
      return `${name}_${suffix}`
    },
  },
})

// 3. wire up Multer to use that storage, plus your size/filter rules
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    const allowed = /pdf|doc|docx/
    const okMime  = allowed.test(file.mimetype)
    const okExt   = allowed.test(path.extname(file.originalname).toLowerCase())
    if (okMime && okExt) return cb(null, true)
    cb(new Error('Only PDF, DOC & DOCX allowed'))
  },
})

// 4. export the fields middleware exactly as before
const uploadFiles = upload.fields([
  { name: 'resume',     maxCount: 1 },
  { name: 'coverLetter',maxCount: 1 },
])

module.exports = { uploadFiles }