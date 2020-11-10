import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBx2fP_Wk5I9Oev8f5DAZeedcwJXIAm150",
  authDomain: "test-unreal-time.firebaseapp.com",
  databaseURL: "https://test-unreal-time.firebaseio.com",
  projectId: "test-unreal-time",
  storageBucket: "test-unreal-time.appspot.com",
  messagingSenderId: "40910823145",
  appId: "1:40910823145:web:f209c45e2602ec24dd1a78"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
