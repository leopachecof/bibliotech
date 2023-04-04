import { addDoc, doc, endBefore, getDoc, getDocs, limit, limitToLast, orderBy, query, startAfter, updateDoc } from "firebase/firestore";
import { emprestimosCollection } from "./collections";

export async function adicionarEmprestimo(data) {
    await addDoc(emprestimosCollection, data);
}
export async function getEmprestimos() {

    let q = query(emprestimosCollection, limit(11), orderBy('leitor','asc'))
    const snapshot = await getDocs(q);
    let lastDoc = snapshot.docs[snapshot.docs.length - 1];
    let firstDoc = snapshot.docs[0]
    let emprestimos = [];
    snapshot.forEach(doc => {
        emprestimos.push({ ...doc.data(), id: doc.id });
    });
    return { emprestimos, lastDoc, firstDoc };
}

export async function getEmprestimosNext(lastVisible) {

    let q = query(emprestimosCollection,limit(11), orderBy('leitor','asc'),startAfter(lastVisible))
    const snapshot = await getDocs(q);
    let lastDoc = snapshot.docs[snapshot.docs.length - 1];
    let firstDoc = snapshot.docs[0]
    let emprestimos = [];
    snapshot.forEach(doc => {
        emprestimos.push({ ...doc.data(), id: doc.id });
    });
    return { emprestimos, lastDoc, firstDoc };
}

export async function getEmprestimosPrevious(firstVisible) {

    let q = query(emprestimosCollection, orderBy('leitor', 'asc'), limitToLast(11), endBefore(firstVisible))
    const snapshot = await getDocs(q);
    let lastDoc = snapshot.docs[snapshot.docs.length - 1];
    let firstDoc = snapshot.docs[0]
    let emprestimos = [];
    snapshot.forEach(doc => {
        emprestimos.push({ ...doc.data(), id: doc.id });
    });
    return { emprestimos, lastDoc, firstDoc };

}


export async function getEmprestimo(id) {
    const document = await getDoc(doc(emprestimosCollection, id));
    return { ...document.data(), id: document.id };
}

export async function updateEmprestimo(id, data) {
    await updateDoc(doc(emprestimosCollection, id), data);
}