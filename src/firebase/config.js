import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDwpG1wnq-vQfQrT8E4ZwpKYlXgc2jGxD0",
    authDomain: "olxproject-1eef1.firebaseapp.com",
    projectId: "olxproject-1eef1",
    storageBucket: "olxproject-1eef1.appspot.com",
    messagingSenderId: "794780658622",
    appId: "1:794780658622:web:5d104011f0ef6e8569a7ef",
    measurementId: "G-TD7C5W24R4"
  };

  export default firebase.initializeApp(firebaseConfig)