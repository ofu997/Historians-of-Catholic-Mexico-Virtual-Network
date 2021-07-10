import firebase from 'firebase/app'
import 'firebase/storage'


var firebaseConfig = {
  apiKey: "AIzaSyBaWPas4V1ozsjRiMCAdn8_KXg4YkxTHIs",
  authDomain: "historians-of-catholic-mexico.firebaseapp.com",
  projectId: "historians-of-catholic-mexico",
  storageBucket: "historians-of-catholic-mexico.appspot.com",
  messagingSenderId: "130521111571",
  appId: "1:130521111571:web:42ead1199e6985ec38b3e6",
  measurementId: "G-5QMD6S7SZH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage()

export {
  storage, firebase as default
}
