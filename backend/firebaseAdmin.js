// firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('./tracknclassify-firebase-adminsdk-p6n1s-270656f6a2.json'); // Replace with the path to your Firebase Admin SDK service account key

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;
