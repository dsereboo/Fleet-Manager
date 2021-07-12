import firebase from "firebase"

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLPsu0K2WVqDm7q4290ucrsIN9Iu0URYw",
    authDomain: "fleet-manager-d1cef.firebaseapp.com",
    projectId: "fleet-manager-d1cef",
    storageBucket: "fleet-manager-d1cef.appspot.com",
    messagingSenderId: "824665586835",
    appId: "1:824665586835:web:67e0796e6762ca85c3a166",
    measurementId: "G-GJFH0J3L3R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase