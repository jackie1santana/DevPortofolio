const admin = require("firebase-admin");
const serviceAccount = require('./serviceAccount.json')

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devportfolio-may-2020.firebaseio.com",
});

const db = firebase.firestore()


module.exports = { db }
