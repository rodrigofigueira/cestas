import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDBEhFgDNqa81T4CaTcWqNLZ4YQ21I1y7A",
  authDomain: "crud-d3083.firebaseapp.com",
  projectId: "crud-d3083",
  storageBucket: "crud-d3083.appspot.com",
  messagingSenderId: "702365530017",
  appId: "1:702365530017:web:4415969881e1e3533afde0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
