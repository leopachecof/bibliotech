import {
    addDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { livrosCollection } from "./collections";
import { storage } from "./config"

export async function addLivro(data) {
    await addDoc(livrosCollection, data);
}

export async function getLivros() {
    const q = query(livrosCollection, where("boolean", "==", true))
    const snapshot = await getDocs(q);
    let livros = [];
    snapshot.forEach(doc => {
        livros.push({...doc.data(), id: doc.id});
    })
    return livros;
}

export async function getLivro(id) {
    const q = query(livrosCollection, where("boolean", "==", true))
    const document = await getDoc(doc(q, id));
    return {...document.data(), id: document.id};
}

export async function updateLivro(id, data) {
    await updateDoc(doc(livrosCollection, id), data);
}

export async function uploadCapaLivro(imagem) {
    const filename = imagem.name;
    const imageRef = ref(storage, `livros/${filename}`);
    const result = await uploadBytes(imageRef, imagem);
    return await getDownloadURL(result.ref);
}