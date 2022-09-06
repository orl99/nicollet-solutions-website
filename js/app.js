console.log('Firebase SDK install and test running....')
// // Required for side-effects
// // /node_modules/
// import firebase from '/node_modules/firebase/firebase';
// import '/node_modules/firestore';
// // Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore();

// db.collection("uiJRKP1vvFDskL6x4rOg").add({
//     company: "test-1",
//     form_comments: "lorem-test",
//     full_name: "Orlando Garcia",
//     phone_number: "+528180913767",
//     work_email: "oeg@cbord.com",
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXiregh6qHJwi2GsaYlaM5q9heq8l0dak",
    authDomain: "nicolletsolutions.firebaseapp.com",
    databaseURL: "https://nicolletsolutions-default-rtdb.firebaseio.com",
    projectId: "nicolletsolutions",
    storageBucket: "nicolletsolutions.appspot.com",
    messagingSenderId: "489296928934",
    appId: "1:489296928934:web:cea6c363984d09cb129467",
    measurementId: "G-SX29SEWFTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log('db', db)

// Add a second document with a generated ID.



try {
    const docRef = await addDoc(collection(db, "registro-contacto-web"), {
        company: "test-1",
        form_comments: "lorem-test",
        full_name: "Orlando Garcia",
        phone_number: "+528180913767",
        work_email: "oeg@cbord.com",
    });

    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}