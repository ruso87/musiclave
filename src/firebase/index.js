import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBK0HMerE9D9QytMB3ODg8AZsiipsv0Cc",
  authDomain: "musiclave-6b3d6.firebaseapp.com",
  projectId: "musiclave-6b3d6",
  storageBucket: "musiclave-6b3d6.appspot.com",
  messagingSenderId: "851969229083",
  appId: "1:851969229083:web:46adecefb97638370a53be"
};

// Initialize Firebase y lo pongo en app
const app = initializeApp(firebaseConfig);

// getData devuelve la conexion con firestore a mi app
export const getData = () => getFirestore(app);