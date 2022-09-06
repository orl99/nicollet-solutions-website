console.log('Firebase SDK install and test running....');
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
// Add a second document with a generated ID.

// Firestore add contact function
const firestoreAddContact = async (formContactDTO) => {
    try {
        console.log('formContactDTO', formContactDTO);
        const docRef = await addDoc(collection(db, "registro-contacto-web"), formContactDTO);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// scripting logic

const formContact = document.getElementById('formContact');

formContact.addEventListener('submit', e => {
    e.preventDefault();
    const { full_name, work_email, company , phone_number, message} = e.currentTarget;
    const formContactDTO = {
        company: company.value,
        form_comments: message.value,
        full_name: full_name.value,
        phone_number: phone_number.value,
        work_email: work_email.value
    }
    firestoreAddContact(formContactDTO);
});