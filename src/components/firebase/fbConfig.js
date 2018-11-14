import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyA4Kqn6inCPcp-uugxhNMTVM2na7515WK8",
  authDomain: "limonplan-bc4b5.firebaseapp.com",
  databaseURL: "https://limonplan-bc4b5.firebaseio.com",
  projectId: "limonplan-bc4b5",
  storageBucket: "limonplan-bc4b5.appspot.com",
  messagingSenderId: "692101254645"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots:true})

export default firebase;