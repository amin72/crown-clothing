import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAsqvupm-G9EDZnVryhTgvkDcvRtDpXzeA",
    authDomain: "crown-clothing-fefb7.firebaseapp.com",
    projectId: "crown-clothing-fefb7",
    storageBucket: "crown-clothing-fefb7.appspot.com",
    messagingSenderId: "1059419038079",
    appId: "1:1059419038079:web:9464d99c064d8aac9b3a4a",
    measurementId: "G-S35D3BJVKY"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase