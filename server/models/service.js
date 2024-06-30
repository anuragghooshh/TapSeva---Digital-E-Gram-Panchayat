const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  service_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  DownloadableForm: {
    type: String,
    default: ""  // Link to downloadable form on your website (if available)
  },
  featured: {
    type: Boolean,
    default: false
  },
  applicants: {
    type: Number,
    default: 0
  }
});

const service = mongoose.model('Service', serviceSchema);

module.exports = service;