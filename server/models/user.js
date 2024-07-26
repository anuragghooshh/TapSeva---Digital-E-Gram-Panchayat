const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  sex : {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true
  },
  aadhaarNo:{
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['villager', 'admin', 'staff'],
    default: 'villager',
  }
});

module.exports = mongoose.model('User', UserSchema);