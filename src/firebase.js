import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBvDn-8xFu4X5jUnDKWF-chl7DmMOEV8yY",
  authDomain: "ken-crud.firebaseapp.com",
  projectId: "ken-crud",
  storageBucket: "ken-crud.appspot.com",
  messagingSenderId: "350583604992",
  appId: "1:350583604992:web:0a7722045f812d2d0ed5e5"
};

  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();