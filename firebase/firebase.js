
////TEEESSSTTT

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDocs, addDoc, collection, getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
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
//Initialisation de la BDD
const db = getFirestore(app);

 //Connexion utilisateur
const auth = getAuth();

export function login(email, password){
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid)
    // Redirige à la connexion sur la page admin.html si, la connexion est OK
    window.location.href = "../back-office/admin.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Erreur')
  });
}

// Vérifie si l'utilisateur est bien connecté
export function isLogin(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
    //Si connecté
      const uid = user.uid;
      // ...
      console.log(uid)
    } else {
      // Si non connecté, on redirige vers le login.
      console.log('Non connecté!')
      window.location.href = "./login.html"
    }
  });
}

export async function saveContent(content){

  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "articles"), content);
  console.log("Document written with ID: ", docRef.id);

  localStorage.setItem(docRef.id, JSON.stringify(content))

}

export async function loadContent(){
  const querySnapshot = await getDocs(collection(db, "articles"));
  const articles = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const article = {
      id : doc.id,
      data : doc.data(),
    }
    articles.push(article)

  });

  return articles

}


export async function loadOneDoc(id){
  const docRef = doc(db, "articles", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  // doc.data() will be undefined in this case
  return "No such document!";
}
}