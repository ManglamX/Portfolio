import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApwsyfONbbBnrOBd84iVUDVFIPOfcS4l0",
  authDomain: "portfolio-6b3f5.firebaseapp.com",
  projectId: "portfolio-6b3f5",
  storageBucket: "portfolio-6b3f5.firebasestorage.app",
  messagingSenderId: "317556318664",
  appId: "1:317556318664:web:471ce16ff6a225d1c0a0fd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };