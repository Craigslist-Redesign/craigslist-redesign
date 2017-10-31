import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyCUqxdZnU3XJk-vuo_OgjSfUPMG6i7ztaQ",
  authDomain: "craiglist-redesign.firebaseapp.com",
  databaseURL: "https://craiglist-redesign.firebaseio.com",
  projectId: "craiglist-redesign",
  storageBucket: "craiglist-redesign.appspot.com",
  messagingSenderId: "518734229789"
};
firebase.initializeApp(config);
export default firebase;
