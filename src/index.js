
import navigate from './navigation';


// Initialize Firebase
const config = {
    apiKey: "AIzaSyBDEMCpAcHVHNVepHxGTvchPtKF-ZYDD1o",
    authDomain: "chat-3688c.firebaseapp.com",
    databaseURL: "https://chat-3688c.firebaseio.com",
    projectId: "chat-3688c",
    storageBucket: "chat-3688c.appspot.com",
    messagingSenderId: "302534719021"
};

firebase.initializeApp(config);

navigate('loading-screen');