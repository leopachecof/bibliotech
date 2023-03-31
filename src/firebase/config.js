import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Chaves de acesso ao firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7LgkI3apW1d_AXewyxvLNhTKdXdkO1sg",
  authDomain: "bibliotech-guilhermethomazini.firebaseapp.com",
  projectId: "bibliotech-guilhermethomazini",
  storageBucket: "bibliotech-guilhermethomazini.appspot.com",
  messagingSenderId: "532901382196",
  appId: "1:532901382196:web:bb77d67b2eac84f2a96261"
};

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);
