import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Minha chave de acesso firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIkNmSPp7GcfS4g4bFQPFPDrjYZUVJWjc",
  authDomain: "bibliotech-goettens.firebaseapp.com",
  projectId: "bibliotech-goettens",
  storageBucket: "bibliotech-goettens.appspot.com",
  messagingSenderId: "613190513521",
  appId: "1:613190513521:web:03de743a604c470b60fcd0"
};

// Chaves de acesso ao firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCGV-hKd1DwX0wKcmlJV65SF1V2m1Bo9eY",
//   authDomain: "bibliotech-aulas-241dd.firebaseapp.com",
//   projectId: "bibliotech-aulas-241dd",
//   storageBucket: "bibliotech-aulas-241dd.appspot.com",
//   messagingSenderId: "455282911729",
//   appId: "1:455282911729:web:37e3cca50849ce62b73c50",
// };

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);
