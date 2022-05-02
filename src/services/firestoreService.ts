import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";
import { Account } from "../interfaces/interfaces";

export const insertAccount = async (account:Account) => {
    try {
        const docRef = collection(db, 'accounts');
        const response = await addDoc(docRef, account);
        return response;
    } catch (error) {
        console.log(error);
        
    }
}