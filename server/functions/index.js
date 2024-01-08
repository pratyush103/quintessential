/* eslint-disable no-unused-vars */
/*  eslint linebreak-style: ["error", "windows"]*/
const express = require("express");
const {signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  connectAuthEmulator} = require("firebase/auth");

// Initialize Firebase
const {initializeApp} = require("firebase/app");
const {getFirestore} = require("firebase/firestore");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

// Firebase configuration
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
const db = getFirestore(fireApp);
const auth = getAuth(fireApp);

// Connect to the Firebase Authentication emulator if running locally
connectAuthEmulator(auth, "http://localhost:9099");

// Express endpoint for user sign-up
app.post("/signup-email", (req, res) => {
  const {email, password} = req.body;

  // Sign up the user with email and password
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        res.json(user); // Send the user details as JSON response
        console.log(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(400).json({errorCode, errorMessage});
        // Send error details as JSON response
      });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
