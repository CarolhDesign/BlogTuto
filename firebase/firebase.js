// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvSMTGIq_UqYcBa65b6Utup9MunAMlHZ8",
  authDomain: "blog-8c4fa.firebaseapp.com",
  projectId: "blog-8c4fa",
  storageBucket: "blog-8c4fa.appspot.com",
  messagingSenderId: "356083887714",
  appId: "1:356083887714:web:7a23b2eedac81d26366b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 //Connexion utilisateur
const auth = getAuth();

export function login(email, password){
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Erreur')
  });
}