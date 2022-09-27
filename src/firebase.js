import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyDv7i3zZ5QzB4WCe0Y1kuu398i76JnJ8RE',
  authDomain: 'beirut-life-storage.firebaseapp.com',
  projectId: 'beirut-life-storage',
  storageBucket: 'beirut-life-storage.appspot.com',
  messagingSenderId: '847475685847',
  appId: '1:847475685847:web:1dbfaa68cae57a434a3392',
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;