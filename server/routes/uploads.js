'use strict';
const express = require('express');
const router = express.Router();
const UploadController = require('../controllers').Uploads;
// const upload = require('../uploadHelper');

// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const AWS = require('aws-sdk');
// const uuidV4 = require('uuid/v4');

// const s3 = new AWS.S3();

// AWS.config.update(
//   {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     subregion: 'us-west-2'
//   });

// const imageFilter = function (req, file, cb) {
//   // accept image only
//   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//     return cb(new Error('Only image files are allowed!'), false);
//   }
//   cb(null, true);
// };


// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.AWS_BUCKET,
//     acl: 'public-read',
//     metadata: function (req, file, cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key: function (req, file, cb) {
//       cb(null, uuidV4() + file.originalname);
//     }
//   }),
//   fileFilter: imageFilter
// });
// const aws = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');

// const s3 = new aws.S3({
//   region: 'us-west-2'
// });

// Initialize multers3 with our s3 config and other options
// const upload = multer({

//   storage: multerS3({
//     s3,
//     bucket: process.env.AWS_BUCKET,
//     acl: 'public-read',
//     metadata(req, file, cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key(req, file, cb) {
//       cb(null, Date.now().toString() + '.png');
//     }
//   })
// });

router.route('/')
  .post(UploadController.upload.single('photo'), UploadController.create);

module.exports = router;
