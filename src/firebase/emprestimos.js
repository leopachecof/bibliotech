import { addDoc, doc, getDoc, getDocs, limit, query, startAfter, updateDoc } from "firebase/firestore";
import { emprestimosCollection } from "./collections";

export async function adicionarEmprestimo(data) {
    await addDoc(emprestimosCollection, data);
}

export async function   getEmprestimos(lastVisible) {
    let q;
    if (lastVisible){
        q = query(emprestimosCollection,startAfter(lastVisible), limit(11))
    }
    else{
        q = query(emprestimosCollection, limit(11))
    }
    const snapshot = await getDocs(q);
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];
    let emprestimos = [];
    const firstDoc = snapshot.docs[0] - lastDoc;;
    snapshot.forEach(doc => {
        emprestimos.push({ ...doc.data(), id: doc.id });
    });
    return {emprestimos, lastDoc,firstDoc};
}


export async function getEmprestimo(id) {
    const document = await getDoc(doc(emprestimosCollection, id));
    return { ...document.data(), id: document.id };
}

export async function updateEmprestimo(id, data) {
    await updateDoc(doc(emprestimosCollection, id), data);
}