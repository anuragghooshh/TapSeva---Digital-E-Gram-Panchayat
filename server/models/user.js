const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // uid: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  maritialStatus: {
    type: String,
    required: true
  },
  aadharNo:{
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
    enum: ['villager', 'admin'],
    default: 'villager',
  }
});

module.exports = mongoose.model('User', UserSchema);