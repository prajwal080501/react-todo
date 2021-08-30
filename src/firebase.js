import firebase from "firebase";


// const firebaseConfig = {
//     apiKey: "AIzaSyCLGOYSxkSFiXaIMt9_jqyCtjztjGqWRS4",
//     authDomain: "final-todo-app-2d95e.firebaseapp.com",
//     projectId: "final-todo-app-2d95e",
//     storageBucket: "final-todo-app-2d95e.appspot.com",
//     messagingSenderId: "796314803826",
//     appId: "1:796314803826:web:b4326f18a7a8268d9d6ceb"
// };
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLGOYSxkSFiXaIMt9_jqyCtjztjGqWRS4",
    authDomain: "final-todo-app-2d95e.firebaseapp.com",
    projectId: "final-todo-app-2d95e",
    storageBucket: "final-todo-app-2d95e.appspot.com",
    messagingSenderId: "796314803826",
    appId: "1:796314803826:web:b4326f18a7a8268d9d6ceb"

});

const db = firebaseApp.firestore();


export default db;