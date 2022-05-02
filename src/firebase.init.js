
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;


// const firebaseConfig = {
//     apiKey: "AIzaSyChlh2dsOPK_ynrQGipvF__34NATh4y1z8",
//     authDomain: "warehouse-management-332f6.firebaseapp.com",
//     projectId: "warehouse-management-332f6",
//     storageBucket: "warehouse-management-332f6.appspot.com",
//     messagingSenderId: "980544896912",
//     appId: "1:980544896912:web:c62af7f06a9437832b7d15"
// };

// process.env.REACT_APP_apiKey