const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log("Hello Qasim Form karachi");
  response.send("Hello Qasim Buddy Firebase!");
});

exports.getScreams = functions.https.onRequest((request, response) => {
  return admin
    .firestore()
    .collection("screams")
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) => {
        screams.push(doc.data());
      });
      return response.json(screams);
    })
    .catch((err) => {
      console.error(err);
      response.status(500).json({ error: err.code });
    });
});
