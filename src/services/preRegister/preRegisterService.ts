import { addDoc, collection, DocumentData, getDocs, QuerySnapshot } from "firebase/firestore";
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


// export const getUsersByService = async (idService: number) => {


//     try {
//         const collectionRef = collection(db, 'users');
//         const q = query(collectionRef, where("serviceType", "==", idService));
//         const querySnapshot = await getDocs(q);

//         return userMapping(querySnapshot);


//     } catch (error) {
//         console.log(error);

//     }
// }

// export const getUserById = async (id: number) => {
//     try {
//         const docRef = doc(db, "users", String(id));
//         const document = await getDoc(docRef);
//         return document.data();
//     } catch (error) {
//         console.log(error);

//     }
// }
