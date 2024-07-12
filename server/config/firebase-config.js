const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(process.env.FIREBASE_ADMIN_SDK_PATH),
});


module.exports = admin;

