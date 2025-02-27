import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Minha chave de acesso firebase
const firebaseConfig = {

  apiKey: "AIzaSyD7LgkI3apW1d_AXewyxvLNhTKdXdkO1sg",
  authDomain: "bibliotech-guilhermethomazini.firebaseapp.com",
  projectId: "bibliotech-guilhermethomazini",
  storageBucket: "bibliotech-guilhermethomazini.appspot.com",
  messagingSenderId: "532901382196",
  appId: "1:532901382196:web:bb77d67b2eac84f2a96261"

};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
