import { addDoc, collection, deleteDoc, doc, DocumentData, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase.config";
import { PreRegister } from "../../interfaces/interfaces";

const preRegisterMapping = (querySnapshot: QuerySnapshot<DocumentData>) => {
    const preRegisters: PreRegister[] = [];

    querySnapshot.forEach((document) => {
        const preRegister: any = { ...document.data() };
        preRegister.docId = document.id;
        preRegisters.push(preRegister);
    })

    return preRegisters;
}

export const insertPreregisterService = async (preRegister: PreRegister) => {
    try {
        const docRef = collection(db, 'preregisters');
        const response = await addDoc(docRef, preRegister);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export const getPreRegisters = async () => {

    try {
        const collectionRef = collection(db, 'preregisters');
        const querySnapshot = await getDocs(collectionRef);
        return preRegisterMapping(querySnapshot);

    } catch (error) {
        console.log(error);

    }
}

export const deletePreRegister = async (docId: string) => {
    try {
        const docRef = doc(db, 'preregisters', docId);
        const response = await deleteDoc(docRef)
        return response;
    } catch (error) {
        console.log(error);

    }
}

