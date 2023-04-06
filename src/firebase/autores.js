import { addDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { autoresCollection } from "./collections";


export async function addAutor(data) {
    console.log(data)
    await addDoc(autoresCollection, data);
}

export async function getAutores() {
    const snapshot = await getDocs(autoresCollection);
    let autores = [];
    snapshot.forEach(doc => {
        autores.push({...doc.data(), id: doc.id});
    })
    return autores;
}

export async function getAutor(id){
    const document = await getDoc(doc(autoresCollection, id));
    return {...document.data(), id: document.id}
}