import { addDoc, collection, doc, DocumentData, getDoc, getDocs, query, QuerySnapshot, where } from "firebase/firestore";
import { db } from "../../firebase.config";
import { User } from "../../interfaces/interfaces";

const userMapping = (querySnapshot: QuerySnapshot<DocumentData>) => {
    const users: User[] = [];

    querySnapshot.forEach((document) => {
        const user: any = { ...document.data() };
        user.docId = document.id;
        users.push(user);
    })

    return users;
}

export const insertUserService = async (user: User) => {
    try {
        const docRef = collection(db, 'users');
        const response = await addDoc(docRef, user);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export const getUsers = async () => {

    try {
        const collectionRef = collection(db, 'users');
        const querySnapshot = await getDocs(collectionRef);
        return userMapping(querySnapshot);

    } catch (error) {
        console.log(error);

    }
}


export const getUsersByService = async (idService: number) => {


    try {
        const collectionRef = collection(db, 'users');
        const q = query(collectionRef, where("serviceType", "==", idService));
        const querySnapshot = await getDocs(q);

        return userMapping(querySnapshot);


    } catch (error) {
        console.log(error);

    }
}

export const getUserById = async (id: number) => {
    try {
        const docRef = doc(db, "users", String(id));
        const document = await getDoc(docRef);
        return document.data();
    } catch (error) {
        console.log(error);

    }
}



