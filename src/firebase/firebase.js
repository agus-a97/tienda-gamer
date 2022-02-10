import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyD6w-5hF0EEQwU2C0r3T3_qBt0ho8B8_-Y",
    authDomain: "tienda-gamer-63cc7.firebaseapp.com",
    projectId: "tienda-gamer-63cc7",
    storageBucket: "tienda-gamer-63cc7.appspot.com",
    messagingSenderId: "1043864233489",
    appId: "1:1043864233489:web:23c432a42d2d8bbbd073b0"
  });

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}