import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyB2__Cd0WKlMU-YmaRaGu7_NhqEE6Itkv4",
    authDomain: "firevuechat-d1d88.firebaseapp.com",
    projectId: "firevuechat-d1d88",
    storageBucket: "firevuechat-d1d88.appspot.com",
    messagingSenderId: "215084003538",
    appId: "1:215084003538:web:d19d04ff6231de1edb3d0b"
}

const db = firebase.initializeApp(config);

export default db;


