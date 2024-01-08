/* eslint-disable no-unused-vars */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//  https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.

const {onRequest} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

// Import the functions you need from the SDKs you need
const {getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword} = require("firebase-admin/auth");
const {getAnalytics} = require("firebase/analytics");

// Express Setup
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALza1jqAvS7YLHWqMwNHycGwNytNaLNSc",
  authDomain: "quintessential-6c53e.firebaseapp.com",
  databaseURL: "https://quintessential-6c53e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quintessential-6c53e",
  storageBucket: "quintessential-6c53e.appspot.com",
  messagingSenderId: "1022774256994",
  appId: "1:1022774256994:web:2153ada209319f1d57b83b",
  measurementId: "G-RFVFRJW6RD",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireApp);
const db = getFirestore(fireApp);
const auth = getAuth(fireApp);

connectAuthEmulator(auth, "http://localhost:9099");

// Firebase Methods

fireApp.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });


// Express Methods and enpoints
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
